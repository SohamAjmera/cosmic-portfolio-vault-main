import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const AboutSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const techStack = [
    'Python', 'Java', 'JavaScript', 'SQL', 'FastAPI', 
    'TensorFlow', 'PyTorch', 'React', 'Node.js', 'Docker'
  ];

  const fullText = techStack.join(' • ') + ' • ';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Reset animation after a pause
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skills = [
    { name: 'Python Programming', level: 95 },
    { name: 'AI/ML Systems', level: 90 },
    { name: 'Backend Architecture', level: 88 },
    { name: 'Data Structures & Algorithms', level: 92 },
    { name: 'System Design', level: 85 },
    { name: 'Cloud Technologies (AWS)', level: 80 },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative mx-auto lg:mx-0 w-80 h-80">
              <motion.div
                className="absolute inset-0 bg-cosmic rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden glass"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/lovable-uploads/d4f28627-dc52-44ba-a2eb-1bf4a0d51ed8.png"
                  alt="Soham Ajmera"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Tech Icons */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 glass rounded-full flex items-center justify-center text-primary font-bold"
                  style={{
                    top: `${20 + Math.sin((i * Math.PI) / 4) * 140}px`,
                    left: `${140 + Math.cos((i * Math.PI) / 4) * 140}px`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {techStack[i]?.charAt(0) || '✨'}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-5xl font-bold mb-6 text-nebula"
                whileHover={{ scale: 1.02 }}
              >
                About Me
              </motion.h2>
              
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                I'm a passionate Final-Year Computer Engineering student with a deep fascination 
                for backend systems and cutting-edge technologies. My journey in software development 
                has led me to specialize in building robust, scalable systems that power modern applications.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                From architecting microservices to implementing AI-powered solutions, I thrive on 
                solving complex problems and turning innovative ideas into reality.
              </motion.p>
            </div>

            {/* Tech Stack Typewriter */}
            <motion.div
              className="glass p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">Tech Stack</h3>
              <div className="font-mono text-accent text-lg h-8">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-primary">Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-accent">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      className="h-2 bg-cosmic rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;