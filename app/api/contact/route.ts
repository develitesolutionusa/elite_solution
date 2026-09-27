export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required" },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email address" }, { status: 400 });
  }

  // TODO: wire up an email provider (e.g. Resend) or CRM webhook here.
  console.log("New contact request:", {
    name,
    email,
    company: data.company ?? "",
    service: data.service ?? "",
    message,
  });

  return Response.json({ ok: true });
}
