'use client'

import { Code, Smartphone, Brain, Database, Globe, Server } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Full Stack Web Developer',
      description: 'Complete web development solutions from frontend to backend, including database design and deployment.',
      icon: Code,
      color: 'blue',
      features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development']
    },
    {
      title: 'React Native App Developer',
      description: 'Cross-platform mobile app development using React Native for iOS and Android platforms.',
      icon: Smartphone,
      color: 'green',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Deployment']
    },
    {
      title: '.NET Developer',
      description: 'Enterprise-level application development using Microsoft .NET framework and C#.',
      icon: Server,
      color: 'purple',
      features: ['C# Development', 'ASP.NET Core', 'Entity Framework', 'Azure Services']
    },
    {
      title: 'ML Developer',
      description: 'Machine learning solutions and AI integration for intelligent applications.',
      icon: Brain,
      color: 'orange',
      features: ['Python ML', 'Data Analysis', 'Model Training', 'AI Integration']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional development services tailored to your needs
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="group h-full">
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`inline-flex p-4 bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}>
                        <Icon className={`w-8 h-8 text-${service.color}-600 dark:text-${service.color}-400`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mt-auto">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className={`w-2 h-2 bg-${service.color}-500 rounded-full flex-shrink-0`}></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover effect indicator */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </div>

                    {/* Border gradient on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose My Services?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
