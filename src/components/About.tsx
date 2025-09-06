'use client'

import { Download } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional Full Stack Developer specializing in React, Node.js, React Native, and .NET development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-blue-600/20 p-1 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 dark:border-gray-600/30">
                <div className="bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 relative overflow-hidden backdrop-blur-sm">
                  <div className="w-full h-80 relative rounded-2xl overflow-hidden">
                    <Image
                      src="/hamza.png"
                      alt="Hamza"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-indigo-500 rounded-full animate-ping delay-1000"></div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Full Stack Developer & React Specialist
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I’m your go-to Full Stack Web Developer for building, scaling, and redesigning websites. I specialize in frontend and backend development, responsive website design, SEO-friendly web applications, and custom website solutions tailored to your business needs. 
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From new websites to complete redesigns and performance optimization, I deliver clean, modern, and scalable results. With strong expertise in full stack website development, I ensure your site works flawlessly, engages users, and drives business growth. Let’s collaborate to bring your ideas to life and create a professional online presence
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <a  href='https://drive.google.com/uc?export=download&id=1jqcgB3FC10dgj8CMhxNYPKRf7IAJ8-L5' className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
