// components/ui/SpotlightCard.js
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from 'react';

export const SpotlightCard = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightStyle = {
    background: useMotionTemplate`
      radial-gradient(
        350px circle at ${mouseX}px ${mouseY}px,
        rgba(82, 34, 228, 0.15),
        transparent 80%
      )
    `,
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className="group relative bg-background rounded-3xl border border-white/10 w-full h-full overflow-hidden"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={spotlightStyle}
      />
      {children}
    </motion.div>
  );
};