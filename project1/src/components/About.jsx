import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React.js', 'Node.js', 'JavaScript', 'TypeScript',
    'HTML/CSS', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with a keen eye for design and user experience. 
                With years of experience in web development, I specialize in creating responsive, 
                user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through technical writing.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-100 rounded-lg p-3 text-center text-gray-700"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;