import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function HeroBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Create particles
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particle.style.width = `${2 + Math.random() * 4}px`;
      particle.style.height = particle.style.width;
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient with animated mesh */}
      <div className="absolute inset-0 gradient-dark-bg" />
      
      {/* Animated gradient mesh that follows mouse */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(217 91% 60% / 0.3) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Grid pattern with animated lines */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 grid-pattern-animated" />
      
      {/* Animated orbs with enhanced effects */}
      <motion.div 
        className="orb orb-1"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="orb orb-2"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="orb orb-3"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Pulsing energy rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/20"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              left: -(100 + i * 75),
              top: -(100 + i * 75),
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Shooting stars / meteors */}
      <div className="shooting-stars">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="shooting-star"
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + (i % 3) * 10}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5 + Math.random(),
              repeat: Infinity,
              repeatDelay: 3 + i * 2,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hexagon */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-20 h-20 border border-primary/20 opacity-30"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Triangle */}
        <motion.div
          className="absolute top-[60%] right-[15%] w-16 h-16 border border-cyan-400/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: [360, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Square */}
        <motion.div
          className="absolute top-[40%] right-[25%] w-12 h-12 border border-primary/15 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Circle */}
        <motion.div
          className="absolute bottom-[30%] left-[20%] w-24 h-24 rounded-full border border-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Diamond */}
        <motion.div
          className="absolute top-[25%] right-[40%] w-8 h-8 bg-primary/5 rotate-45"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Glowing lines / light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[1px] w-[300px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{ top: "30%", left: "-300px" }}
          animate={{ x: [0, window.innerWidth + 600] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 3 }}
        />
        <motion.div
          className="absolute h-[1px] w-[200px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          style={{ top: "60%", left: "-200px" }}
          animate={{ x: [0, window.innerWidth + 400] }}
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 5, delay: 2 }}
        />
        <motion.div
          className="absolute h-[1px] w-[400px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{ top: "80%", left: "-400px" }}
          animate={{ x: [0, window.innerWidth + 800] }}
          transition={{ duration: 10, repeat: Infinity, repeatDelay: 4, delay: 4 }}
        />
      </div>
      
      {/* Center glow with breathing effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Secondary center glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-2xl"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.1) 0%, transparent 70%)" }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Particles container */}
      <div ref={particlesRef} className="particles" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(222_47%_6%/0.4)_70%,hsl(222_47%_6%/0.8)_100%)]" />
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
}
