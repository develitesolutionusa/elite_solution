import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { EMAIL, LINKEDIN, PHONE, PHONE_HREF } from "@/lib/content";

type IconProps = { className?: string };

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.725-8.835L1.5 2.25h6.172l4.255 5.647L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
}

function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  {
    href: "https://elitesolutionusa.com/category/business/",
    label: "Blog",
  },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#financial", label: "Financial Services" },
  { href: "/services#non-financial", label: "Non Financial Services" },
  { href: "/services#financial", label: "Accounting & Bookkeeping" },
  { href: "/services#financial", label: "Tax Services" },
  { href: "/services#non-financial", label: "Web Development" },
  { href: "/services#non-financial", label: "SEO Services" },
];

const social = [
  { href: LINKEDIN, icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://twitter.com", icon: XIcon, label: "Twitter" },
  {
    href: "https://www.facebook.com/profile.php?id=61569394719342",
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/elite.solutions3/",
    icon: InstagramIcon,
    label: "Instagram",
  },
  { href: "https://youtube.com", icon: YoutubeIcon, label: "YouTube" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050910] text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#008DDA] text-white">
              <Globe className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Elite Solution
            </span>
          </a>
          <p className="mt-4 text-sm font-semibold text-[#008DDA]">
            Innovative Solutions. Lasting Impact.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            CPA-led financial services and digital solutions that help
            businesses grow with clarity.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="glow-link text-sm text-slate-400 transition-colors hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            Our Services
          </h3>
          <ul className="mt-5 space-y-2.5">
            {serviceLinks.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  className="glow-link text-sm text-slate-400 transition-colors hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-wide text-white uppercase">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#008DDA]" />
              <a
                href={PHONE_HREF}
                className="glow-link text-slate-300 hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                {PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#008DDA]" />
              <a
                href={`mailto:${EMAIL}`}
                className="glow-link text-slate-300 hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4"
              >
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#008DDA]" />
              <span className="text-slate-400">USA · KSA · Pakistan</span>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="glow-social flex h-9 w-9 items-center justify-center rounded-full bg-[#008DDA] text-white transition-colors hover:bg-[#0099ef]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Elite Solution USA. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="#"
              className="glow-link hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="glow-link hover:text-[#008DDA] hover:underline hover:decoration-2 hover:underline-offset-4"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
