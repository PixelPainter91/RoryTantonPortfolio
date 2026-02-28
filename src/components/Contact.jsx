import { motion } from 'framer-motion';
import { contactInfo } from '../utils/data';

const contactItems = [
  { icon: '📧', label: 'Email', value: 'rory_tanton@hotmail.com', href: `mailto:${contactInfo.email}` },
  { icon: '💻', label: 'GitHub', value: 'github.com/PixelPainter91', href: contactInfo.github },
  { icon: '💼', label: 'LinkedIn', value: 'Rory Tanton', href: contactInfo.linkedin },
  { icon: '📱', label: 'Phone', value: contactInfo.phone, href: null },
];

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="contact-layout">
          {/* heading and CTA */}
          <div>
            <motion.div
              className="section-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.div>

            <motion.h2
              className="contact-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Let's create
              <em>something great</em>
            </motion.h2>

            <motion.p
              className="contact-sub"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Open to junior UI/UX design roles, frontend developer positions,
              and product designer opportunities — remote or hybrid.
            </motion.p>

            <motion.div
              className="contact-actions"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a href={`mailto:${contactInfo.email}`} className="btn btn-primary">
                <span aria-hidden="true">✉</span> Email Me
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Rory Tanton on LinkedIn (opens in new tab)"
                className="btn btn-outline"
              >
                LinkedIn <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          {/* contact cards */}
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {contactItems.map((item) => (
              <div className="contact-item" key={item.label}>
                <span className="contact-item-icon" aria-hidden="true">{item.icon}</span>
                <div className="contact-item-info">
                  <h3>{item.label}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      aria-label={`${item.label}: ${item.value}${item.href.startsWith('mailto') ? '' : ' (opens in new tab)'}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <footer className="footer-bar">
        <span className="footer-logo" aria-label="Rory Tanton">RT</span>
        <p>© 2026 Rory Tanton — UI/UX Designer &amp; Frontend Developer</p>
        <p>Built with care <span aria-hidden="true">✦</span></p>
      </footer>
    </>
  );
};

export default Contact;
