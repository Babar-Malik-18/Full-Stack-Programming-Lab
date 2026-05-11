"use client";

import { useState } from "react";
import { isEmail } from "@/lib/validation";
import FormError from "./FormError";

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};

export default function EditAccountForm() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value.trim();
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const newPassword = (form.elements.namedItem("newPassword") as HTMLInputElement).value.trim();
    const confirmNewPassword = (form.elements.namedItem("confirmNewPassword") as HTMLInputElement).value.trim();

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
    if (newPassword && newPassword.length < 6) {
      nextErrors.newPassword = "Password must be at least 6 characters.";
    }
    if (newPassword && confirmNewPassword !== newPassword) {
      nextErrors.confirmNewPassword = "Passwords do not match.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Profile updated successfully! (Demo)");
    }
  };

  return (
    <form id="editAccountForm" className="space-y-6" noValidate onSubmit={handleSubmit}>
      <fieldset>
        <legend className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 w-full">
          Account Information
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              First Name *
            </label>
            <input type="text" name="firstName" defaultValue="John" className={`form-input ${errors.firstName ? "error" : ""}`} required />
            <FormError message={errors.firstName} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Last Name *
            </label>
            <input type="text" name="lastName" defaultValue="Doe" className={`form-input ${errors.lastName ? "error" : ""}`} required />
            <FormError message={errors.lastName} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address *
            </label>
            <input type="email" name="email" defaultValue="johndoe@example.com" className={`form-input ${errors.email ? "error" : ""}`} required />
            <FormError message={errors.email} />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200 w-full">
          Change Password
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Current Password
            </label>
            <input type="password" name="currentPassword" className="form-input" />
            <FormError />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              New Password
            </label>
            <input type="password" name="newPassword" className={`form-input ${errors.newPassword ? "error" : ""}`} />
            <FormError message={errors.newPassword} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Confirm New Password
            </label>
            <input type="password" name="confirmNewPassword" className={`form-input ${errors.confirmNewPassword ? "error" : ""}`} />
            <FormError message={errors.confirmNewPassword} />
          </div>
        </div>
      </fieldset>

      <div className="flex items-center gap-4 pt-2">
        <button type="submit" className="btn-navy px-8 py-3 rounded font-semibold text-sm">
          UPDATE
        </button>
        <a href="/account/my-account" className="text-sm text-gray-500 hover:text-gray-700 transition">
          Back to Dashboard
        </a>
      </div>
    </form>
  );
}
