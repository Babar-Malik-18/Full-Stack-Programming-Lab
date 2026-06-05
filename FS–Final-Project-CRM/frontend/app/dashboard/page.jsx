'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProtectedRoute from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Toast from '@/components/Toast';
import StatCard from '@/components/StatCard';
import CustomerForm from '@/components/CustomerForm';
import CustomerTable from '@/components/CustomerTable';
import InvoicePanel from '@/components/InvoicePanel';
import Chatbot from '@/components/Chatbot';
import AnalyticsPanel from '@/components/AnalyticsPanel';
import PipelineBoard from '@/components/PipelineBoard';
import CustomerDrawer from '@/components/CustomerDrawer';
import ActivityTimeline from '@/components/ActivityTimeline';
import api, { messageFromError } from '@/lib/api';
import { getUser } from '@/lib/auth';

const nowTime = () =>
  new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

const normalize = value => String(value || '').toLowerCase().trim();

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [customers, setCustomers] = useState([]);

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [priority, setPriority] = useState('All');

  const [editingCustomer, setEditingCustomer] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [viewingCustomer, setViewingCustomer] = useState(null);
  const [latestInvoice, setLatestInvoice] = useState(null);

  const [loading, setLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const [activities, setActivities] = useState([
    {
      icon: '✨',
      message: 'CRM Pro dashboard initialized with a secure workspace.',
      time: nowTime()
    }
  ]);

  const addActivity = useCallback((message, icon = '✅') => {
    setActivities(current => [{ icon, message, time: nowTime() }, ...current].slice(0, 6));
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  }, []);

  const fetchCustomers = useCallback(async () => {
    setTableLoading(true);

    try {
      const { data } = await api.get('/customers');
      setCustomers(data.customers || []);
    } catch (error) {
      showToast(messageFromError(error), 'error');
    } finally {
      setTableLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    setUser(getUser());
    fetchCustomers();
  }, [fetchCustomers]);

  const visibleCustomers = useMemo(() => {
    const query = normalize(search);

    return customers.filter(customer => {
      const tags = Array.isArray(customer.tags) ? customer.tags.join(' ') : '';

      const searchableText = normalize(
        [
          customer.name,
          customer.email,
          customer.phone,
          customer.company,
          customer.status,
          customer.priority,
          customer.source,
          tags
        ].join(' ')
      );

      const matchesSearch = !query || searchableText.includes(query);
      const matchesStatus = status === 'All' || customer.status === status;
      const matchesPriority = priority === 'All' || customer.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [customers, search, status, priority]);

  const stats = useMemo(() => {
    const totalValue = customers.reduce((sum, customer) => sum + Number(customer.value || 0), 0);
    const active = customers.filter(customer => customer.status === 'Active').length;
    const highPriority = customers.filter(customer => customer.priority === 'High').length;
    const conversion = customers.length ? Math.round((active / customers.length) * 100) : 0;

    return {
      total: customers.length,
      active,
      highPriority,
      conversion,
      totalValue
    };
  }, [customers]);

  const visibleStats = useMemo(() => {
    return {
      total: visibleCustomers.length,
      lead: visibleCustomers.filter(customer => customer.status === 'Lead').length,
      active: visibleCustomers.filter(customer => customer.status === 'Active').length,
      inactive: visibleCustomers.filter(customer => customer.status === 'Inactive').length
    };
  }, [visibleCustomers]);

  const hasActiveFilters = search.trim() || status !== 'All' || priority !== 'All';

  const clearFilters = () => {
    setSearch('');
    setStatus('All');
    setPriority('All');
    addActivity('Search and filters were reset.', '🔄');
  };

  const saveCustomer = async payload => {
    setLoading(true);

    try {
      if (editingCustomer) {
        await api.put(`/customers/${editingCustomer._id}`, payload);
        showToast('Customer updated successfully.');
        addActivity(`${payload.name} profile updated.`, '🛠️');
      } else {
        await api.post('/customers', payload);
        showToast('Customer created successfully.');
        addActivity(`${payload.name} added to CRM Pro.`, '➕');
      }

      setEditingCustomer(null);
      await fetchCustomers();
    } catch (error) {
      showToast(messageFromError(error), 'error');
    } finally {
      setLoading(false);
    }
  };

  const deleteCustomer = async customer => {
    const ok = window.confirm(`Delete ${customer.name}? This action cannot be undone.`);
    if (!ok) return;

    try {
      await api.delete(`/customers/${customer._id}`);

      if (selectedCustomer?._id === customer._id) setSelectedCustomer(null);
      if (viewingCustomer?._id === customer._id) setViewingCustomer(null);

      showToast('Customer deleted successfully.');
      addActivity(`${customer.name} removed from CRM Pro.`, '🗑️');

      await fetchCustomers();
    } catch (error) {
      showToast(messageFromError(error), 'error');
    }
  };

  const generateInvoice = async payload => {
    setLoading(true);

    try {
      const { data } = await api.post('/invoices', payload);

      setLatestInvoice(data.invoice);
      showToast('Invoice generated. Press Download PDF to save it.');
      addActivity(`Invoice ${data.invoice.invoiceNo} generated.`, '🧾');
    } catch (error) {
      showToast(messageFromError(error), 'error');
    } finally {
      setLoading(false);
    }
  };

  const openAdd = () => {
    setEditingCustomer(null);
    document.getElementById('customer-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openInvoice = customer => {
    if (customer) setSelectedCustomer(customer);

    document.getElementById('invoice-panel')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const openAnalytics = () => {
    document.getElementById('analytics-panel')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const exportCSV = () => {
    const sourceRows = visibleCustomers.length ? visibleCustomers : customers;

    const headers = [
      'Name',
      'Email',
      'Phone',
      'Company',
      'Status',
      'Priority',
      'Value',
      'Source',
      'Next Follow Up',
      'Tags'
    ];

    const rows = sourceRows.map(customer => [
      customer.name,
      customer.email,
      customer.phone,
      customer.company,
      customer.status,
      customer.priority || 'Medium',
      customer.value,
      customer.source,
      customer.nextFollowUp ? new Date(customer.nextFollowUp).toLocaleDateString() : '',
      Array.isArray(customer.tags) ? customer.tags.join(' | ') : ''
    ]);

    const csv = [headers, ...rows]
      .map(row => row.map(value => `"${String(value ?? '').replaceAll('"', '""')}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'crm-pro-customers.csv';
    link.click();

    URL.revokeObjectURL(url);

    showToast('Customer CSV exported successfully.');
    addActivity('Customer CSV export downloaded.', '⬇️');
  };

  const printReport = () => {
    addActivity('CRM Pro dashboard report prepared for printing.', '🖨️');
    setTimeout(() => window.print(), 150);
  };

  const editFromDrawer = customer => {
    setViewingCustomer(null);
    setEditingCustomer(customer);

    document.getElementById('customer-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <ProtectedRoute>
      <AnimatedBackground />
      <Toast toast={toast} />
      <Navbar user={user} />

      <main className="dashboard-shell">
        <section className="dashboard-hero panel glow-card reveal-up">
          <div>
            <span className="eyebrow">Protected CRM Command Center</span>
            <h1>Manage customers, revenue, invoices and pipeline like an enterprise team.</h1>
            <p>
              CRM Pro is a polished MERN + Next.js customer relationship management system with
              secure JWT authentication, MongoDB records, dynamic search, customer 360 view,
              smart follow-up tracking, PDF invoicing, CSV export, day/night theme and a
              rule-based dashboard assistant.
            </p>

            <div className="hero-actions">
              <button className="primary-btn" onClick={openAdd}>
                + Add Customer
              </button>

              <button className="ghost-btn" onClick={exportCSV}>
                Export CSV
              </button>

              <button className="ghost-btn" onClick={printReport}>
                Print Report
              </button>
            </div>
          </div>

          <div className="hero-orbit">
            <span>CRM</span>
            <em>Pro</em>
          </div>
        </section>

        <section className="stats-grid">
          <StatCard
            label="Total Records"
            value={stats.total}
            hint="Loaded from MongoDB"
            icon="🧾"
          />

          <StatCard
            label="Active Customers"
            value={stats.active}
            hint={`${stats.conversion}% conversion`}
            icon="🚀"
          />

          <StatCard
            label="High Priority"
            value={stats.highPriority}
            hint="Requires fast follow-up"
            icon="🔥"
          />

          <StatCard
            label="Pipeline Value"
            value={`PKR ${stats.totalValue.toLocaleString()}`}
            hint="Complete customer pipeline"
            icon="💎"
          />
        </section>

        <AnalyticsPanel customers={customers} />

        <CustomerForm
          editingCustomer={editingCustomer}
          onSubmit={saveCustomer}
          onCancel={() => setEditingCustomer(null)}
          loading={loading}
        />

        <PipelineBoard
          customers={customers}
          onView={setViewingCustomer}
          onInvoice={openInvoice}
        />

        <section className="panel control-panel reveal-up">
          <div className="section-heading compact">
            <div>
              <span className="eyebrow">Search & Filter</span>
              <h2>Dynamic Customer Control</h2>
              <p className="section-subtitle">
                Instantly locate customers by name, company, email, source, tags, status or priority.
              </p>
            </div>

            <div className="hero-actions mini-actions">
              {hasActiveFilters && (
                <button className="ghost-btn narrow" onClick={clearFilters}>
                  Reset
                </button>
              )}

              <button className="primary-btn narrow" onClick={openAdd}>
                + Add Customer
              </button>
            </div>
          </div>

          <div className="controls premium-controls">
            <input
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search by name, company, email, source or tags..."
              autoComplete="off"
            />

            <select value={status} onChange={event => setStatus(event.target.value)}>
              <option>All</option>
              <option>Lead</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <select value={priority} onChange={event => setPriority(event.target.value)}>
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="filter-meta">
            <span>
              {tableLoading
                ? 'Loading customers...'
                : `${visibleStats.total} customer records visible`}
            </span>
            <span>Lead: {visibleStats.lead}</span>
            <span>Active: {visibleStats.active}</span>
            <span>Inactive: {visibleStats.inactive}</span>
          </div>
        </section>

        <CustomerTable
          customers={visibleCustomers}
          onEdit={customer => {
            setEditingCustomer(customer);
            document.getElementById('customer-form')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
          onDelete={deleteCustomer}
          onView={setViewingCustomer}
          onSelectInvoice={openInvoice}
          selectedCustomer={selectedCustomer}
        />

        <div className="dashboard-two-column">
          <InvoicePanel
            customer={selectedCustomer}
            onGenerate={generateInvoice}
            latestInvoice={latestInvoice}
            loading={loading}
          />

          <ActivityTimeline activities={activities} />
        </div>
      </main>

      <CustomerDrawer
        customer={viewingCustomer}
        onClose={() => setViewingCustomer(null)}
        onEdit={editFromDrawer}
        onInvoice={customer => {
          setViewingCustomer(null);
          openInvoice(customer);
        }}
      />

      <Chatbot
        customers={customers}
        onOpenAdd={openAdd}
        onOpenInvoice={() => openInvoice()}
        onOpenAnalytics={openAnalytics}
        onPrintReport={printReport}
      />
    </ProtectedRoute>
  );
}