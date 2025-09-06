'use client'

import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react'

interface ExperienceItem {
  id: number
  type: 'work' | 'education'
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'LASKON TECHNOLOGIES',
      location: 'Liverpool, England, United Kingdom · Remote',
      period: 'Jul 2025 - Present · 3 mos',
      description: 'Working as a Full Stack Developer at Laskon, developing scalable web applications using the MERN stack.',
      achievements: [
        'Designed and implemented RESTful APIs using Node.js and Express',
        'Built dynamic frontend interfaces using React.js and Tailwind CSS',
        'Integrated secure user authentication and role-based access control',
        'Optimized database queries and managed MongoDB collections',
        'Actively participated in code reviews, Agile stand-ups, and project planning'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Director General, Cyber Security Society',
      company: 'CSS Uet Lahore',
      location: 'Lahore, Punjab, Pakistan · On-site',
      period: 'Mar 2025 - Present · 7 mos',
      description: 'Leading the Cyber Security Society at UET Lahore, managing team coordination and event execution.',
      achievements: [
        'Led team coordination efforts for technical and non-technical events',
        'Managed workshops, seminars, and community meetups',
        'Enhanced team efficiency through effective event planning',
        'Coordinated volunteer management and on-ground execution'
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Voliom',
      location: 'Remote',
      period: 'Jul 2025 - Aug 2025 · 2 mos',
      description: 'Full Stack Developer Intern at Voliom, contributing to scalable web applications using Next.js and Node.js.',
      achievements: [
        'Developed fast and dynamic frontend interfaces using Next.js',
        'Implemented responsive UI components and integrated RESTful APIs',
        'Managed state using React Hooks and handled server-side logic',
        'Performed user authentication and database operations using MongoDB',
        'Ensured secure and efficient API communication in agile environment'
      ]
    },
    {
      id: 4,
      type: 'work',
      title: 'Executive Member of MLSA',
      company: 'Microsoft Learn Student Ambassadors (MLSA) - UET Lahore',
      location: 'Lahore, Punjab, Pakistan · On-site',
      period: 'Dec 2023 - May 2024 · 6 mos',
      description: 'Collaborated with core MLSA team to manage and organize multiple technical and non-technical events on campus.',
      achievements: [
        'Led team coordination efforts for smooth event execution',
        'Organized workshops, seminars, and community meetups',
        'Played key role in event planning and volunteer management',
        'Enhanced team efficiency through effective coordination'
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${
                    item.type === 'work' 
                      ? 'bg-blue-500' 
                      : 'bg-purple-500'
                  }`}></div>

                  {/* Content Card */}
                  <div className={`ml-16 card p-6 ${
                    index % 2 === 0 ? 'lg:ml-16' : 'lg:ml-16'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        {item.type === 'work' ? (
                          <Building className="w-5 h-5 text-blue-500" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-purple-500" />
                        )}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'work'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {item.type === 'work' ? 'Work Experience' : 'Education'}
                      </span>
                    </div>

                    {/* Company/Institution */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {item.company}
                      </span>
                    </div>

                    {/* Location and Period */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            item.type === 'work' ? 'bg-blue-500' : 'bg-purple-500'
                          }`}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
