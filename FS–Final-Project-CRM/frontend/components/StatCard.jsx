export default function StatCard({ label, value, hint, icon }) {
  return (
    <article className="stat-card panel">
      <span className="stat-icon">{icon}</span>
      <p>{label}</p>
      <h3>{value}</h3>
      <small>{hint}</small>
    </article>
  );
}
