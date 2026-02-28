import { useEffect, useRef, useState } from 'react';
import FigmaMockup from './FigmaMockup';


const CaseStudyImage = ({ image, images, video, imageAlt, placeholderIcon, placeholderLabel, variant }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Build a unified media list: images first, then video (if any)
  const mediaItems = [
    ...(images && images.length > 0
      ? images.map(src => ({ type: 'image', src }))
      : image ? [{ type: 'image', src: image }] : []),
    ...(video ? [{ type: 'video', src: video }] : []),
  ];

  const hasGallery = mediaItems.length > 1;
  const activeItem = mediaItems[Math.min(activeIdx, mediaItems.length - 1)];

  if (mediaItems.length > 0) {
    return (
      <div className="case-study-image">
        {activeItem.type === 'video' ? (
          <video
            src={activeItem.src}
            controls
            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
            aria-label={imageAlt}
          />
        ) : (
          <img src={activeItem.src} alt={`${imageAlt}${hasGallery ? ` — screen ${activeIdx + 1} of ${mediaItems.length}` : ''}`} />
        )}
        {hasGallery && (
          <div className="cs-thumbs" role="group" aria-label="Media gallery">
            {mediaItems.map((item, i) => (
              <button
                key={i}
                className={`cs-thumb${i === activeIdx ? ' active' : ''}`}
                onClick={() => setActiveIdx(i)}
                aria-label={item.type === 'video' ? 'View video' : `View screenshot ${i + 1} of ${mediaItems.length}`}
                aria-pressed={i === activeIdx}
              >
                {item.type === 'video' ? (
                  <span className="cs-thumb-video-icon" aria-hidden="true">▶</span>
                ) : (
                  <img src={item.src} alt="" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (placeholderIcon) {
    return (
      <div className="case-study-image">
        <div className="img-placeholder">
          <span style={{ fontSize: '3rem', opacity: 0.5 }}>{placeholderIcon}</span>
          <p>{placeholderLabel}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="case-study-image">
      <div className="img-placeholder">
        <FigmaMockup variant={variant} />
      </div>
    </div>
  );
};

const CaseStudy = ({ study, index }) => {
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

  const variant = index === 1 ? 'web' : 'default';

  const imageSlot = (
    <CaseStudyImage
      image={study.image}
      images={study.images}
      video={study.video}
      imageAlt={study.imageAlt}
      placeholderIcon={study.placeholderIcon}
      placeholderLabel={study.placeholderLabel}
      variant={variant}
    />
  );

  return (
    <article
      className="case-study"
      ref={ref}
      style={{ transitionDelay: `${index * 0.15}s` }}
      aria-label={`Case study: ${study.title}`}
    >
      {!study.reverseLayout && imageSlot}

      <div className="case-study-info">
        <span className="cs-number" aria-hidden="true">{study.number}</span>

        <div className="cs-tags" aria-label="Project tags">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className={`cs-tag${tag === study.highlightTag ? ' highlight' : ''}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="cs-title">{study.title}</h3>
        <p className="cs-role">{study.role}</p>
        <p className="cs-desc">{study.description}</p>

        <div className="cs-deliverables">
          <h4>Deliverables</h4>
          <ul>
            {study.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {study.link && (
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${study.linkLabel} (opens in new tab)`}
            className="cs-link"
          >
            {study.linkLabel}
          </a>
        )}
      </div>

      {study.reverseLayout && imageSlot}
    </article>
  );
};

export default CaseStudy;
