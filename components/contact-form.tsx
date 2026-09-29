"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";

const serviceOptions = [
  "Financial Services",
  "Non Financial Services",
  "Web Development",
  "Graphic Designing",
  "Marketing Strategies",
  "SEO Services",
  "Email Marketing",
  "Help Line Services",
  "Other / Not sure yet",
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0a121c] px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-[#0c1828] p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-white">
            Full name
          </label>
          <input id="name" name="name" required placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-white">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-white">
            Company
          </label>
          <input id="company" name="company" placeholder="Company Inc." className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-white">
            Service needed
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="Other / Not sure yet">
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-white">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your business…"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="glow-btn mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-700 disabled:opacity-60"
      >
        {status === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "sending" ? "Sending…" : "Request a free consultation"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-xl bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400">
          Thanks — we&apos;ll get back to you within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Something went wrong. Please email info@elitesolutionusa.com.
        </p>
      )}
    </form>
  );
}
