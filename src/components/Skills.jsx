import { motion } from 'framer-motion';
import { skillsData } from '../utils/data';
import Timeline from './Timeline';

const SkillGroup = ({ category, group, index }) => (
  <motion.div
    className="skill-group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
  >
    <h4>{category}</h4>
    <div className="pills">
      {group.items.map((skill) => (
        <span
          key={skill.label}
          className={`pill${skill.primary ? ' p' : ''}`}
        >
          {skill.label}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-layout">
        <div className="skills-intro">
          <motion.div
            className="section-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Capabilities
          </motion.div>

          <motion.h2
            className="section-title"
            style={{ marginBottom: 0 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Design &amp;<br /><em>Build</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            I work end-to-end — from the first sketch in Figma to the deployed product. With an engineering background, I design with implementation in mind and build with the user’s experience at the center.
          </motion.p>
        </div>

        <div className="skills-cats">
          {Object.entries(skillsData).map(([category, group], index) => (
            <SkillGroup
              key={category}
              category={category}
              group={group}
              index={index}
            />
          ))}
        </div>
      </div>

      <Timeline />
    </section>
  );
};

export default Skills;