import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Event Management Web Application',
      description: 'This application is built using HTML, CSS, JavaScript. Each page consists of different functions, and it will be redirected to show the event page. We can add an Event and Post from Admin Page, Then it will Show to the Landing page of The website.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://via.placeholder.com/400x300'
    },
    {
      title: 'Simple Text to Audio Converter',
      description: 'This Application is built using HTML, CSS, JavaScript. You can Add a Text and the Application will generate Audio.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://via.placeholder.com/400x300'
    },
    {
      title: 'Portfolio Website',
      description: 'This Portfolio Website is Created using React.js with an Interactive Design and I have added my Profile. And My Projects',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/400x300'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;