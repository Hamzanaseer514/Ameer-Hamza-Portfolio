'use client'

import { ArrowRight, Download, Code, Smartphone, Palette, Brain } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  // Simple smooth cursor animation
  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const updateCursor = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.15
      currentY += (targetY - currentY) * 0.15

      cursor.style.transform = `translate(${currentX}px, ${currentY}px)`
      requestAnimationFrame(updateCursor)
    }

    updateCursor()

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Network Particle class
    class NetworkParticle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      connections: NetworkParticle[]
      maxConnections: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.vx = (Math.random() - 0.5) * 0.8 // Faster movement
        this.vy = (Math.random() - 0.5) * 0.8
        this.size = Math.random() * 2 + 1
        this.connections = []
        this.maxConnections = 3
      }

      update(canvasWidth: number, canvasHeight: number) {
        // Update position
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvasWidth) {
          this.vx = -this.vx
        }
        if (this.y <= 0 || this.y >= canvasHeight) {
          this.vy = -this.vy
        }

        // Keep within bounds
        this.x = Math.max(0, Math.min(canvasWidth, this.x))
        this.y = Math.max(0, Math.min(canvasHeight, this.y))
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw particle
        ctx.save()
        ctx.fillStyle = '#3b82f6' // Blue color for both themes
        ctx.shadowColor = '#3b82f6'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      drawConnections(ctx: CanvasRenderingContext2D) {
        this.connections.forEach(connection => {
          const dx = this.x - connection.x
          const dy = this.y - connection.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = (150 - distance) / 150 * 0.3
            ctx.save()
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})` // Blue connections
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(connection.x, connection.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      }

      connectToNearest(particles: NetworkParticle[]) {
        this.connections = []
        const distances = particles
          .filter(p => p !== this)
          .map(p => ({
            particle: p,
            distance: Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2)
          }))
          .sort((a, b) => a.distance - b.distance)

        // Connect to nearest particles
        distances.slice(0, this.maxConnections).forEach(({ particle, distance }) => {
          if (distance < 150) {
            this.connections.push(particle)
          }
        })
      }
    }

    // Create network particles
    const particles: NetworkParticle[] = []
    const particleCount = 50 // Fewer particles for better network effect

    for (let i = 0; i < particleCount; i++) {
      particles.push(new NetworkParticle(canvas.width, canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update particles
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height)
      })

      // Update connections
      particles.forEach(particle => {
        particle.connectToNearest(particles)
      })

      // Draw connections first (background)
      particles.forEach(particle => {
        particle.drawConnections(ctx)
      })

      // Draw particles (foreground)
      particles.forEach(particle => {
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      {/* Simple Smooth Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Simple cursor dot */}
        <div className="w-full h-full bg-blue-500 rounded-full opacity-80"></div>
      </div>

      {/* Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Main Content */}
      <div className="container-custom px-4 mb-10 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-[70vh]">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6 flex-1">
              {/* Badge */}
              <div className="inline-flex mt-20 items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100/80 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>

              {/* Main Heading */}
              <div className="space-y-2 lg:space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                 I'm{' '}
                  <span className="gradient-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                    Ameer Hamza
                  </span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 font-medium">
                  <span className="gradient-text">Full Stack Developer</span>
                  {/* <span className="text-gray-500 dark:text-gray-400"> | </span>
                  <span className="gradient-text">React & Node.js Specialist</span> */}
                </h2>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Professional Full Stack Developer specializing in React, Node.js, React Native, and .NET development. 
                I create scalable web applications, mobile apps, and innovative digital solutions with clean code and modern technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group relative overflow-hidden border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <a href='https://drive.google.com/uc?export=download&id=1jqcgB3FC10dgj8CMhxNYPKRf7IAJ8-L5'  className="relative z-10 flex items-center gap-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    Download CV
                  </a>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 lg:mt-12">
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Column - 3D Profile Card */}
            <div className="relative flex justify-center lg:justify-end flex-1">
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                {/* 3D Card Container */}
                <div className="relative transform perspective-1000">
                  <div className="relative bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-blue-600/10 p-1 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 dark:border-gray-600/30 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                    <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm">
                      {/* Profile Image */}
                      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full transform rotate-6"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full transform -rotate-6"></div>
                        <div className="relative bg-gray-200 dark:bg-gray-700 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                          <Image
                            src="/hamza.png"
                            alt="Hamza"
                            width={192}
                            height={192}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="text-center space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Ameer Hamza</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Full Stack Developer</p>
                        
                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full">Mern</span>
                          <span className="px-2 sm:px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs sm:text-sm rounded-full">React Native</span>
                          <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full">Django</span>
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full animate-ping delay-1000"></div>
                    </div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}