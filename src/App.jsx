import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
import Login from './pages/Login'
import AdminPanel from './pages/AdminPanel'
import ProtectedRoute from './components/ProtectedRoute'
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <div className="App">
<Routes>
  {/* Landing Page */}
  <Route path="/" element={
    <>
      <Hero />
      <Navbar />
      <Biography />
      <Stats />
      <Footer />
    </>
  } />

  {/* Separate Pages */}
  <Route path="/portfolio" element={<><Navbar /><PortfolioPage /><Footer /></>} />
  <Route path="/services" element={<><Navbar /><ServicesPage /><Footer /></>} />
  <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
  <Route path="/team" element={<><Navbar /><TeamPage /><Footer /></>} />
  <Route path="/blog" element={<><Navbar /><BlogPage /><Footer /></>} />
  <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />

  {/* Auth & Admin */}
  <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
  <Route path="/admin" element={
    <ProtectedRoute>
      <Navbar />
      <AdminPanel />
      <Footer />
    </ProtectedRoute>
  } />
</Routes>
      </div>
    </>
  )
}

export default App