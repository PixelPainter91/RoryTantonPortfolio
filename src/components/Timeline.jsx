import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    { year: "2014-2020", role: "Royal Navy Weapons Engineer", icon: "⚓" },
    { year: "2020-2023", role: "Engineering Student", icon: "🎓" },
    { year: "2023-2024", role: "Engineering Surveyor", icon: "🔍" },
    { year: "2024-Present", role: "Full Stack Developer", icon: "💻" }
  ];

  return (
    <motion.div
      className="timeline"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="timeline-title">The Journey</h3>
      <div className="timeline-content">
        {milestones.map((milestone, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="timeline-icon">{milestone.icon}</span>
              <div>
                <p className="timeline-year">{milestone.year}</p>
                <p className="timeline-role">{milestone.role}</p>
              </div>
            </motion.div>
            {i < milestones.length - 1 && (
              <span className="timeline-arrow">→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;