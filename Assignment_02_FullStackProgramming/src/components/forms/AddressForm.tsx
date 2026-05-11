"use client";

import { useState } from "react";
import { isEmail, isPhone } from "@/lib/validation";
import FormError from "./FormError";

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
};

type AddressFormProps = {
  formId: string;
  submitLabel: string;
  defaultValues: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
};

export default function AddressForm({
  formId,
  submitLabel,
  defaultValues,
}: AddressFormProps) {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors: Errors = {};

    const fields = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value.trim(),
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      street: (form.elements.namedItem("street") as HTMLInputElement).value.trim(),
      city: (form.elements.namedItem("city") as HTMLInputElement).value.trim(),
      state: (form.elements.namedItem("state") as HTMLSelectElement).value.trim(),
      zip: (form.elements.namedItem("zip") as HTMLInputElement).value.trim(),
      country: (form.elements.namedItem("country") as HTMLSelectElement).value.trim(),
    };

    if (!fields.firstName) nextErrors.firstName = "This field is required.";
    if (!fields.lastName) nextErrors.lastName = "This field is required.";
    if (!fields.email) {
      nextErrors.email = "Email is required.";
    } else if (!isEmail(fields.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!fields.phone) {
      nextErrors.phone = "This field is required.";
    } else if (!isPhone(fields.phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!fields.street) nextErrors.street = "This field is required.";
    if (!fields.city) nextErrors.city = "This field is required.";
    if (!fields.state) nextErrors.state = "This field is required.";
    if (!fields.zip) nextErrors.zip = "This field is required.";
    if (!fields.country) nextErrors.country = "This field is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Address updated successfully! (Demo)");
    }
  };

  return (
    <form id={formId} className="space-y-4 max-w-2xl" noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            First Name *
          </label>
          <input type="text" name="firstName" defaultValue={defaultValues.firstName} className={`form-input ${errors.firstName ? "error" : ""}`} required />
          <FormError message={errors.firstName} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Last Name *
          </label>
          <input type="text" name="lastName" defaultValue={defaultValues.lastName} className={`form-input ${errors.lastName ? "error" : ""}`} required />
          <FormError message={errors.lastName} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Email *
        </label>
        <input type="email" name="email" defaultValue={defaultValues.email} className={`form-input ${errors.email ? "error" : ""}`} required />
        <FormError message={errors.email} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Telephone *
        </label>
        <input type="tel" name="phone" defaultValue={defaultValues.phone} className={`form-input ${errors.phone ? "error" : ""}`} required />
        <FormError message={errors.phone} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Street Address *
        </label>
        <input type="text" name="street" defaultValue={defaultValues.street} className={`form-input ${errors.street ? "error" : ""}`} required />
        <FormError message={errors.street} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            City *
          </label>
          <input type="text" name="city" defaultValue={defaultValues.city} className={`form-input ${errors.city ? "error" : ""}`} required />
          <FormError message={errors.city} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            State/Province *
          </label>
          <select name="state" defaultValue={defaultValues.state} className={`form-input ${errors.state ? "error" : ""}`} required>
            <option value="">Please select...</option>
            <option value="CA">California</option>
            <option value="NY">New York</option>
            <option value="TX">Texas</option>
            <option value="FL">Florida</option>
          </select>
          <FormError message={errors.state} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Zip/Postal Code *
          </label>
          <input type="text" name="zip" defaultValue={defaultValues.zip} className={`form-input ${errors.zip ? "error" : ""}`} required />
          <FormError message={errors.zip} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">
          Country *
        </label>
        <select name="country" defaultValue={defaultValues.country} className={`form-input ${errors.country ? "error" : ""}`} required>
          <option value="">Please select...</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="UK">United Kingdom</option>
        </select>
        <FormError message={errors.country} />
      </div>
      <div className="flex items-center gap-4 pt-4">
        <button type="submit" className="btn-navy px-8 py-3 rounded font-semibold text-sm">
          {submitLabel}
        </button>
        <a href="/account/my-account" className="text-sm text-gray-500 hover:text-gray-700 transition">
          Back to Dashboard
        </a>
      </div>
    </form>
  );
}
