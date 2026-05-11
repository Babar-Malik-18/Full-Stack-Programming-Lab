"use client";

import { useState } from "react";

type TabId = "tab-details" | "tab-specs" | "tab-accessories" | "tab-reviews" | "tab-qa";

const tabButtons: { id: TabId; label: string }[] = [
  { id: "tab-details", label: "Details" },
  { id: "tab-specs", label: "Quick Specs" },
  { id: "tab-accessories", label: "Accessories" },
  { id: "tab-reviews", label: "Reviews" },
  { id: "tab-qa", label: "Q & A" },
];

export default function ProductTabs({
  details,
  specs,
  accessories,
  reviews,
  qa,
}: {
  details: React.ReactNode;
  specs: React.ReactNode;
  accessories: React.ReactNode;
  reviews: React.ReactNode;
  qa: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState<TabId>("tab-details");

  return (
    <div className="tabs-container mb-8">
      <div className="flex flex-wrap border-b border-gray-200">
        {tabButtons.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn px-6 py-3 text-sm font-semibold ${
              activeTab === tab.id
                ? "active"
                : "text-gray-500"
            }`}
            type="button"
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id="tab-details"
        className={`tab-content ${activeTab === "tab-details" ? "active" : ""} p-6 bg-gray-50 rounded-b-lg`}
      >
        {details}
      </div>
      <div
        id="tab-specs"
        className={`tab-content ${activeTab === "tab-specs" ? "active" : ""} p-6 bg-gray-50 rounded-b-lg`}
      >
        {specs}
      </div>
      <div
        id="tab-accessories"
        className={`tab-content ${activeTab === "tab-accessories" ? "active" : ""} p-6 bg-gray-50 rounded-b-lg`}
      >
        {accessories}
      </div>
      <div
        id="tab-reviews"
        className={`tab-content ${activeTab === "tab-reviews" ? "active" : ""} p-6 bg-gray-50 rounded-b-lg`}
      >
        {reviews}
      </div>
      <div
        id="tab-qa"
        className={`tab-content ${activeTab === "tab-qa" ? "active" : ""} p-6 bg-gray-50 rounded-b-lg`}
      >
        {qa}
      </div>
    </div>
  );
}
