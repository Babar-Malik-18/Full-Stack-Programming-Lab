"use client";

import { useState } from "react";
import { isEmail } from "@/lib/validation";
import FormError from "./FormError";

type Errors = { email?: string; password?: string };

export default function LoginForm() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value.trim();

    const nextErrors: Errors = {};
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!isEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!password) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Login successful! (Demo)");
    }
  };

  return (
    <form id="loginForm" className="space-y-4" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Email Address *
        </label>
        <input type="email" name="email" className={`form-input ${errors.email ? "error" : ""}`} required />
        <FormError message={errors.email} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Password *
        </label>
        <input type="password" name="password" className={`form-input ${errors.password ? "error" : ""}`} required />
        <FormError message={errors.password} />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" name="remember" className="rounded" />
          Remember me
        </label>
        <a href="/auth/forgot-password" className="text-sm text-red-600 hover:text-red-800 transition">
          Forgot your password?
        </a>
      </div>
      <button type="submit" className="btn-navy px-8 py-3 rounded font-semibold text-sm">
        SIGN IN
      </button>
    </form>
  );
}
