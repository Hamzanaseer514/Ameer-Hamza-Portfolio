'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <main className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
     
      
      <div className="gradient-bg min-h-screen">
        <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
