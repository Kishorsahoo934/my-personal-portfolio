import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaBriefcase, FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      category: "Internships",
      icon: <FaBriefcase className="text-3xl text-blue-600" />,
      items: [
        {
          title: "Deep Learning Intern",
          organization: "NIT Rourkela",
          description: "Worked on Deep Learning applications for Cryptography & Healthcare. Developed innovative solutions using neural networks for data security and medical diagnostics.",
          year: "2024",
          skills: ["Deep Learning", "Machine Learning", "Blockchain"]
        },
        {
          title: "Java Developer Intern",
          organization: "CTTC (Central Tool Room And Training Center)",
          description: "Contributed to technology transfer projects and gained hands-on experience in commercializing research innovations.",
          year: "2024",
          skills: ["AWT", "Swing"]
        }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Competitions",
      icon: <FaTrophy className="text-3xl text-yellow-600" />,
      items: [
        {
          title: "First Prize - Web Development",
          organization: "GIFT Autonomous College",
          description: "Won first place in the inter college Web Development competition, demonstrating exceptional problem-solving skills and algorithmic thinking.",
          year: "2024",
          skills: ["HTML", "CSS", "JavaScript", "Django"]
        }
      ],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      category: "Certifications",
      icon: <FaCertificate className="text-3xl text-green-600" />,
      items: [
        {
          title: "Programming in Java - Silver Medal",
          organization: "NPTEL (National Programme on Technology Enhanced Learning)",
          description: "Achieved silver medal certification in Java programming, demonstrating proficiency in object-oriented programming concepts.",
          year: "2024",
          skills: ["Java", "OOP", "Data Structures", "Programming Fundamentals"]
        },
        {
          title: "Machine Learning Specialization",
          organization: "Coursera",
          description: "Completed comprehensive machine learning courses covering supervised learning, unsupervised learning, and neural networks.",
          year: "2024",
          skills: ["Machine Learning", "Python", "TensorFlow", "Data Analysis"]
        },
        {
          title: "Data Science & Analytics",
          organization: "Great Learning",
          description: "Completed advanced certification in data science and analytics, focusing on real-world applications and industry best practices.",
          year: "2024",
          skills: ["Data Science", "Analytics", "Statistical Analysis", "Data Visualization"]
        }
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

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

  return (
    <section
      id="achievements"
      className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-800 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-dashed border-gray-400 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 border-2 border-dotted border-gray-400 rounded-full"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.05 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my key achievements, including internships,
              competition wins, and professional certifications that have shaped
              my journey in technology and computer science.
            </p>
          </motion.div>

          {/* Achievements Categories */}
          <div className="space-y-16">
            {achievements.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={fadeInUp} className="relative">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-4 px-6 sm:px-8 py-4 bg-white dark:bg-gray-900 rounded-full shadow-lg">
                    <div
                      className={`p-3 bg-gradient-to-r ${category.gradient} rounded-full text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.items.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, delay: achievementIndex * 0.2 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.gradient}`}
                        ></div>
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex-1">
                              <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                                {achievement.title}
                              </h4>
                              <p
                                className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                              >
                                {achievement.organization}
                              </p>
                            </div>
                            <div className="text-right">
                              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                {achievement.year}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                            {achievement.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2">
                            {achievement.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                whileHover={{ scale: 1.05 }}
                                className={`px-3 py-1 bg-gradient-to-r ${category.gradient} bg-opacity-10 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600`}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievement Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              { icon: <FaBriefcase className="text-2xl sm:text-3xl" />, number: "2", label: "Internships", color: "text-blue-600" },
              { icon: <FaTrophy className="text-2xl sm:text-3xl" />, number: "1", label: "Competition Win", color: "text-yellow-600" },
              { icon: <FaCertificate className="text-2xl sm:text-3xl" />, number: "3+", label: "Certifications", color: "text-green-600" },
              { icon: <FaGraduationCap className="text-2xl sm:text-3xl" />, number: "1", label: "NPTEL Medal", color: "text-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`${stat.color} mb-3 flex justify-center`}>{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaAward className="text-base sm:text-lg" />
              More achievements coming soon!
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
