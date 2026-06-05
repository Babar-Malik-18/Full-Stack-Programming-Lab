'use client';

import { useEffect, useMemo, useState } from 'react';

const empty = {
  name: '',
  email: '',
  phone: '',
  company: '',
  status: 'Lead',
  priority: 'Medium',
  value: 0,
  source: 'Website',
  nextFollowUp: '',
  tags: '',
  notes: ''
};

const toDateInput = value => {
  if (!value) return '';
  return new Date(value).toISOString().slice(0, 10);
};

export default function CustomerForm({ editingCustomer, onSubmit, onCancel, loading }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    if (editingCustomer) {
      setForm({
        ...editingCustomer,
        nextFollowUp: toDateInput(editingCustomer.nextFollowUp),
        tags: Array.isArray(editingCustomer.tags) ? editingCustomer.tags.join(', ') : editingCustomer.tags || ''
      });
    } else {
      setForm(empty);
    }
  }, [editingCustomer]);

  const score = useMemo(() => {
    const valueScore = Math.min(50, Math.round(Number(form.value || 0) / 12000));
    const statusScore = form.status === 'Active' ? 25 : form.status === 'Lead' ? 15 : 5;
    const priorityScore = form.priority === 'High' ? 25 : form.priority === 'Medium' ? 15 : 6;
    return Math.min(100, valueScore + statusScore + priorityScore);
  }, [form.value, form.status, form.priority]);

  const change = event => setForm({ ...form, [event.target.name]: event.target.value });

  const submit = event => {
    event.preventDefault();
    onSubmit({
      ...form,
      value: Number(form.value),
      nextFollowUp: form.nextFollowUp || undefined,
      tags: String(form.tags || '').split(',').map(tag => tag.trim()).filter(Boolean)
    });
  };

  return (
    <section className="panel form-panel reveal-up" id="customer-form">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow">Customer Studio</span>
          <h2>{editingCustomer ? 'Update Customer Profile' : 'Add Premium Customer Record'}</h2>
        </div>
        <div className="form-score">
          <span>Smart Score</span>
          <strong>{score}/100</strong>
        </div>
        {editingCustomer && <button className="ghost-btn small" onClick={onCancel} type="button">Cancel Edit</button>}
      </div>

      <form onSubmit={submit} className="customer-form">
        <label>Name<input name="name" value={form.name} onChange={change} required minLength="2" placeholder="Customer full name" /></label>
        <label>Email<input name="email" type="email" value={form.email} onChange={change} required placeholder="customer@example.com" /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={change} required placeholder="+92 300 0000000" /></label>
        <label>Company<input name="company" value={form.company} onChange={change} required placeholder="Company name" /></label>
        <label>Status
          <select name="status" value={form.status} onChange={change}>
            <option>Lead</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </label>
        <label>Priority
          <select name="priority" value={form.priority} onChange={change}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </label>
        <label>Value / Amount<input name="value" type="number" min="0" value={form.value} onChange={change} required /></label>
        <label>Next Follow-up<input name="nextFollowUp" type="date" value={form.nextFollowUp || ''} onChange={change} /></label>
        <label>Source<input name="source" value={form.source} onChange={change} placeholder="Website, Referral, Expo" /></label>
        <label className="wide">Tags<input name="tags" value={form.tags} onChange={change} placeholder="enterprise, vip, proposal" /></label>
        <label className="wide">Notes<textarea name="notes" value={form.notes} onChange={change} rows="3" placeholder="Add customer needs, next action, risk, or communication notes." /></label>
        <button className="primary-btn wide" disabled={loading}>{loading ? 'Saving...' : editingCustomer ? 'Save Premium Update' : 'Create Customer'}</button>
      </form>
    </section>
  );
}
