"use client";

import { useState } from "react";
import { isEmail } from "@/lib/validation";
import FormError from "./FormError";

type Errors = { email?: string };

export default function ForgotPasswordForm() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    const nextErrors: Errors = {};
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!isEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Password reset link sent to your email! (Demo)");
      form.reset();
    }
  };

  return (
    <form id="forgotPasswordForm" className="space-y-4" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Email Address *
        </label>
        <input type="email" name="email" className={`form-input ${errors.email ? "error" : ""}`} required />
        <FormError message={errors.email} />
      </div>
      <div className="flex items-center gap-4 pt-2">
        <button type="submit" className="btn-navy px-8 py-3 rounded font-semibold text-sm">
          SUBMIT
        </button>
        <a href="/auth/login" className="text-sm text-red-600 hover:text-red-800 transition">
          Back to Login
        </a>
      </div>
    </form>
  );
}
