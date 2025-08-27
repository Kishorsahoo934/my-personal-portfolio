import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Skin Cancer Classification",
      description: "Deep learning model for skin cancer detection using ResNet50 architecture. Trained on dermatoscopic images to classify various types of skin lesions with high accuracy.",
      github: "https://github.com/Kishorsahoo934/Skin-Cancer-Classification-.git",
      liveDemo: null,
      tech: ["TensorFlow", "ResNet50", "Deep Learning", "Python", "Computer Vision"],
      gradient: "from-red-400 to-pink-600"
    },
    {
      title: "Potato Disease Classification",
      description: "Streamlit web application that identifies potato plant diseases using computer vision. Helps farmers detect early blight and late blight in potato leaves.",
      github: "https://github.com/Kishorsahoo934/Potatato-Disease-Classification.git",
      liveDemo: "https://potatato-disease-classification.streamlit.app/",
      tech: ["Streamlit", "TensorFlow", "Image Classification", "Python"],
      gradient: "from-green-400 to-blue-600"
    },
    {
      title: "Song Recommendation using NLP",
      description: "Music recommendation system that analyzes song lyrics and user preferences using natural language processing techniques and similarity algorithms.",
      github: "https://github.com/Kishorsahoo934/Song-Recomendation-Using-NLP.git",
      liveDemo: null,
      tech: ["NLP", "TF-IDF", "Cosine Similarity", "Python", "Pandas"],
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "ChatBot Using GenAI",
      description: "Interactive chatbot powered by generative AI with real-time communication features. Built with Flask backend and WebSocket support for seamless conversations.",
      github: "https://github.com/Kishorsahoo934/ChatBot-Using-GenAI.git",
      liveDemo: null,
      tech: ["Flask", "GenAI", "SocketIO", "Python", "WebSockets"],
      gradient: "from-blue-400 to-purple-600"
    },
    {
      title: "ToDo List using Django",
      description: "Full-featured task management web application with user authentication, CRUD operations, and a clean, responsive interface built with Django framework.",
      github: "https://github.com/Kishorsahoo934/TODO-List-using-Djnago.git",
      liveDemo: null,
      tech: ["Django", "Python", "SQLite", "HTML/CSS", "JavaScript"],
      gradient: "from-yellow-400 to-orange-600"
    },
    {
      title: "Resume Screening using NLP",
      description: "Automated resume screening tool that extracts and analyzes key information from resumes using NLP techniques to match job requirements efficiently.",
      github: "https://github.com/Kishorsahoo934/Resume-Screening-using-NLP.git",
      liveDemo: null,
      tech: ["Streamlit", "NLP", "Spacy", "TF-IDF", "Python"],
      gradient: "from-indigo-400 to-purple-600"
    },
    {
      title: "Weather App",
      description: "Real-time weather application that provides current weather conditions, forecasts, and location-based weather data with an intuitive user interface.",
      github: "https://github.com/Kishorsahoo934/weather-app.git",
      liveDemo: null,
      tech: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Email Spam Detector",
      description: "Machine learning-powered email classification system that accurately identifies spam emails using advanced NLP techniques and feature extraction methods.",
      github: "https://github.com/Kishorsahoo934/Email-Spam-Detector.git",
      liveDemo: null,
      tech: ["NLP", "Scikit-learn", "Streamlit", "Python", "Machine Learning"],
      gradient: "from-orange-400 to-red-600"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-100, 100, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in AI, Machine Learning, 
              Web Development, and Data Science. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <FaGithub className="text-sm" />
                      Code
                    </motion.a>
                    
                    {project.liveDemo && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-200`}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <motion.a
              href="https://github.com/Kishorsahoo934"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaEye className="text-lg" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
