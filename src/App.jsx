import { useState, useEffect } from 'react'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const education = {
    school: "Drexel University",
    degree: "Bachelor of Science in Computer Science",
    period: "2023 - 2024",
    location: "Philadelphia, PA",
    gpa: "3.92/4.0",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Management Systems",
      "Software Design & Architecture",
      "Software Security",
      "Network Security",
      "Operating Systems",
      "Artificial Intelligence",
      "Machine Learning",
      "Reinforcement Learning"
    ]
  };

  const certificates = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "January 2024",
      credentialId: "55a93222550b45c9bd97fef82dc70fe5",
      link: "https://www.credly.com/badges/f83dbcf3-3054-44ff-8db2-c429275d3b10"
    },
    {
      name: "Drexel University Dean's List",
      issuer: "Drexel University",
      date: "2023 - 2025",
    }
  ];

  const activities = [
    {
      name: "Drexel Chess Club",
      role: "Member",
      period: "2023 - 2025",
      description: "Organized Chess events and tournaments, while also participating in them. Unofficialy rated as 1500 ELO"
    },
    {
      name: "DISHA Indian Undergraduate Association",
      role: "Member",
      period: "2024 - 2025",
      description: "Participated and organized cultural events"
    }
  ];

  const skills = {
    languages: ['Java', 'Python', 'C', 'C++', 'SQL', 'HTML5/CSS3', 'JavaScript', 'TypeScript', 'XML', 'MIPS (Assembly)'],
    frameworks: ['Spring Boot', 'React', 'Node.js', 'JUCE (Audio)', 'Angular', 'JUnit', 'Cucumber'],
    cloudDevOps: ['AWS', 'Git', 'GitHub', 'Bit Bucket', 'JIRA', 'Bamboo', 'Docker', 'Kubernetes', 'Splunk'],
    softwareEngineering: ['Rest APIs', 'Microservices', 'Agile', 'TDD', 'CI/CD', 'Lean'],
    artificialIntelligence: ['Supervised & Unsupervised Machine Learning', 'Reinforcement Learning', 'NumPy', 'Scikit-Learn', 'Pandas', 'TensorFlow', 'Keras', 'Gymnasium', 'PyBullet', 'Stable-Baseline3', 'Matplotlib']
  };

  const experiences = [
    {
      company: "Vanguard",
      location: "Malvern, PA",
      role: "Application Engineer Co-op",
      period: "Sept 2023 – Jun 2024",
      achievements: [
        "Modernized legacy system integrations by building REST APIs with Spring Boot/Java, reducing integration overhead and enabling faster development cycles for downstream teams",
        "Automated error detection using AWS Lambda and Python, cutting manual QA time, and improving resolution speed",
        "Delivered multi-region disaster recovery solutions via AWS Cloud Stack for 4 business-critical apps, increasing uptime and fault tolerance to meet 99.99% availability goals",
        "Rebuilt a legacy web app into a React SPA, improving page load times by 35% and increase in user engagement"
      ]
    },
    {
      company: "Walgreens",
      location: "North Wales, PA",
      role: "Pharmacy Technician",
      period: "Jan 2021 – Present",
      achievements: [
        "Processed prescriptions and managed inventory using digital systems with high accuracy",
        "Trained and onboarded new technicians, reinforcing compliance and workflow standards",
        "Supported pharmacists in streamlining operations and resolving fulfillment issues"
      ]
    }
  ];

  const projects = [
    {
      title: "Energy-Aware Drone Swarm Search Agent",
      role: "Team Lead",
      description: "Multi-Agent Systems project at Drexel University focusing on optimizing drone swarm search with energy constraints using MARL.",
      technologies: ["Python", "Reinforcement Learning", "MARL", "PPO", "GAE", "PyTorch", "Gymnasium", "CNN", "NumPy"],
      achievements: [
        "Trained multi-agent reinforcement learning (MARL) agents in a drone swarm sim",
        "Developed custom reward function modeling energy use and recharge zones",
        "Implemented PPO agents with shared policy and heuristic return-to-base behavior"
      ]
    },
    {
      title: "SoundFormX Sound Sampler",
      role: "Team Lead",
      description: "Real-time audio sampler built with C++ and JUCE framework, featuring live pitch, volume, and FX control.",
      technologies: ["C++", "JUCE", "Multi-threading", "System Design", "Unit Testing", "GitHub", "Agile"],
      achievements: [
        "Built high-performance audio engine reducing processing lag by 40%",
        "Led 6-member agile team using Kanban methodology",
        "Authored detailed Software Requirements Specifications (SRS)"
      ]
    },
    {
      title: "Dragons Dining on a Budget",
      role: "Team Lead",
      description: "Student-focused food budgeting web application helping find affordable food near campus.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Maps API", "Agile", "Figma", "GitLab", "JIRA"],
      achievements: [
        "Built responsive web application with geolocation features",
        "Utilized Figma for UI/UX design",
        "Led 3-member Agile team to successful MVP delivery"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-200">
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold gradient-text">Dhruv Patel</h1>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/DP-Coder-11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruv-patel-8b2b73203/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="space-x-8">
              <a href="#about" className="nav-link dark:text-gray-300">About</a>
              <a href="#education" className="nav-link dark:text-gray-300">Education</a>
              <a href="#experience" className="nav-link dark:text-gray-300">Experience</a>
              <a href="#certificates" className="nav-link dark:text-gray-300">Certificates</a>
              <a href="#activities" className="nav-link dark:text-gray-300">Activities</a>
              <a href="#skills" className="nav-link dark:text-gray-300">Skills</a>
              <a href="#projects" className="nav-link dark:text-gray-300">Projects</a>
              <a href="#contact" className="nav-link dark:text-gray-300">Contact</a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <section id="about" className="text-center mb-20 animate-float">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-48 h-48 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-5"></div>
              <img
                src="/src/assets/profile.jpeg"
                alt="Dhruv Patel"
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <h2 className="text-5xl font-extrabold mb-6 gradient-text">
              Hi, I'm Dhruv!
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            A recent Computer Science graduate with a strong foundation in software development, experience working across the full stack, 
            and a passion for building reliable, scalable systems. I enjoy solving real-world problems through code and continuously learning 
            new technologies to grow as an engineer.
            </p>
          </div>
        </section>

        <section id="education" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Education</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{education.school}</h4>
                <p className="text-blue-600 dark:text-blue-400">{education.degree}</p>
                <p className="text-gray-600 dark:text-gray-300">{education.location}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 dark:text-gray-300">{education.period}</p>
                <p className="text-gray-600 dark:text-gray-300">GPA: {education.gpa}</p>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework</h5>
              <div className="flex flex-wrap gap-2">
                {education.relevantCourses.map((course) => (
                  <span key={course} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover">
                <div className="mb-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                      <h4 className="text-blue-600 dark:text-blue-400">{exp.company} • {exp.location}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 ml-4">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="certificates" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Certifications & Awards</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certificates Section */}
            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Professional Certifications</h4>
              <div className="space-y-6 flex-grow">
                {certificates.filter(cert => cert.credentialId).map((cert) => (
                  <div key={cert.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover border-l-4 border-blue-500 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                        <p className="text-blue-600 dark:text-blue-400 mb-2">{cert.issuer}</p>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          <p>Issued: {cert.date}</p>
                          <p>Credential ID: {cert.credentialId}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        >
                          View Certificate
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Academic Awards</h4>
              <div className="space-y-6 flex-grow">
                {certificates.filter(cert => !cert.credentialId).map((cert) => (
                  <div key={cert.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover border-l-4 border-purple-500 h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start space-x-4 flex-grow">
                        <div className="flex-shrink-0">
                          <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                          <p className="text-purple-600 dark:text-purple-400 mb-1">{cert.issuer}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{cert.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="activities" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Activities & Clubs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div key={activity.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 card-hover">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{activity.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{activity.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{activity.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
                <h4 className="font-semibold text-lg mb-4 capitalize text-gray-900 dark:text-white">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm card-hover overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={`/src/assets/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-semibold text-xl text-white">{project.title}</h4>
                    <p className="text-sm text-blue-200">{project.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Get in Touch</h3>
          <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm text-center card-hover">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Souderton, PA</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">+1 (848)-218-9547</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:pateldhruv920011@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">pateldhruv920011@gmail.com</a>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a 
                href="mailto:pateldhruv920011@gmail.com" 
                className="inline-block px-6 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruv-patel-8b2b73203/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Dhruv Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

