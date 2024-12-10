import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const GradientBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const interactiveRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const moveInteractive = () => {
      if (!interactiveRef.current) return;
      const rect = interactiveRef.current.getBoundingClientRect();
      const newX = (mousePosition.x - rect.left) / 4; // Increased responsiveness
      const newY = (mousePosition.y - rect.top) / 4;

      interactiveRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      requestAnimationFrame(moveInteractive);
    };

    moveInteractive();
  }, [mousePosition]);

  const circleVariantsFast = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 4, // Faster rotation
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const verticalVariantsFast = {
    animate: {
      y: ["-60%", "60%", "-60%"],
      transition: {
        duration: 6, // Faster vertical movement
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const horizontalVariantsFast = {
    animate: {
      x: ["-50%", "50%", "-50%"],
      y: ["-20%", "20%", "-20%"],
      transition: {
        duration: 5, // Faster combined movement
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-gradient-to-r from-[#ddeafe] via-[#fef2d9] to-[#fdecef]">
      <svg className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="absolute w-full h-full blur-[40px] filter-[url(#goo)]">
        {/* Radial gradient bubbles */}
        <motion.div
          className="absolute w-[90%] h-[90%] top-1/2 left-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(254,231,198,0.9)_0%,rgba(254,231,198,0)_70%)]"
          variants={verticalVariantsFast}
          animate="animate"
          style={{ mixBlendMode: "overlay" }}
        ></motion.div>
        <motion.div
          className="absolute w-[85%] h-[85%] top-1/2 left-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(213,190,250,0.9)_0%,rgba(213,190,250,0)_70%)]"
          variants={circleVariantsFast}
          animate="animate"
          style={{ mixBlendMode: "overlay" }}
        ></motion.div>
        <motion.div
          className="absolute w-[80%] h-[80%] top-1/2 left-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(184,220,255,0.9)_0%,rgba(184,220,255,0)_70%)]"
          variants={horizontalVariantsFast}
          animate="animate"
          style={{ mixBlendMode: "overlay" }}
        ></motion.div>
        <motion.div
          className="absolute w-[75%] h-[75%] top-1/2 left-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(241,220,255,0.9)_0%,rgba(241,220,255,0)_70%)]"
          variants={circleVariantsFast}
          animate="animate"
          style={{ mixBlendMode: "overlay" }}
        ></motion.div>
        <motion.div
          className="absolute w-[70%] h-[70%] top-1/2 left-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(215,215,255,0.9)_0%,rgba(215,215,255,0)_70%)]"
          variants={circleVariantsFast}
          animate="animate"
          style={{ mixBlendMode: "overlay" }}
        ></motion.div>
        {/* Mouse-following bubble */}
        <div
          ref={interactiveRef}
          className="absolute w-[60%] h-[60%] top-1/2 left-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_70%)]"
          style={{
            mixBlendMode: "normal",
            opacity: 1,
          }}
        ></div>
      </div>
    </div>
  );
};

export default GradientBackground;
