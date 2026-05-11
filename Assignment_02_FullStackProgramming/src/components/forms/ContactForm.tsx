"use client";

import { useState } from "react";
import { isEmail } from "@/lib/validation";
import FormError from "./FormError";

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const nextErrors: Errors = {};
    if (!name) {
      nextErrors.name = "Name is required.";
    }
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!isEmail(email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!subject) {
      nextErrors.subject = "Subject is required.";
    }
    if (!message) {
      nextErrors.message = "Message is required.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Message sent successfully! (Demo)");
      form.reset();
    }
  };

  return (
    <form id="contactForm" className="space-y-4" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Name *
        </label>
        <input type="text" name="name" className={`form-input ${errors.name ? "error" : ""}`} required />
        <FormError message={errors.name} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Email *
        </label>
        <input type="email" name="email" className={`form-input ${errors.email ? "error" : ""}`} required />
        <FormError message={errors.email} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Telephone
        </label>
        <input type="tel" name="phone" className="form-input" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Subject *
        </label>
        <input type="text" name="subject" className={`form-input ${errors.subject ? "error" : ""}`} required />
        <FormError message={errors.subject} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Message *
        </label>
        <textarea name="message" rows={6} className={`form-input ${errors.message ? "error" : ""}`} required></textarea>
        <FormError message={errors.message} />
      </div>
      <button type="submit" className="btn-navy px-8 py-3 rounded font-semibold text-sm">
        SEND MESSAGE
      </button>
    </form>
  );
}
