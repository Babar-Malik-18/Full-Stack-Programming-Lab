'use client';

export default function ActivityTimeline({ activities }) {
  return (
    <section className="panel timeline-panel reveal-up">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow">Notification Center</span>
          <h2>Recent Activity</h2>
        </div>
        <span className="count-pill">{activities.length}</span>
      </div>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <p key={`${activity.time}-${index}`}>
            <span>{activity.icon}</span>
            <b>{activity.message}</b>
            <small>{activity.time}</small>
          </p>
        ))}
      </div>
    </section>
  );
}
