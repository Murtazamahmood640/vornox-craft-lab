import { ReactNode, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface UiverseCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function UiverseCard({ children, className = "", glowColor = "217 91% 60%" }: UiverseCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const background = useMotionTemplate`
    radial-gradient(
      300px circle at ${mouseX}px ${mouseY}px,
      hsl(${glowColor} / 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
      data-cursor="View"
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      
      {/* Border gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-transparent to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
        <div className="w-full h-full rounded-2xl bg-card" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 overflow-hidden"
        initial={false}
      >
        <motion.div
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
          style={{
            background: "conic-gradient(from 0deg, transparent, hsl(217 91% 60% / 0.1), transparent 60%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.div>
  );
}

// Glassmorphism variant
export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(0, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    
    rotateX.set(((e.clientY - rect.top - centerY) / centerY) * -8);
    rotateY.set(((e.clientX - rect.left - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const maskImage = useMotionTemplate`
    radial-gradient(
      200px circle at ${x}px ${y}px,
      white,
      transparent
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 ${className}`}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />
      
      {children}
    </motion.div>
  );
}

// Neon border card
export function NeonCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Animated neon border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-cyan-400 to-primary opacity-0 group-hover:opacity-75 transition-opacity duration-500 animate-gradient" />
      
      {/* Content */}
      <div className="relative bg-card rounded-2xl border border-border group-hover:border-transparent transition-colors">
        {children}
      </div>
    </motion.div>
  );
}

// Holographic card
export function HolographicCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
  const brightness = useSpring(1, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    rotateX.set(((y - centerY) / centerY) * -15);
    rotateY.set(((x - centerX) / centerX) * 15);
    brightness.set(1.2);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    brightness.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        filter: useMotionTemplate`brightness(${brightness})`,
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Holographic effect */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          background: "linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          backgroundSize: "400% 400%",
          animation: "gradient 3s ease infinite",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 bg-card/80 backdrop-blur-sm h-full">
        {children}
      </div>
    </motion.div>
  );
}
