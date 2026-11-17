import { useState } from "react";
import './Technology.css'

function Technology({ name, category, hours, image }) {
  const [likes, addLike] = useState(0);
  
  return (
    <section className="technologies">
      <img
        src={`public/images/${image}`}
        alt={`Logo technologii ${name}`}
      />
      <h2>{name}</h2>
      <p>Kategoria: {category}</p>
      <p>Liczba godzin: {hours} godz.</p>
      <button onClick={() => addLike(likes+1)}>Lubię to: {likes}</button>
    </section>
  );
}

export default Technology;