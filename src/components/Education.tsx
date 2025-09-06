'use client'

import { GraduationCap, BookOpen, Award, Calendar, MapPin, TrendingUp } from 'lucide-react'

export default function Education() {
  const education = [
    {
      period: '2022-2026',
      degree: 'BS Computer Science',
      institution: 'UET Lahore',
      location: 'Lahore, Pakistan',
      description: 'Currently pursuing Bachelor of Science in Computer Science at UET Lahore, now in my third semester.',
      icon: GraduationCap,
      color: 'blue',
      current: true,
      semester: '7th Semester',
      progress: 37.5
    },
    {
      period: '2020-2022',
      degree: 'FSc (Pre Engineering)',
      institution: 'Superior Colleges Sialkot',
      location: 'Sialkot, Pakistan',
      description: 'Completed FSc Pre Engineering from Superior Group of Colleges with excellent academic performance.',
      icon: BookOpen,
      color: 'green',
      marks: '93%',
      status: 'Completed'
    },
    {
      period: '2018-2020',
      degree: 'Matriculation',
      institution: 'Danish Public School',
      location: 'Sialkot, Pakistan',
      description: 'Completed Matriculation from Danish Public School with outstanding academic achievements.',
      icon: Award,
      color: 'purple',
      marks: '91%',
      status: 'Completed'
    }
  ]

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic journey that built the foundation for my technical expertise
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {education.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="group">
                <div className="card h-full hover:transform hover:scale-105 transition-all duration-300">
                  {/* Header with Icon and Status */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${
                        item.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        item.color === 'green' ? 'from-green-500 to-green-600' :
                        'from-purple-500 to-purple-600'
                      } shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {item.current ? (
                        <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          Current
                        </div>
                      ) : (
                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full">
                          Completed
                        </div>
                      )}
                    </div>

                    {/* Degree and Institution */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                      {item.institution}
                    </p>

                    {/* Location and Period */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Marks or Progress */}
                    {item.marks ? (
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Final Marks</span>
                        <span className="text-lg font-bold gradient-text">{item.marks}</span>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.semester}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-400">Educational Levels</div>
          </div>
          
          <div className="card text-center p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">92%</div>
            <div className="text-gray-600 dark:text-gray-400">Average Marks</div>
          </div>
          
          <div className="card text-center p-6">
            <div className="flex items-center justify-center mb-3">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl">
                <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div className="text-3xl font-bold gradient-text mb-2">2026</div>
            <div className="text-gray-600 dark:text-gray-400">Expected Graduation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
