import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { figmaEmbeds } from '../utils/data';

// Single embed card, fades in on scroll
const FigmaEmbedBlock = ({ embed, index }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="figma-embed-block"
      ref={ref}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="figma-embed-header">
        <span className="figma-embed-title">{embed.title}</span>
        <span className="figma-badge">Figma</span>
      </div>

      {/* live iframe when a real URL is provided */}
      {!embed.isPlaceholder && embed.embedUrl && (
        <div className="figma-iframe-wrapper">
          <iframe
            src={embed.embedUrl}
            allowFullScreen
            title={embed.title}
          />
        </div>
      )}

      {/* placeholder until real embed URL is set */}
      {embed.isPlaceholder && (
        <div className="figma-placeholder">
          <div className="figma-placeholder-icon">{embed.placeholderIcon}</div>
          <h3>{embed.placeholderTitle}</h3>
          <p>{embed.placeholderDesc}</p>
          <code>
            {'<iframe src="https://www.figma.com/embed?embed_host=share&url=YOUR_LINK" allowfullscreen />'}
          </code>
        </div>
      )}
    </div>
  );
};


const FigmaWork = () => {
  return (
    <section id="figma-work">
      <div className="section-header">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Figma Work
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Live Prototypes &amp;<br /><em>Design Files</em>
        </motion.h2>
      </div>
    </section>
  );
};

export default FigmaWork;