import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import { EMAIL, offices, PHONE, PHONE_HREF } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:gap-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-2">
          <p className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-950 uppercase">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            Send us a message
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Tell us where you are and where you want to be. We&apos;ll come back
            with a clear plan and fixed pricing — free, no obligation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={PHONE_HREF}
              className="glow-card flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-brand-200"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-500">
                  Call us
                </span>
                <span className="block text-sm font-bold text-brand-950">
                  {PHONE}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="glow-card flex items-center gap-3.5 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-brand-200"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium text-slate-500">
                  Email us
                </span>
                <span className="block text-sm font-bold text-brand-950">
                  {EMAIL}
                </span>
              </span>
            </a>
          </div>

          <div className="mt-8 space-y-4">
            {offices.map((office) => (
              <div key={office.country} className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <p className="text-sm font-bold text-brand-950">
                    {office.country} office
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">{office.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
