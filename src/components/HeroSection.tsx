import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import heroGalaxy from '@/assets/hero-galaxy.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroGalaxy})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80 z-10" />

      {/* Stars Animation */}
      <div className="absolute inset-0 stars-bg z-20" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-30 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 text-cosmic"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Soham Ajmera
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Final-Year Computer Engineering Student
          </p>
          <motion.p
            className="text-lg md:text-xl text-accent mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Artificial Intelligence Enthusiast
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-cosmic text-primary-foreground rounded-full font-semibold hover-lift glow-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>

          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass border border-primary/30 text-primary rounded-full font-semibold hover-lift hover:bg-primary/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
