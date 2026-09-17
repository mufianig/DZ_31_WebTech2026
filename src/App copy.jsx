import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Dominika Zelek",
    technologiesCount: 3
  };

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
  };

  const student = {
  name: "Dominika",
  surname: "Zelek",
  className: "4P",
  specialization: "technik programista"
};
   return (
    <div>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>

      <p>{technology.name}</p>

      <p>Kategoria: {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>

      <h2>Uczeń: {student.name} {student.surname}</h2>

      <h2>Uczeń: {student.className}</h2>

      <h2>Uczeń: {student.specialization}</h2>
    </div>
  );
}

export default App;
