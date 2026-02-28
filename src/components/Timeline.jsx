import { motion } from 'framer-motion';
import { timelineData } from '../utils/data';

const Timeline = () => {
  return (
    <div className="timeline-strip">
      <h3>The Journey</h3>
      <div className="timeline-items">
        {timelineData.map((item, i) => (
          <motion.div
            key={item.year}
            className="tl-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <span className="tl-icon">{item.icon}</span>
            <div className="tl-year">{item.year}</div>
            <div className="tl-role">{item.role}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;