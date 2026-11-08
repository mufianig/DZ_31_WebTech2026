import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Technology from './Technology'
import Footer from './Footer'

function App() {

   return (
    <>
    <Header/>
    
    <main>
        <Technology
          name="React"
          category="Frontend"
          hours={30}
        />

        <Technology
          name="Node.js"
          category="Backend"
          hours={40}
        />

        <Technology
          name="MySQL"
          category="Baza danych"
          hours={20}
        />
    </main>
    
    <Footer/>
    </>
  );
}

export default App;
