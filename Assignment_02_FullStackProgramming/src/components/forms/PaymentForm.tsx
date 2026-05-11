"use client";

import { useState } from "react";
import { isCardNumber, isEmail, isPhone } from "@/lib/validation";
import FormError from "./FormError";

type Errors = {
  billingFirstName?: string;
  billingLastName?: string;
  billingEmail?: string;
  billingPhone?: string;
  billingStreet?: string;
  billingCity?: string;
  billingState?: string;
  billingZip?: string;
  billingCountry?: string;
  cardType?: string;
  cardNumber?: string;
  expMonth?: string;
  expYear?: string;
  cvv?: string;
  terms?: string;
};

export default function PaymentForm() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const values = {
      billingFirstName: (form.elements.namedItem("billingFirstName") as HTMLInputElement).value.trim(),
      billingLastName: (form.elements.namedItem("billingLastName") as HTMLInputElement).value.trim(),
      billingEmail: (form.elements.namedItem("billingEmail") as HTMLInputElement).value.trim(),
      billingPhone: (form.elements.namedItem("billingPhone") as HTMLInputElement).value.trim(),
      billingStreet: (form.elements.namedItem("billingStreet") as HTMLInputElement).value.trim(),
      billingCity: (form.elements.namedItem("billingCity") as HTMLInputElement).value.trim(),
      billingState: (form.elements.namedItem("billingState") as HTMLSelectElement).value.trim(),
      billingZip: (form.elements.namedItem("billingZip") as HTMLInputElement).value.trim(),
      billingCountry: (form.elements.namedItem("billingCountry") as HTMLSelectElement).value.trim(),
      cardType: (form.elements.namedItem("cardType") as HTMLSelectElement).value.trim(),
      cardNumber: (form.elements.namedItem("cardNumber") as HTMLInputElement).value.trim(),
      expMonth: (form.elements.namedItem("expMonth") as HTMLSelectElement).value.trim(),
      expYear: (form.elements.namedItem("expYear") as HTMLSelectElement).value.trim(),
      cvv: (form.elements.namedItem("cvv") as HTMLInputElement).value.trim(),
      terms: (form.elements.namedItem("terms") as HTMLInputElement).checked,
    };

    const nextErrors: Errors = {};
    if (!values.billingFirstName) nextErrors.billingFirstName = "This field is required.";
    if (!values.billingLastName) nextErrors.billingLastName = "This field is required.";
    if (!values.billingEmail) {
      nextErrors.billingEmail = "Email is required.";
    } else if (!isEmail(values.billingEmail)) {
      nextErrors.billingEmail = "Please enter a valid email.";
    }
    if (!values.billingPhone) {
      nextErrors.billingPhone = "This field is required.";
    } else if (!isPhone(values.billingPhone)) {
      nextErrors.billingPhone = "Please enter a valid phone number.";
    }
    if (!values.billingStreet) nextErrors.billingStreet = "This field is required.";
    if (!values.billingCity) nextErrors.billingCity = "This field is required.";
    if (!values.billingState) nextErrors.billingState = "This field is required.";
    if (!values.billingZip) nextErrors.billingZip = "This field is required.";
    if (!values.billingCountry) nextErrors.billingCountry = "This field is required.";
    if (!values.cardType) nextErrors.cardType = "This field is required.";
    if (!values.cardNumber) {
      nextErrors.cardNumber = "This field is required.";
    } else if (!isCardNumber(values.cardNumber)) {
      nextErrors.cardNumber = "Please enter a valid card number.";
    }
    if (!values.expMonth) nextErrors.expMonth = "This field is required.";
    if (!values.expYear) nextErrors.expYear = "This field is required.";
    if (!values.cvv) nextErrors.cvv = "This field is required.";

    if (!values.terms) {
      nextErrors.terms = "Please accept the Terms and Conditions.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      alert("Order placed successfully! (Demo)");
    }
  };

  return (
    <form id="paymentForm" noValidate onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-1 min-w-0">
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              <span className="inline-block w-7 h-7 bg-red-600 text-white text-center rounded-full text-sm leading-7 mr-2">
                1
              </span>
              Billing Address
            </h2>
            <div className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    First Name *
                  </label>
                  <input type="text" name="billingFirstName" className={`form-input ${errors.billingFirstName ? "error" : ""}`} required />
                  <FormError message={errors.billingFirstName} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Last Name *
                  </label>
                  <input type="text" name="billingLastName" className={`form-input ${errors.billingLastName ? "error" : ""}`} required />
                  <FormError message={errors.billingLastName} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Email Address *
                </label>
                <input type="email" name="billingEmail" className={`form-input ${errors.billingEmail ? "error" : ""}`} required />
                <FormError message={errors.billingEmail} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Telephone *
                </label>
                <input type="tel" name="billingPhone" className={`form-input ${errors.billingPhone ? "error" : ""}`} required />
                <FormError message={errors.billingPhone} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Street Address *
                </label>
                <input type="text" name="billingStreet" className={`form-input ${errors.billingStreet ? "error" : ""}`} required />
                <FormError message={errors.billingStreet} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    City *
                  </label>
                  <input type="text" name="billingCity" className={`form-input ${errors.billingCity ? "error" : ""}`} required />
                  <FormError message={errors.billingCity} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    State/Province *
                  </label>
                  <select name="billingState" className={`form-input ${errors.billingState ? "error" : ""}`} required>
                    <option value="">Select...</option>
                    <option value="CA">California</option>
                    <option value="NY">New York</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                  </select>
                  <FormError message={errors.billingState} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Zip Code *
                  </label>
                  <input type="text" name="billingZip" className={`form-input ${errors.billingZip ? "error" : ""}`} required />
                  <FormError message={errors.billingZip} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Country *
                </label>
                <select name="billingCountry" className={`form-input ${errors.billingCountry ? "error" : ""}`} required>
                  <option value="">Select...</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
                <FormError message={errors.billingCountry} />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <input type="checkbox" name="shipDifferent" className="rounded" id="shipDifferent" />
                Ship to a different address?
              </label>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              <span className="inline-block w-7 h-7 bg-red-600 text-white text-center rounded-full text-sm leading-7 mr-2">
                2
              </span>
              Payment Information
            </h2>
            <div className="space-y-4 max-w-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Card Type *
                </label>
                <select name="cardType" className={`form-input ${errors.cardType ? "error" : ""}`} required>
                  <option value="">Select card type...</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                  <option value="amex">American Express</option>
                  <option value="discover">Discover</option>
                </select>
                <FormError message={errors.cardType} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  Card Number *
                </label>
                <input type="text" name="cardNumber" className={`form-input ${errors.cardNumber ? "error" : ""}`} placeholder="XXXX XXXX XXXX XXXX" maxLength={19} required />
                <FormError message={errors.cardNumber} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Expiration Month *
                  </label>
                  <select name="expMonth" className={`form-input ${errors.expMonth ? "error" : ""}`} required>
                    <option value="">Month</option>
                    <option value="01">01 - January</option>
                    <option value="02">02 - February</option>
                    <option value="03">03 - March</option>
                    <option value="04">04 - April</option>
                    <option value="05">05 - May</option>
                    <option value="06">06 - June</option>
                    <option value="07">07 - July</option>
                    <option value="08">08 - August</option>
                    <option value="09">09 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                  </select>
                  <FormError message={errors.expMonth} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Expiration Year *
                  </label>
                  <select name="expYear" className={`form-input ${errors.expYear ? "error" : ""}`} required>
                    <option value="">Year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                  <FormError message={errors.expYear} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">
                    Security Code *
                  </label>
                  <input type="text" name="cvv" className={`form-input ${errors.cvv ? "error" : ""}`} placeholder="CVV" maxLength={4} required />
                  <FormError message={errors.cvv} />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              <span className="inline-block w-7 h-7 bg-red-600 text-white text-center rounded-full text-sm leading-7 mr-2">
                3
              </span>
              Review Your Order
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Qty</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img src="/assets/images/113152315_spa-566.png" alt="Spa" className="w-12 h-12 object-cover rounded" />
                        <span className="text-gray-800 font-medium">5-7 Person 158 Jet Spa with Stereo System</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">1</td>
                    <td className="py-3 px-4 text-right text-gray-800 font-semibold">$5,012.50</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img src="/assets/images/113152315_spa-566 copy.png" alt="Spa" className="w-12 h-12 object-cover rounded" />
                        <span className="text-gray-800 font-medium">TV Theater Spa - Premium Home Entertainment</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">1</td>
                    <td className="py-3 px-4 text-right text-gray-800 font-semibold">$5,012.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6">
            <label className="flex items-start gap-2 text-sm text-gray-600 mb-4">
              <input type="checkbox" name="terms" className="rounded mt-0.5" required />
              <span>
                I accept the <a href="/shopping/terms" className="text-red-600 hover:text-red-800 transition underline">Terms and Conditions</a> *
              </span>
            </label>
            <FormError message={errors.terms} />
            <button type="submit" className="btn-red px-10 py-3 rounded font-bold text-sm tracking-wide">
              PLACE ORDER
            </button>
          </div>
        </div>

        <aside className="lg:w-80 flex-shrink-0">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-4">
            <h3 className="font-bold text-gray-800 text-lg mb-4 pb-3 border-b border-gray-200">
              Order Summary
            </h3>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Cart Subtotal</span>
                <span className="font-semibold text-gray-800">$10,025.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-600">$30.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-600">$0.00</span>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between">
                <span className="font-bold text-gray-800 text-base">Order Total</span>
                <span className="font-bold text-red-600 text-xl">$10,055.00</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-sm text-gray-800 mb-3">Items in Your Cart (2)</h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <img src="/assets/images/113152315_spa-566.png" alt="Spa" className="w-12 h-12 object-cover rounded flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-700 font-medium truncate">5-7 Person 158 Jet Spa</p>
                    <p className="text-xs text-gray-500">Qty: 1</p>
                    <p className="text-xs text-red-600 font-semibold">$5,012.50</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img src="/assets/images/113152315_spa-566 copy.png" alt="Spa" className="w-12 h-12 object-cover rounded flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-700 font-medium truncate">TV Theater Spa</p>
                    <p className="text-xs text-gray-500">Qty: 1</p>
                    <p className="text-xs text-red-600 font-semibold">$5,012.50</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="/shopping/cart" className="text-sm text-red-600 hover:text-red-800 transition">
                <i className="fas fa-arrow-left mr-1"></i>Edit Cart
              </a>
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}
