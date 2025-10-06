import React from 'react'
import './styles/landing.css'
import Hero from './components/Hero'
import About from './components/About'
import Challenges from './components/Challenges'
import DataSection from './components/DataSection'
import Team from './components/Team'
import Rain from './components/Rain'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="landing-root">
      <Rain />
      <Hero />
      <main>
        <About />
        <Challenges />
        <DataSection />
    <Team />
      </main>
      <Footer />
    </div>
  )
}
