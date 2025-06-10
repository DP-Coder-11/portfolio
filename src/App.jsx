import { useState } from 'react'
import './App.css'

export default function App() {

  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'Git', level: 'Advanced' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-sans">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Dhruv Patel</h1>
          <nav className="space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">

        <section id="about" className="text-center mb-20 animate-float">
          <h2 className="text-5xl font-extrabold mb-6 gradient-text">
            Hi, I'm Dhruv 👋
          </h2>
          
            <p className="text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
              I'm a dedicated developer with a strong foundation in web technologies and a passion for creating
              user-friendly applications. With experience in both front-end and back-end development, I strive to
              build solutions that are not only technically sound but also provide great user experiences.
            </p>
          
        </section>


        <section id="skills" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm card-hover">
                <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                <span className="text-sm text-blue-600">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-sm card-hover overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100"></div>
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">Project Name</h4>
                <p className="text-gray-600 mb-4">
                  A detailed description of your project. Include the technologies used and your role in the project.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Node.js</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm card-hover overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100"></div>
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-2">Another Project</h4>
                <p className="text-gray-600 mb-4">
                  Showcase your best work here. Include links to live demos and GitHub repositories.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">Get in Touch</h3>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm text-center card-hover">
            <p className="text-gray-600 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <a 
              href="mailto:you@example.com" 
              className="inline-block px-6 py-3 gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Say Hello 👋
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Dhruv Patel. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://github.com/yourusername" className="nav-link">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" className="nav-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

