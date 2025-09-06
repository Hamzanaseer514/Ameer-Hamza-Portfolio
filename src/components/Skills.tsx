'use client'

import { Code, Database, Palette, Smartphone, Brain, Globe, Server, Database as DbIcon } from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: 'HTML', percentage: 95, icon: Code, color: 'red', category: 'Frontend' },
    { name: 'CSS', percentage: 80, icon: Palette, color: 'blue', category: 'Frontend' },
    { name: 'Javascript', percentage: 70, icon: Code, color: 'yellow', category: 'Frontend' },
    { name: 'React JS', percentage: 70, icon: Code, color: 'cyan', category: 'Frontend' },
    { name: 'Node JS', percentage: 80, icon: Server, color: 'green', category: 'Backend' },
    { name: 'Express JS', percentage: 70, icon: Server, color: 'gray', category: 'Backend' },
    { name: 'MongoDB', percentage: 60, icon: Database, color: 'emerald', category: 'Database' },
    { name: 'Wordpress', percentage: 60, icon: Globe, color: 'blue', category: 'CMS' },
    { name: 'Tailwind', percentage: 80, icon: Palette, color: 'cyan', category: 'Frontend' },
    { name: 'Bootstrap', percentage: 70, icon: Palette, color: 'purple', category: 'Frontend' },
    { name: 'C++', percentage: 60, icon: Code, color: 'blue', category: 'Programming' },
    { name: 'C#', percentage: 80, icon: Code, color: 'purple', category: 'Programming' },
    { name: 'SQL', percentage: 85, icon: DbIcon, color: 'blue', category: 'Database' },
    { name: 'Python', percentage: 70, icon: Code, color: 'yellow', category: 'Programming' },
  ]

  const categories = ['Frontend', 'Backend', 'Database', 'Programming', 'CMS']

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My expertise in various technologies and programming languages
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    {/* Skill Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 bg-${skill.color}-100 dark:bg-${skill.color}-900/30 rounded-xl`}>
                        <Icon className={`w-6 h-6 text-${skill.color}-600 dark:text-${skill.color}-400`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="text-lg font-bold gradient-text">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div 
                          className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 h-3 rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < Math.floor(skill.percentage / 20) 
                                ? `bg-${skill.color}-500` 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.percentage >= 90 ? 'Expert' : 
                         skill.percentage >= 80 ? 'Advanced' : 
                         skill.percentage >= 70 ? 'Intermediate' : 
                         skill.percentage >= 60 ? 'Basic' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categorySkills = skills.filter(skill => skill.category === category)
              const avgPercentage = Math.round(
                categorySkills.reduce((sum, skill) => sum + skill.percentage, 0) / categorySkills.length
              )
              
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category}
                  </h3>
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {avgPercentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {categorySkills.length} Skills
                  </div>
                </div>
              )
            })}
          </div>

          {/* Overall Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold gradient-text mb-2">{skills.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Total Skills</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold gradient-text mb-2">
                {Math.round(skills.reduce((sum, skill) => sum + skill.percentage, 0) / skills.length)}%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Average Proficiency</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold gradient-text mb-2">{categories.length}</div>
              <div className="text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
