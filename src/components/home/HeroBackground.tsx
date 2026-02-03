import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function HeroBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

    const particleCount = 60;
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
      {/* Multi-layer animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Primary gradient layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(217 91% 60% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(224 76% 48% / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, hsl(189 94% 43% / 0.1) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Mouse-following gradient spotlight */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, hsl(217 91% 60% / 0.2) 0%, transparent 60%)`,
        }}
      />
      
      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 100% 80% at 0% 0%, hsl(217 91% 60% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 100% 80% at 100% 100%, hsl(217 91% 60% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 100% 80% at 0% 100%, hsl(217 91% 60% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 100% 80% at 100% 0%, hsl(217 91% 60% / 0.08) 0%, transparent 50%)",
            "radial-gradient(ellipse 100% 80% at 0% 0%, hsl(217 91% 60% / 0.08) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Grid pattern with animated lines */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 grid-pattern-animated" />
      
      {/* Animated orbs with enhanced effects */}
      <motion.div 
        className="absolute w-[700px] h-[700px] rounded-full -top-[200px] -right-[200px]"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.25) 0%, hsl(217 91% 60% / 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full -bottom-[150px] -left-[150px]"
        style={{
          background: "radial-gradient(circle, hsl(189 94% 43% / 0.2) 0%, hsl(189 94% 43% / 0.05) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, hsl(224 76% 48% / 0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{ 
          scale: [1, 1.4, 1],
          x: ["-50%", "-30%", "-70%", "-50%"],
          y: ["-50%", "-70%", "-30%", "-50%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Pulsing energy rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary/20"
            style={{
              width: 150 + i * 120,
              height: 150 + i * 120,
              left: -(75 + i * 60),
              top: -(75 + i * 60),
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.25, 0.1],
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            }}
            transition={{
              duration: 12 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Shooting stars / meteors */}
      <div className="shooting-stars">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="shooting-star"
            style={{
              left: `${5 + i * 12}%`,
              top: `${5 + (i % 4) * 8}%`,
            }}
            animate={{
              x: [0, 250],
              y: [0, 120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.2 + Math.random() * 0.5,
              repeat: Infinity,
              repeatDelay: 2 + i * 1.5,
              delay: i * 1.2,
            }}
          />
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] left-[8%] w-24 h-24 border-2 border-primary/15 opacity-40"
          style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute top-[55%] right-[12%] w-20 h-20 border-2 border-cyan-400/15"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: [360, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-[35%] right-[28%] w-14 h-14 border-2 border-primary/10 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-[25%] left-[18%] w-28 h-28 rounded-full border-2 border-primary/10"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-[22%] right-[38%] w-10 h-10 bg-primary/8 rotate-45"
          animate={{
            y: [0, -25, 0],
            opacity: [0.4, 0.7, 0.4],
            rotate: [45, 135, 45],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-[40%] right-[8%] w-6 h-6 bg-cyan-400/10 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Glowing lines / light beams */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[2px] w-[400px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          style={{ top: "25%", left: "-400px" }}
          animate={{ x: [0, 2000] }}
          transition={{ duration: 6, repeat: Infinity, repeatDelay: 4 }}
        />
        <motion.div
          className="absolute h-[1px] w-[250px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          style={{ top: "55%", left: "-250px" }}
          animate={{ x: [0, 2000] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 6, delay: 2 }}
        />
        <motion.div
          className="absolute h-[1px] w-[500px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          style={{ top: "75%", left: "-500px" }}
          animate={{ x: [0, 2000] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 3, delay: 4 }}
        />
        <motion.div
          className="absolute w-[2px] h-[300px] bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          style={{ left: "20%", top: "-300px" }}
          animate={{ y: [0, 1500] }}
          transition={{ duration: 10, repeat: Infinity, repeatDelay: 5, delay: 1 }}
        />
        <motion.div
          className="absolute w-[1px] h-[200px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent"
          style={{ left: "70%", top: "-200px" }}
          animate={{ y: [0, 1500] }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 7, delay: 3 }}
        />
      </div>
      
      {/* Center glow with breathing effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.08) 0%, hsl(217 91% 60% / 0.02) 40%, transparent 70%)",
        }}
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Secondary center glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, hsl(189 94% 43% / 0.06) 0%, transparent 70%)" }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Particles container */}
      <div ref={particlesRef} className="particles" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.015]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(222_47%_6%/0.3)_60%,hsl(222_47%_6%/0.7)_100%)]" />
      
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
    </div>
  );
}
