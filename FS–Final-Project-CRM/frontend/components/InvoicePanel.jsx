'use client';

import { useMemo, useState } from 'react';
import jsPDF from 'jspdf';

const defaultItems = [
  { description: 'CRM consultation and onboarding', quantity: 1, price: 25000 },
  { description: 'Monthly customer support package', quantity: 1, price: 15000 }
];

export default function InvoicePanel({ customer, onGenerate, latestInvoice, loading }) {
  const [items, setItems] = useState(defaultItems);
  const [summary, setSummary] = useState('Professional CRM services with onboarding, support, reporting and customer success assistance.');

  const total = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + Number(item.quantity || 0) * Number(item.price || 0), 0);
    const tax = subtotal * 0.05;
    return { subtotal, tax, total: subtotal + tax };
  }, [items]);

  const updateItem = (index, field, value) => {
    setItems(current => current.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  };

  
  const addItem = () => {
  setItems(current => [
    ...current,
    { description: '', quantity: 1, price: 0 }
  ]);
};

  const removeItem = index => setItems(items.filter((_, i) => i !== index));

  const submit = () => {
    if (!customer) return;
    onGenerate({ customerId: customer._id, items, summary });
  };

  const downloadPDF = () => {
    const invoice = latestInvoice;
    if (!invoice) return;

    const doc = new jsPDF();
    doc.setFillColor(10, 14, 34);
    doc.rect(0, 0, 210, 42, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.text('CRM Pro Invoice', 18, 20);
    doc.setFontSize(10);
    doc.text('Professional Customer Relationship Management System', 18, 29);
    doc.setTextColor(15, 23, 42);
    doc.setFontSize(11);
    doc.text(`Invoice No: ${invoice.invoiceNo}`, 18, 54);
    doc.text(`Date: ${new Date(invoice.createdAt).toLocaleDateString()}`, 150, 54);
    doc.setFontSize(14);
    doc.text('Bill To', 18, 70);
    doc.setFontSize(11);
    doc.text(`${invoice.customer?.name || customer?.name}`, 18, 80);
    doc.text(`${invoice.customer?.company || customer?.company}`, 18, 88);
    doc.text(`${invoice.customer?.email || customer?.email}`, 18, 96);

    doc.setFillColor(241, 245, 249);
    doc.rect(18, 110, 174, 10, 'F');
    doc.setFontSize(10);
    doc.text('Service', 22, 117);
    doc.text('Qty', 126, 117);
    doc.text('Price', 146, 117);
    doc.text('Amount', 170, 117);

    let y = 130;
    invoice.items.forEach(item => {
      const amount = Number(item.quantity || 0) * Number(item.price || 0);
      doc.text(String(item.description).slice(0, 55), 22, y);
      doc.text(String(item.quantity), 128, y);
      doc.text(`PKR ${Number(item.price).toLocaleString()}`, 146, y);
      doc.text(`PKR ${amount.toLocaleString()}`, 170, y);
      y += 10;
    });

    y += 8;
    doc.text(`Subtotal: PKR ${Number(invoice.subtotal).toLocaleString()}`, 130, y);
    doc.text(`Tax 5%: PKR ${Number(invoice.tax).toLocaleString()}`, 130, y + 8);
    doc.setFontSize(15);
    doc.text(`Total: PKR ${Number(invoice.total).toLocaleString()}`, 130, y + 20);
    doc.setFontSize(10);
    doc.text('Summary', 18, y + 34);
    doc.text(invoice.summary || 'N/A', 18, y + 42, { maxWidth: 170 });
    doc.save(`${invoice.invoiceNo}.pdf`);
  };

  return (
    <section className="panel invoice-panel reveal-up" id="invoice-panel">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow">Invoice Studio</span>
          <h2>{customer ? `Invoice for ${customer.name}` : 'Select a Customer'}</h2>
        </div>
        <span className="count-pill">PDF Ready</span>
      </div>

      {!customer ? (
        <div className="empty-state invoice-empty">Choose any customer from the table or pipeline and press Invoice.</div>
      ) : (
        <div className="invoice-grid">
          <div className="invoice-customer-card">
            <b>{customer.company}</b>
            <span>{customer.name}</span>
            <small>{customer.email}</small>
          </div>

          <div className="invoice-items">
            {items.map((item, index) => (
              <div className="invoice-item" key={index}>
                <input value={item.description} onChange={event => updateItem(index, 'description', event.target.value)} />
                <input type="number" min="1" value={item.quantity} onChange={event => updateItem(index, 'quantity', event.target.value)} />
                <input type="number" min="0" value={item.price} onChange={event => updateItem(index, 'price', event.target.value)} />
                <button className="danger tiny" type="button" onClick={() => removeItem(index)}>×</button>
              </div>
            ))}
            <button className="ghost-btn small" type="button" onClick={addItem}>+ Add Service</button>
          </div>

          <textarea className="summary-box" value={summary} onChange={event => setSummary(event.target.value)} />

          <div className="invoice-total-card">
            <span>Subtotal <b>PKR {total.subtotal.toLocaleString()}</b></span>
            <span>Tax 5% <b>PKR {total.tax.toLocaleString()}</b></span>
            <strong>Total PKR {total.total.toLocaleString()}</strong>
          </div>

          <div className="invoice-actions">
            <button className="primary-btn" type="button" onClick={submit} disabled={loading}>{loading ? 'Generating...' : 'Generate Invoice'}</button>
            <button className="ghost-btn" type="button" onClick={downloadPDF} disabled={!latestInvoice}>Download PDF</button>
          </div>
        </div>
      )}
    </section>
  );
}
