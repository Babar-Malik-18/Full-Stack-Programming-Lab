"use client";

import { useState } from "react";
import { isEmail } from "@/lib/validation";
import FormError from "./FormError";

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function RegisterForm() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value.trim();
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value.trim();

    const nextErrors: Errors = {};
    if (!firstName) {
      nextErrors.firstName = "First name is required.";
    }
    if (!lastName) {
      nextErrors.lastName = "Last name is required.";
    }
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!isEmail(email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!password) {
      nextErrors.password = "Password is required.";
    } else if (password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters.";
    }
    if (confirmPassword !== password) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Account created successfully! (Demo)");
      form.reset();
    }
  };

  return (
    <form id="registerForm" className="space-y-6 max-w-2xl" noValidate onSubmit={handleSubmit}>
      <fieldset>
        <legend className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 w-full">
          Personal Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              First Name *
            </label>
            <input type="text" name="firstName" className={`form-input ${errors.firstName ? "error" : ""}`} required />
            <FormError message={errors.firstName} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Last Name *
            </label>
            <input type="text" name="lastName" className={`form-input ${errors.lastName ? "error" : ""}`} required />
            <FormError message={errors.lastName} />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Email Address *
          </label>
          <input type="email" name="email" className={`form-input ${errors.email ? "error" : ""}`} required />
          <FormError message={errors.email} />
        </div>
        <div className="mt-3">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" name="newsletter" className="rounded" />
            Sign up for our Newsletter
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 w-full">
          Login Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Password *
            </label>
            <input type="password" name="password" className={`form-input ${errors.password ? "error" : ""}`} required />
            <FormError message={errors.password} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Confirm Password *
            </label>
            <input type="password" name="confirmPassword" className={`form-input ${errors.confirmPassword ? "error" : ""}`} required />
            <FormError message={errors.confirmPassword} />
          </div>
        </div>
      </fieldset>

      <div className="flex items-center gap-4 pt-2">
        <button type="submit" className="btn-navy px-8 py-3 rounded font-semibold text-sm">
          CREATE ACCOUNT
        </button>
        <a href="/auth/login" className="text-sm text-red-600 hover:text-red-800 transition">
          Already have an account? Sign In
        </a>
      </div>
    </form>
  );
}
