import './globals.css';

export const metadata = {
  title: 'CRM Pro | Premium CRM Dashboard',
  description: 'Professional MERN + Next.js Customer Relationship Management System with JWT authentication, CRUD, customer analytics, invoices, notifications, rule-based chatbot, and day/night theme.',
  keywords: ['CRM', 'MERN', 'Next.js', 'JWT', 'MongoDB', 'Customer Management', 'Invoice PDF', 'Dashboard']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
