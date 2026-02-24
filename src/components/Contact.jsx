import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          Let's Build Something Amazing
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Open to junior frontend & full-stack roles (remote/hybrid)
        </motion.p>

        <motion.div
          className="contact-buttons"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="mailto:rory_tanton@hotmail.com"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📧 Email Me
          </motion.a>
          
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <motion.a
            href="https://github.com/PixelPainter91"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            💻Github
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rory-tanton-8aa034101/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            whileHover={{ scale: 1.2, rotate: -360 }}
            transition={{ duration: 0.3 }}
          >
            💼Linkedin
          </motion.a>
        </motion.div>

        <motion.div
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p>© 2025 Rory Tanton. Built with React & Framer Motion ✨</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;