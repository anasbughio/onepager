import { useState } from 'react'
import Hero from './components/Hero'
import './App.css'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Team from './components/Team'
import Biography from './components/Biography'
import Stats from './components/Stats'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
    <Hero />
    <Navbar />
    <Portfolio />
    <Services />
    <Team />
    <Biography />
    <Stats />
    <Blog />
    <Contact />
    <Footer />
        </div>

    </>
  )
}

export default App
