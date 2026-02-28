import { motion } from 'framer-motion';
import CaseStudy from './CaseStudy';
import { caseStudies } from '../utils/data';

const Projects = () => {
  return (
    <section id="work">
      <div className="section-header">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Selected Work
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Case Studies &amp;<br /><em>Design Work</em>
        </motion.h2>
      </div>

      <div className="case-studies">
        {caseStudies.map((study, index) => (
          <CaseStudy key={study.number} study={study} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;