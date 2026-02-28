// Decorative Figma-style frame shown when no real screenshot is available yet.

const FigmaMockup = ({ variant = 'default' }) => {
  return (
    <div className="figma-frame">
      <div className="figma-frame-bar">
        <div className="figma-dot" style={{ background: '#ff5f57' }} />
        <div className="figma-dot" style={{ background: '#febc2e' }} />
        <div className="figma-dot" style={{ background: '#28c840' }} />
      </div>
      <div className="figma-frame-content">
        {variant === 'default' && (
          <>
            <div className="mock-bar gold" />
            <div className="mock-bar short" />
            <div className="mock-card" />
            <div className="mock-grid">
              <div className="mock-cell" />
              <div className="mock-cell" style={{ background: 'rgba(232,132,90,0.2)' }} />
              <div className="mock-cell" />
              <div className="mock-cell" />
            </div>
            <div className="mock-bar" style={{ width: '80%' }} />
          </>
        )}
        {variant === 'web' && (
          <>
            <div className="mock-bar gold" style={{ width: '50%' }} />
            <div className="mock-card" style={{ height: '80px' }} />
            <div className="mock-bar" />
            <div className="mock-bar short" />
            <div className="mock-bar" style={{ width: '70%' }} />
          </>
        )}
      </div>
    </div>
  );
};

export default FigmaMockup;