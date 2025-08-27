import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const highlights = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      title: "Education",
      description: "3rd Year B.Tech Computer Science at GIFT Autonomous College"
    },
    {
      icon: <FaCode className="text-3xl text-green-600" />,
      title: "Full Stack Development",
      description: "Proficient in Python, Java, Django, React, and modern web technologies"
    },
    {
      icon: <FaBrain className="text-3xl text-purple-600" />,
      title: "AI & Machine Learning",
      description: "Experienced with TensorFlow, Deep Learning, NLP, and data-driven solutions"
    },
    {
      icon: <FaRocket className="text-3xl text-orange-600" />,
      title: "Innovation",
      description: "Love building projects that solve real-world problems with cutting-edge tech"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-400 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gray-400 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={fadeInUp}
              className="space-y-6"
            >
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I'm a passionate developer with hands-on experience in{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">Machine Learning</span>,{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Deep Learning</span>,{' '}
                <span className="font-semibold text-green-600 dark:text-green-400">Django</span>, and{' '}
                <span className="font-semibold text-orange-600 dark:text-orange-400">Full Stack Development</span>.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                I'm skilled in Python, Java, TensorFlow, Streamlit, and NLP, and I love building 
                data-driven solutions that solve real-world problems. My journey in computer science 
                has been driven by curiosity and a desire to create meaningful impact through technology.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or working on innovative solutions that bridge the gap between AI and practical applications.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 mt-8"
              >
                {['Python', 'Java', 'TensorFlow', 'React', 'Django', 'Machine Learning', 'NLP', 'Deep Learning'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Highlights */}
            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "8+", label: "Projects Completed" },
              { number: "2", label: "Internships" },
              { number: "1", label: "Competition Win" },
              { number: "5+", label: "Certifications" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-xl shadow-lg"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
