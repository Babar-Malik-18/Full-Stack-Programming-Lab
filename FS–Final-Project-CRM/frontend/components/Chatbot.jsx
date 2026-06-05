'use client';

import { useMemo, useState } from 'react';

export default function Chatbot({ customers, onOpenAdd, onOpenInvoice, onOpenAnalytics, onPrintReport }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to CRM Pro Assistant. Try: help, summary, show customers, high priority, add customer, open invoice, analytics, print report.' }
  ]);
  const [input, setInput] = useState('');

  const commands = useMemo(() => {
    const totalValue = customers.reduce((sum, c) => sum + Number(c.value || 0), 0);
    const active = customers.filter(c => c.status === 'Active').length;
    const high = customers.filter(c => c.priority === 'High');

    return {
      help: 'Commands: summary, show customers, active customers, lead customers, inactive customers, high priority, add customer, open invoice, analytics, print report, dashboard.',
      dashboard: 'Dashboard includes analytics, customer CRUD, search/filter, pipeline board, invoices, notifications, and customer 360 view.',
      summary: `Total customers: ${customers.length}. Active: ${active}. Pipeline value: PKR ${totalValue.toLocaleString()}. High priority: ${high.length}.`,
      'show customers': customers.length ? customers.map(c => `${c.name} (${c.status})`).join(', ') : 'No customers loaded yet.',
      'active customers': customers.filter(c => c.status === 'Active').map(c => c.name).join(', ') || 'No active customers found.',
      'lead customers': customers.filter(c => c.status === 'Lead').map(c => c.name).join(', ') || 'No lead customers found.',
      'inactive customers': customers.filter(c => c.status === 'Inactive').map(c => c.name).join(', ') || 'No inactive customers found.',
      'high priority': high.map(c => `${c.name} - ${c.company}`).join(', ') || 'No high priority customers found.'
    };
  }, [customers]);

  const send = event => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    let reply = commands[command];
    if (command === 'add customer') {
      onOpenAdd();
      reply = 'Opening the customer form now.';
    }
    if (command === 'open invoice') {
      onOpenInvoice();
      reply = 'Opening invoice module. Select a customer from table or pipeline first.';
    }
    if (command === 'analytics') {
      onOpenAnalytics();
      reply = 'Opening executive analytics panel.';
    }
    if (command === 'print report') {
      onPrintReport();
      reply = 'Opening browser print dialog for a clean dashboard report.';
    }
    if (!reply) reply = 'I only respond to predefined CRM commands. Type help to see all commands.';

    setMessages(current => [...current, { from: 'user', text: input }, { from: 'bot', text: reply }]);
    setInput('');
  };

  return (
    <div className="chatbot-wrap">
      {open && (
        <section className="chat-window panel">
          <div className="chat-header">
            <div>
              <b>Nexus Assistant</b>
              <span>Rule-based commands only</span>
            </div>
            <button onClick={() => setOpen(false)} type="button">×</button>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <p className={`chat-message ${message.from}`} key={index}>{message.text}</p>
            ))}
          </div>
          <form onSubmit={send} className="chat-form">
            <input value={input} onChange={event => setInput(event.target.value)} placeholder="Type: help" />
            <button type="submit">Send</button>
          </form>
        </section>
      )}
      <button className="chat-fab" onClick={() => setOpen(!open)} type="button">✦</button>
    </div>
  );
}
