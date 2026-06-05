'use client';

const columns = [
  { title: 'Lead', hint: 'Convert opportunities' },
  { title: 'Active', hint: 'Retain and grow' },
  { title: 'Inactive', hint: 'Recover or close' }
];

export default function PipelineBoard({ customers, onView, onInvoice }) {
  return (
    <section className="panel kanban-panel reveal-up">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow">Pipeline Board</span>
          <h2>Status Tracking Workspace</h2>
        </div>
        <span className="count-pill">All Customers</span>
      </div>

      <div className="kanban-grid">
        {columns.map(column => {
          const records = customers.filter(c => c.status === column.title);
          return (
            <div className="kanban-column" key={column.title}>
              <div className="kanban-title">
                <strong>{column.title}</strong>
                <span>{column.hint}</span>
              </div>
              <div className="kanban-cards">
                {records.slice(0, 5).map(customer => (
                  <article className="mini-customer-card" key={customer._id} onClick={() => onView(customer)}>
                    <b>{customer.company}</b>
                    <span>{customer.name}</span>
                    <small>PKR {Number(customer.value || 0).toLocaleString()} • {customer.priority || 'Medium'}</small>
                    <button type="button" onClick={event => { event.stopPropagation(); onInvoice(customer); }}>Invoice</button>
                  </article>
                ))}
                {!records.length && <p className="mini-empty">No records</p>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
