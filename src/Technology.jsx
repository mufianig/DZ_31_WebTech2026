function Technology({ name, category, hours, image }) {
  return (
    <article className="technology-card">
      <img
        src={`/images/${image}`}
        alt={`Logo technologii ${name}`}
      />
      <h3>{name}</h3>
      <span className="technology-badge">{category}</span>
      <p>Czas nauki: {hours} godz.</p>
    </article>
  );
}

export default Technology;