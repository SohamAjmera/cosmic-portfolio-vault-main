
import { motion } from 'framer-motion';
import { Github, Brain, Shield, Heart, Zap, BarChart3 } from 'lucide-react';
import breastCancerImg from '@/assets/breast-cancer-detection.jpg';
import forestFireImg from '@/assets/forest-fire-detection.jpg';
import organDonationImg from '@/assets/organ-donation-system.jpg';
import omniplexImg from '@/assets/omniplex-ai.jpg';
import analyticsImg from '@/assets/analytics-dashboard.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Breast Cancer Detection",
      description: "Machine learning model for early breast cancer detection using medical imaging and advanced classification algorithms",
      tech: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Pandas"],
      githubLink: "https://github.com/SohamAjmera/Breast-Cancer-Detection",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-600",
      image: breastCancerImg
    },
    {
      title: "Forest Fire Detection",
      description: "Real-time forest fire detection system using computer vision and IoT sensors for early warning and prevention",
      tech: ["Python", "OpenCV", "IoT", "Machine Learning", "Firebase"],
      githubLink: "https://github.com/SohamAjmera/ForestFireDetection",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      image: forestFireImg
    },
    {
      title: "Organ Donation System",
      description: "Comprehensive organ donation management system connecting donors, recipients, and medical facilities efficiently",
      tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript"],
      githubLink: "https://github.com/SohamAjmera/OrganDonationSystem",
      icon: <Heart className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
      image: organDonationImg
    },
    {
      title: "Omniplex: Absolute Intelligence",
      description: "Advanced AI system integrating multiple intelligence models for complex problem-solving and decision-making",
      tech: ["Python", "TensorFlow", "NLP", "Deep Learning", "API"],
      githubLink: "https://github.com/SohamAjmera/Omniplex_AbsoluteIntelligence",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600",
      image: omniplexImg
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Intelligent analytics platform with real-time data visualization and predictive insights for business intelligence",
      tech: ["Python", "React", "FastAPI", "PostgreSQL", "Chart.js"],
      githubLink: "https://github.com/SohamAjmera/SohamAjmera-Ai-Powered-Analyitics-Dashboard",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      image: analyticsImg
    }
  ];

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-cosmic">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in machine learning, AI, and system development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative glass rounded-2xl overflow-hidden h-full hover-glow transition-all duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                  
                  {/* Project Icon Overlay */}
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">{/* Content container */}

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-2 py-1 text-xs glass rounded-full text-accent border border-accent/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <div className="flex">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass border border-border hover-lift font-medium text-sm rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  </div>
                </div>{/* End content container */}

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/SohamAjmera"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass border border-primary/30 text-primary rounded-full font-semibold hover-lift glow-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
