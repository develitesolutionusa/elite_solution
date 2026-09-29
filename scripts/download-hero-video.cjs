const https = require("https");
const fs = require("fs");
const path = require("path");

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            Accept: "text/html,application/json",
          },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return get(res.headers.location).then(resolve, reject);
          }
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () =>
            resolve({
              status: res.statusCode,
              data: Buffer.concat(chunks),
              headers: res.headers,
            }),
          );
        },
      )
      .on("error", reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(
        url,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        },
        (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            file.close();
            fs.unlinkSync(dest);
            return download(res.headers.location, dest).then(resolve, reject);
          }
          if (res.statusCode !== 200) {
            reject(new Error("HTTP " + res.statusCode + " for " + url));
            return;
          }
          res.pipe(file);
          file.on("finish", () => file.close(() => resolve(dest)));
        },
      )
      .on("error", reject);
  });
}

(async () => {
  const pageUrl =
    "https://www.pexels.com/video/business-people-working-in-the-office-7148578/";
  const { status, data } = await get(pageUrl);
  const html = data.toString("utf8");
  console.log("page status", status, "bytes", html.length);

  const urls = [
    ...html.matchAll(
      /https:\/\/videos\.pexels\.com\/video-files\/[0-9]+\/[^\s"'\\]+\.mp4/g,
    ),
  ].map((m) => m[0].replace(/\\u002F/g, "/").replace(/\\\//g, "/"));

  const uniq = [...new Set(urls)];
  console.log("found", uniq.length);
  uniq.slice(0, 20).forEach((u) => console.log(u));

  // Prefer HD ~1280 or 1920, avoid huge 4k if possible
  const preferred =
    uniq.find((u) => /1920|1280|hd|720/.test(u)) ||
    uniq.find((u) => !/uhd|4096|3840/.test(u)) ||
    uniq[0];

  if (!preferred) throw new Error("No video URL found");
  console.log("downloading", preferred);

  const dest = path.join("public", "media", "hero-loop.mp4");
  await download(preferred, dest);
  const size = fs.statSync(dest).size;
  console.log("saved", dest, "size", size);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
