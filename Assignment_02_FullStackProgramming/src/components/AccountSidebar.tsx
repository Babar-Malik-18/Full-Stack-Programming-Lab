import Link from "next/link";

type SidebarItem = {
  label: string;
  href: string;
  key: string;
};

const items: SidebarItem[] = [
  { label: "Account Dashboard", href: "/account/my-account", key: "dashboard" },
  { label: "Account Information", href: "/account/edit-account", key: "edit-account" },
  { label: "Address Book", href: "/account/edit-billing", key: "address-book" },
  { label: "My Orders", href: "/account/order-summary", key: "orders" },
  { label: "My Wishlist", href: "#", key: "wishlist" },
  { label: "Newsletter Subscriptions", href: "#", key: "newsletter" },
];

export default function AccountSidebar({ activeKey }: { activeKey: string }) {
  return (
    <aside className="lg:w-64 flex-shrink-0">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <h3 className="bg-gray-100 px-4 py-3 font-bold text-sm text-gray-800 border-b border-gray-200">
          MY ACCOUNT
        </h3>
        <ul className="divide-y divide-gray-100">
          {items.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className={`block px-4 py-2.5 text-sm transition ${
                  activeKey === item.key
                    ? "text-red-600 bg-red-50 font-semibold"
                    : "text-gray-600 hover:text-red-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
