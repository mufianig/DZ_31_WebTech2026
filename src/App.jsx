import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

 function Header(){
  return(
    <div>
      <h1>Header WebTech</h1>
    </div>
  )
 }
function Footer() {
  return (
    <footer>
      <p>Projekt React</p>
    </footer>
  );
}

   return (
    <>
    <Header/>
    <Header/>
    <Header/>
    <Header/>
    <h2>Technologie</h2>
    <Footer></Footer>
    </>
  );
}

export default App;
