"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import type { Country } from "react-phone-number-input";

type FormData = {
  name: string;
  company: string;
  email: string;
  interest: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  interest: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [country, setCountry] = useState<Country>("IN");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));

    setError("");
  }

  function handlePhoneChange(value?: string) {
    setPhone(value || "");
    setError("");
  }

  function handleCountryChange(value?: Country) {
    if (!value) return;

    setCountry(value);
    setPhone("");
    setError("");
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!form.interest) {
      setError("Please select what you are interested in.");
      return;
    }

    if (!form.message.trim()) {
      setError("Please enter your message.");
      return;
    }

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

        <h3 className="mt-4 font-display text-xl font-semibold text-ink">
          Message sent
        </h3>

        <p className="mt-2 max-w-xs text-sm text-ink/60">
          Thanks for reaching out - our team will get back to you at{" "}
          <span className="font-medium text-navy">
            sales@aksiaa.com
          </span>{" "}
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-navy/10 bg-white p-8 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-ink/70"
          >
            Name
          </label>

          <input
            id="name"
            required
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="text-sm font-medium text-ink/70"
          >
            Company
          </label>

          <input
            id="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Company name"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-ink/70"
          >
            Email
          </label>

          <input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-medium text-ink/70"
          >
            Phone
          </label>

          <div className="phone-field mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5">
            <PhoneInput
              id="phone"
              international
              defaultCountry="IN"
              country={country}
              value={phone}
              onCountryChange={handleCountryChange}
              onChange={handlePhoneChange}
              placeholder="Enter phone number"
              required
            />
          </div>
        </div>

        {/* Interest */}
        <div className="sm:col-span-2">
          <label
            htmlFor="interest"
            className="text-sm font-medium text-ink/70"
          >
            I&apos;m interested in
          </label>

          <select
            id="interest"
            value={form.interest}
            onChange={handleChange}
            required
            className="mt-1.5 w-full rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          >
            <option value="" disabled>
              Select an option
            </option>

            <option value="Network infrastructure">
              Network infrastructure
            </option>

            <option value="Security & SOC">
              Security &amp; SOC
            </option>

            <option value="Cloud migration">
              Cloud migration
            </option>

            <option value="IoT & connectivity">
              IoT &amp; connectivity
            </option>

            <option value="Managed services">
              Managed services
            </option>

            <option value="Something else">
              Something else
            </option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-ink/70"
          >
            Message
          </label>

          <textarea
            id="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your current setup and what you need."
            className="mt-1.5 w-full resize-none rounded-md border border-navy/15 bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus:border-navy/40"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <p className="mt-4 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-7 rounded-md bg-navy px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-royal disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}