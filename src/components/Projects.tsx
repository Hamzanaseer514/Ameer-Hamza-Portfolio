"use client";

import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "websites" | "applications" | "games";
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "websites" | "applications" | "games"
  >("all");
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());

  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Cloud Kitchen",
      description:
        "Developed a web app enabling home chefs to launch and manage cloud kitchens, featuring real-time order tracking, automated inventory, and menu management.",
      image: "./Images/cloud.png",
      category: "websites",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
      liveUrl: "https://hncloudkitchen.netlify.app/",
      githubUrl: "https://github.com/Hamzanaseer514/Cloud-Kitchen",
    },
    {
      id: 2,
      title: "AudioAura | Music Website",
      description:
        "Created a music streaming app with dynamic playlist management, advanced search, and real-time content updates enhancing user interaction.",
      image: "./Images/audioaura.png",
      category: "websites",
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Stripe",
      ],
      liveUrl: "https://audio-aura.vercel.app/",
      githubUrl: "https://github.com/Hamzanaseer514/AudioAura-",
    },
    {
      id: 3,
      title: "E-commerce Web App",
      description:
        "Built a scalable eCommerce platform using the MERN stack, with secure authentication, dynamic product management, and a responsive UI for improved user experience.",
      image: "./Images/hopify.png",
      category: "websites",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
      liveUrl: "https://hopifyecommerce-client.onrender.com/",
      githubUrl: "https://github.com/Hamzanaseer514/EcommerceWebsite",
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description:
        "Intelligent chat assistant powered by machine learning and natural language processing, providing automated customer support and conversational AI capabilities.",
      image: "./Images/chat.png",
      category: "applications",
      techStack: [
        "Python",
        "TensorFlow",
        "Flask",
        "OpenAI API",
        "NLP",
        "Fast API",
      ],
      // liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "MyHealthPrac Clone",
      description:
        "Created a clone of MyHealthPrac website with Next JS, Tailwind CSS, and Shadcn UI for a responsive and user-friendly interface.",
      image: "./Images/health.png",
      category: "websites",
      techStack: ["Next JS", "Tailwind CSS", "Shadcn UI"],
      liveUrl: "https://my-health-prac.vercel.app/",
      githubUrl: "https://github.com/Hamzanaseer514/MyHealthPrac",
    },
    {
      id: 6,
      title: "Venum Website Clone",
      description:
        "Developed a full-featured clone of Venum, an international boxing website, as an internship task. Implemented complete cart functionality and add-to-favorites features for a seamless user experience.",
      image: "./Images/venum.png",
      category: "websites",
      techStack: ["Next JS", "Tailwind CSS", "Context API"],
      liveUrl: "https://venum-webite.vercel.app/",
      githubUrl: "https://github.com/Hamzanaseer514/Venum_Webite",
    },
    {
      id: 7,
      title: "Portfolio Website",
      description:
        "Developed the frontend for my portfolio website, including product listings, a shopping cart, and login/registration functionality to provide customers with a seamless shopping experience.",
      image: "./Images/portfolio.png",
      category: "websites",
      techStack: ["Next JS", "Tailwind CSS", "Mern Stack"],
      liveUrl: "https://meharpoahn.netlify.app/",
      githubUrl: "https://github.com/Hamzanaseer514/portfolio",
    },
    {
      id: 8,
      title: "Web Scraper",
      description:
        "I made a web scraper that collected 1 million data points. I then sorted this data using various sorting algorithms and searched through it using search algorithms. This is a project for Data Structures and Algorithms (DSA).",
      image: "./Images/scrapper.png",
      category: "applications",
      techStack: ["Python", "Web Scraping", "Data Structures", "Algorithms", "Sorting", "Searching"],
      githubUrl: "#",
    },
    {
      id: 9,
      title: "FYP Management System",
      description:
        "I made a Final Year Project (FYP) management system with a SQL database. It includes CRUD operations for students and professors. Additionally, it involves forming student groups and assigning projects to them.",
      image: "./Images/fyp.png",
      category: "applications",
      techStack: ["SQL", "Database Design", "CRUD Operations", "Student Management", "Project Assignment"],
      githubUrl: "#",
    },
    {
      id: 10,
      title: "Pharmacy Management System (C#)",
      description:
        "I developed a pharmacy management system in C# using object-oriented programming concepts. The system features a graphical user interface (GUI) for easy interaction and management of pharmacy operations.",
      image: "./Images/guiPharmacy.png",
      category: "applications",
      techStack: ["C#", "Object-Oriented Programming", "GUI", "Windows Forms", "Database"],
      githubUrl: "#",
    },
    {
      id: 11,
      title: "Library Management System",
      description:
        "I developed a library management system and designed its database. The system includes full functionality for users, admins, and books, featuring CRUD operations, loan requests, and book management.",
      image: "./Images/library.png",
      category: "applications",
      techStack: ["Database Design", "CRUD Operations", "User Management", "Book Management", "Loan System"],
      githubUrl: "#",
    },
    {
      id: 12,
      title: "Pharmacy Management System (C++)",
      description:
        "I also developed a pharmacy management system using C++. This was the first project in my journey into computer science, and it is a command-line interface (CLI) project. The system manages various pharmacy operations.",
      image: "./Images/pharmacy cpp.png",
      category: "applications",
      techStack: ["C++", "Command Line Interface", "File Handling", "Data Structures", "Pharmacy Operations"],
      githubUrl: "#",
    },
    {
      id: 13,
      title: "Heli Havoc GUI",
      description:
        "I developed a game called Heli Havoc using C# and object-oriented programming concepts. It is a GUI-based game with a player and an enemy. The game features two levels, offering a progressively challenging experience for players.",
      image: "./Images/csharpGame1.png",
      category: "games",
      techStack: ["C#", "Object-Oriented Programming", "GUI", "Game Development", "Windows Forms"],
      githubUrl: "#",
    },
    {
      id: 14,
      title: "Heli Havoc CLI",
      description:
        "I developed a game called Heli Havoc as the first game of my semester using C++. It is a GUI-based game featuring a player and an enemy, with two levels. This project helped me apply fundamental programming concepts.",
      image: "./Images/heli havoc.png",
      category: "games",
      techStack: ["C++", "Game Development", "GUI", "Fundamental Programming", "Game Logic"],
      githubUrl: "#",
    },
    {
      id: 15,
      title: "Pac-Man",
      description:
        "I created a Pac-Man game, which is a classic arcade game where players control Pac-Man, navigating through a maze to eat dots while avoiding ghosts. The game features the iconic maze layout, power pellets, and ghost enemies.",
      image: "./Images/packman.png",
      category: "games",
      techStack: ["Game Development", "Maze Navigation", "Game Logic", "Classic Arcade", "Player Controls"],
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "websites", label: "Websites" },
    { id: "applications", label: "Applications" },
    { id: "games", label: "Games" },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of my web development, application development, game development, and
            innovative technology projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card group hover:transform hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-fill w-full h-full absolute inset-0"
                      style={{ zIndex: 0 }}
                    />
                  ) : null}
                
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-800" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  <p className={`text-sm sm:text-base ${expandedDescriptions.has(project.id) ? "" : "line-clamp-3"}`}>
                    {project.description}
                  </p>
                  {project.description.length > 120 && (
                    <button
                      onClick={() => toggleDescription(project.id)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-xs sm:text-sm font-medium mt-2 transition-colors"
                    >
                      {expandedDescriptions.has(project.id) ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 flex-1 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className={`text-xs sm:text-sm py-2 px-3 sm:px-4 flex-1 text-center ${
                        project.liveUrl ? "btn-secondary" : "btn-primary"
                      }`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
