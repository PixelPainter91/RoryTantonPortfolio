import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { damping: 20, stiffness: 120 });
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 120 });

  // Only show on fine pointer (mouse) devices
  const isFinePointer =
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!isFinePointer) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY, isFinePointer]);

  useEffect(() => {
    if (!isFinePointer) return;

    const interactives = document.querySelectorAll('a, button, .process-step, .tl-item, .skill-pill, .case-study');
    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    interactives.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
    return () => {
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <div aria-hidden="true">
      {/* small dot */}
      <motion.div
        className="cursor"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovered ? 2 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* outer ring with spring lag */}
      <motion.div
        className="cursor-ring"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? (hovered ? 0.2 : 0.5) : 0,
        }}
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
