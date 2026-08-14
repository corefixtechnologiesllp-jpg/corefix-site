"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const requirement = String(data.get("requirement") || "");

    const subject = encodeURIComponent(
      `Corefix Website Enquiry - ${company || name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nCompany: ${company}\nRequirement:\n${requirement}`
    );

    window.location.href =
      `mailto:sales@corefixtechnologies.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[.03] p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white">
            Name
          </span>

          <input
            required
            name="name"
            type="text"
            className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-white">
            Phone
          </span>

          <input
            required
            name="phone"
            type="tel"
            className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
            placeholder="Your phone number"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-white">
            Company / Institution
          </span>

          <input
            name="company"
            type="text"
            className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
            placeholder="Company, school, factory or institution"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-white">
            Requirement
          </span>

          <textarea
            required
            name="requirement"
            rows={6}
            className="w-full border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"
            placeholder="Describe your project or requirement"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 bg-yellow-400 px-7 py-3 font-black text-black hover:bg-yellow-300"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="mt-4 text-sm text-green-400">
          Your email application is being opened. Please send it to complete
          the enquiry.
        </p>
      )}
    </form>
  );
}