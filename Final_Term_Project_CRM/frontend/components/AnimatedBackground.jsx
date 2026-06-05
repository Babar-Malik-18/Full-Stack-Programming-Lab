export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="grid-lines" />
      <span className="orb orb-a" />
      <span className="orb orb-b" />
      <span className="orb orb-c" />
      <div className="laser laser-one" />
      <div className="laser laser-two" />
      <div className="particle-field">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} style={{ '--i': index }} />
        ))}
      </div>
    </div>
  );
}
