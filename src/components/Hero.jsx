import { motion } from 'framer-motion';
import { designProcess } from '../utils/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const Hero = () => {
  return (
    <section className="hero" id="about">
      {/* text content */}
      <div className="hero-text">
        <motion.div className="hero-eyebrow" {...fadeUp(0.2)}>
          Fullstack Developer &amp; UI/UX Designer
        </motion.div>

        <motion.h1 className="hero-name" {...fadeUp(0.4)}>
          Rory<br /><em>Tanton</em>
        </motion.h1>

        <motion.p className="hero-tagline" {...fadeUp(0.6)}>
          From engineering weapons systems in the Royal Navy to crafting digital
          experiences. I bring systems thinking, precision, and a user-first
          mindset to every design and build.
        </motion.p>

        <motion.div className="hero-cta" {...fadeUp(0.8)}>
          <a href="#work" className="btn btn-primary">View Case Studies ↓</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </motion.div>
      </div>

      {/* design process panel */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="process-label">Design Process</p>

        <div className="process-steps">
          {designProcess.map((step) => (
            <div className="process-step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <div className="step-info">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">1+</span>
            <span className="stat-label">Live Products</span>
          </div>
          <div className="stat">
            <span className="stat-num">10yr</span>
            <span className="stat-label">Engineering</span>
          </div>
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;