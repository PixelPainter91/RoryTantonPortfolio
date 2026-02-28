import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category, items, index }) => {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="skill-category-title">
        {category}
      </h3>
      <ul className="skill-list">
        {items.map((skill, i) => (
          <motion.li
            key={skill}
            className="skill-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + i * 0.05 }}
          >
            <span className="skill-bullet" />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCategory;