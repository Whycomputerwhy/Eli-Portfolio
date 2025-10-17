import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <img src="/images/test.png" alt="Full screen" className="w-full h-screen object-cover" />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}


