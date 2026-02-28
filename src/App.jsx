import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import FigmaWork from './components/FigmaWork';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import './styles/styles.css';

function App() {
  return (
    <div className="app-container">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <BackgroundEffects />
      <CustomCursor />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Projects />
        {/* <FigmaWork /> */}
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
