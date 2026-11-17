import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Technology({ name, category, hours, image }) {
  const [likes, addLike] = useState(0);
  
  return (
    <article className="card p-3">
      <img 
        className="card-image"
        src={`./public/images/${image}`}
        alt={`Logo technologii ${name}`}
      />
      <h3>{name}</h3>
      <span className="technology-badge">{category}</span>
      <p>Czas nauki: {hours} godz.</p>
      <button className="btn btn-primary" onClick={() => addLike(likes+1)}>Lubię to: {likes}</button>
    </article>
  );
}

export default Technology;