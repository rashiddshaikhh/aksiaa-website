"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-navy/10 bg-white p-12 text-center">
        <CheckCircle2 size={38} className="text-cyan-deep" />
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Message sent</h3>
        <p className="mt-2 max-w-xs text-sm text-ink/60">
          Thanks for reaching out - our team will get back to you at{" "}
          <span className="font-medium text-navy">sales@aksiaa.com</span> shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-navy/10 bg-white p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink/70">Name</label>
          <input
            id="name"
            required
            type="text"
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink/70">Company</label>
          <input
            id="company"
            type="text"
            placeholder="Company name"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink/70">Email</label>
          <input
            id="email"
            required
            type="email"
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink/70">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Optional"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className="text-sm font-medium text-ink/70">I&apos;m interested in</label>
          <select
            id="interest"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          >
            <option>Network infrastructure</option>
            <option>Security & SOC</option>
            <option>Cloud migration</option>
            <option>IoT & connectivity</option>
            <option>Managed services</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium text-ink/70">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us about your current setup and what you need."
            className="mt-1.5 w-full resize-none rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full rounded-md bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-royal disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
