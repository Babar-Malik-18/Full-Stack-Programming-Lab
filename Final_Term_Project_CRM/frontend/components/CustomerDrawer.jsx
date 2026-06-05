'use client';

const nextAction = customer => {
  if (!customer) return '';
  if (customer.priority === 'High' && customer.status === 'Lead') return 'Send proposal, call within 24 hours, and prepare first invoice draft.';
  if (customer.status === 'Active') return 'Schedule success review and offer upgrade or renewal package.';
  if (customer.status === 'Inactive') return 'Send reactivation message with a limited support offer.';
  return 'Follow up with a short call and update the customer status after response.';
};

export default function CustomerDrawer({ customer, onClose, onEdit, onInvoice }) {
  if (!customer) return null;

  return (
    <aside className="drawer-backdrop" onClick={onClose}>
      <section className="customer-drawer panel" onClick={event => event.stopPropagation()}>
        <button className="drawer-close" type="button" onClick={onClose}>×</button>
        <span className="eyebrow">Customer 360 View</span>
        <h2>{customer.company}</h2>
        <p>{customer.name} • {customer.email} • {customer.phone}</p>

        <div className="drawer-stats">
          <span><b>{customer.status}</b>Status</span>
          <span><b>{customer.priority || 'Medium'}</b>Priority</span>
          <span><b>PKR {Number(customer.value || 0).toLocaleString()}</b>Value</span>
        </div>

        <div className="drawer-section">
          <h3>Smart Next Action</h3>
          <p>{nextAction(customer)}</p>
        </div>

        <div className="drawer-section">
          <h3>Notes</h3>
          <p>{customer.notes || 'No notes added yet.'}</p>
        </div>

        <div className="tag-row">
          {(customer.tags || []).map(tag => <span key={tag}>{tag}</span>)}
          {(!customer.tags || customer.tags.length === 0) && <span>No tags</span>}
        </div>

        <div className="drawer-actions">
          <button className="primary-btn" onClick={() => onInvoice(customer)}>Generate Invoice</button>
          <button className="ghost-btn" onClick={() => onEdit(customer)}>Edit Profile</button>
        </div>
      </section>
    </aside>
  );
}
