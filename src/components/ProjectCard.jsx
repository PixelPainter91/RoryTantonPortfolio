import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const icons = {
    0: "💅",
    1: "💻",
    2: "⚙️"
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="project-icon"
        style={{ backgroundColor: project.color }}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        {icons[index] || "📦"}
      </motion.div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-role">{project.role}</p>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <motion.span
            key={tech}
            className="tech-tag"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {project.link && (
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          whileHover={{ x: 5 }}
        >
          View Project →
        </motion.a>
      )}
    </motion.div>
  );
};

export default ProjectCard;