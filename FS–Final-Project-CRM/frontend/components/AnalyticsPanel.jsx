import { useMemo } from 'react';

const formatPKR = value => `PKR ${Number(value || 0).toLocaleString()}`;

export default function AnalyticsPanel({ customers = [] }) {
  const analytics = useMemo(() => {
    const total = customers.length || 1;

    const lead = customers.filter(customer => customer.status === 'Lead').length;
    const active = customers.filter(customer => customer.status === 'Active').length;
    const inactive = customers.filter(customer => customer.status === 'Inactive').length;
    const highPriority = customers.filter(customer => customer.priority === 'High').length;
    const pipelineValue = customers.reduce((sum, customer) => sum + Number(customer.value || 0), 0);
    const conversion = Math.round((active / total) * 100);

    const sourceNames = ['Website', 'Referral', 'Instagram', 'Expo'];

    const sources = sourceNames.map(source => ({
      name: source,
      count: customers.filter(customer => customer.source === source).length
    }));

    return {
      lead,
      active,
      inactive,
      highPriority,
      pipelineValue,
      conversion,
      sources
    };
  }, [customers]);

  const maxStatus = Math.max(analytics.lead, analytics.active, analytics.inactive, 1);

  return (
    <section id="analytics-panel" className="insight-grid reveal-up">
      <div className="panel analytics-card analytics-equal-card">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Executive Analytics</span>
            <h2>Pipeline Health</h2>
          </div>

          <span className="status-pill">Live</span>
        </div>

        <div className="pipeline-bars">
          <div className="pipeline-bar">
            <strong>Lead</strong>
            <div>
              <span style={{ width: `${(analytics.lead / maxStatus) * 100}%` }} />
            </div>
            <b>{analytics.lead}</b>
          </div>

          <div className="pipeline-bar">
            <strong>Active</strong>
            <div>
              <span style={{ width: `${(analytics.active / maxStatus) * 100}%` }} />
            </div>
            <b>{analytics.active}</b>
          </div>

          <div className="pipeline-bar">
            <strong>Inactive</strong>
            <div>
              <span style={{ width: `${(analytics.inactive / maxStatus) * 100}%` }} />
            </div>
            <b>{analytics.inactive}</b>
          </div>
        </div>
      </div>

      <div className="panel analytics-card analytics-equal-card revenue-panel">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Smart Summary</span>
            <h2>Revenue & Sources</h2>
          </div>
        </div>

        <div className="revenue-metrics">
          <div className="revenue-metric">
            <strong>{analytics.conversion}%</strong>
            <span>Conversion</span>
          </div>

          <div className="revenue-metric">
            <strong>{analytics.highPriority}</strong>
            <span>High Priority</span>
          </div>

          <div className="revenue-metric">
            <strong>{formatPKR(analytics.pipelineValue)}</strong>
            <span>Pipeline Value</span>
          </div>
        </div>

        <div className="revenue-source-grid">
          {analytics.sources.map(source => (
            <div className="revenue-source-card" key={source.name}>
              <div>
                <span>{source.name}</span>
                <small>Customer source</small>
              </div>

              <strong>{source.count}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}