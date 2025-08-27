import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-3xl text-blue-600" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 70 },
        { name: "Tailwind CSS", level: 88 }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <FaServer className="text-3xl text-green-600" />,
      skills: [
        { name: "Django", level: 90 },
        { name: "Flask", level: 85 },
        { name: "Node.js", level: 70 },
        { name: "FAST APIs", level: 88 },
        { name: "Python", level: 95 }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "ML/Data Science",
      icon: <FaBrain className="text-3xl text-purple-600" />,
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "Pandas", level: 92 },
        { name: "NumPy", level: 88 },
        { name: "NLP", level: 85 },
        { name: "Deep Learning", level: 87 }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tools",
      icon: <FaTools className="text-3xl text-orange-600" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Streamlit", level: 85 },
        { name: "VSCode", level: 95 },
        { name: "Jupyter", level: 92 }
      ],
      gradient: "from-orange-500 to-red-500"
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

  const ProgressBar = ({ skill, index, categoryGradient }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="mb-4"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            className={`h-2.5 bg-gradient-to-r ${categoryGradient} rounded-full relative overflow-hidden`}
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.2
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
            className={`absolute w-16 h-16 border border-gray-400 rounded-full`}
            style={{
              top: `${20 + (i % 3) * 30}%`,
              left: `${10 + (i % 4) * 20}%`,
            }}
          />
        ))}
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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here's an overview of my technical skills and proficiency levels. I'm constantly learning 
              and improving in these areas to stay current with the latest technologies.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-md">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.title}
                    </h3>
                    <div className={`h-1 w-16 bg-gradient-to-r ${category.gradient} rounded-full mt-2`}></div>
                  </div>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <ProgressBar 
                      key={skillIndex} 
                      skill={skill} 
                      index={skillIndex}
                      categoryGradient={category.gradient}
                    />
                  ))}
                </div>

                {/* Category Stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Average Proficiency
                    </span>
                    <span className={`text-lg font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
              Other Technologies I've Worked With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Scikit-learn', 'Matplotlib', 'Seaborn', 'OpenCV', 'Keras', 'PyTorch',
                'MongoDB', 'SQLite', 'MySQL', 'Postman', 'Figma', 'Heroku',
                'Netlify', 'Vercel', 'AWS', 'Firebase', 'Bootstrap', 'Jupyter Notebooks'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.05,
                    hover: { duration: 0.2 }
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-md cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
