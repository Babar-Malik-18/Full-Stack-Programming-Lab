'use client';

const statusClass = status => `status-badge ${String(status || '').toLowerCase()}`;
const priorityClass = priority => `priority-badge ${String(priority || 'medium').toLowerCase()}`;

const formatDate = value => {
  if (!value) return 'Not scheduled';
  return new Date(value).toLocaleDateString();
};

export default function CustomerTable({ customers, onEdit, onDelete, onSelectInvoice, onView, selectedCustomer }) {
  return (
    <section className="panel table-panel reveal-up">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow">Live Customer Database</span>
          <h2>Customer Command Table</h2>
        </div>
        <span className="count-pill">{customers.length} records</span>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Company</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Value</th>
              <th>Follow-up</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer._id} className={selectedCustomer?._id === customer._id ? 'selected-row' : ''}>
                <td>
                  <strong>{customer.name}</strong>
                  <span>{customer.email}</span>
                  <small>{customer.phone}</small>
                </td>
                <td>
                  {customer.company}
                  <small>{customer.source}</small>
                </td>
                <td><span className={statusClass(customer.status)}>{customer.status}</span></td>
                <td><span className={priorityClass(customer.priority)}>{customer.priority || 'Medium'}</span></td>
                <td>PKR {Number(customer.value || 0).toLocaleString()}</td>
                <td>{formatDate(customer.nextFollowUp)}</td>
                <td className="action-cell">
                  <button onClick={() => onView(customer)}>View</button>
                  <button onClick={() => onSelectInvoice(customer)}>Invoice</button>
                  <button onClick={() => onEdit(customer)}>Edit</button>
                  <button className="danger" onClick={() => onDelete(customer)}>Delete</button>
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan="7" className="empty-state">No customers found. Try another search or filter.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
