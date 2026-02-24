import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import Timeline from './Timeline';
import { skillsData } from '../utils/data';

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items], index) => (
            <SkillCategory 
              key={category} 
              category={category} 
              items={items} 
              index={index} 
            />
          ))}
        </div>

        <Timeline />
      </div>
    </section>
  );
};

export default Skills;