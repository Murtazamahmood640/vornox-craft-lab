import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Hook to detect mobile
function useIsMobile() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Fade up on scroll - simple fade on mobile
export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isMobile = useIsMobile();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 20 : 50 }}
      transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3D Parallax container - disabled on mobile
export function Parallax3D({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y: springY,
        rotateX: springRotateX,
        scale: springScale,
        opacity,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating 3D element - disabled on mobile
export function Float3D({ 
  children, 
  className = "", 
  intensity = 1,
  rotationIntensity = 10,
}: { 
  children: ReactNode; 
  className?: string;
  intensity?: number;
  rotationIntensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * intensity, -50 * intensity]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-rotationIntensity, rotationIntensity]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const springY = useSpring(y, { stiffness: 50, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 50, damping: 20 });
  const springRotateZ = useSpring(rotateZ, { stiffness: 50, damping: 20 });

  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y: springY,
        rotateY: springRotateY,
        rotateZ: springRotateZ,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger children animation - simpler on mobile
export function StaggerContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1,
}: { 
  children: ReactNode; 
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isMobile = useIsMobile();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: isMobile ? 0.05 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: isMobile ? 10 : 30, ...(isMobile ? {} : { rotateX: -15 }) },
        visible: { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          transition: { duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }
        },
      }}
      style={isMobile ? {} : { transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Horizontal scroll section - disabled on mobile
export function HorizontalScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  if (isMobile) {
    return (
      <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className={`flex gap-8 ${className}`}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// Text reveal animation - simple fade on mobile
export function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  const words = text.split(" ");

  return (
    <div ref={ref} className={`flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: i * 0.1,
            ease: "easeOut"
          }}
          style={{ transformPerspective: 1000, display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Scale on scroll - disabled on mobile
export function ScaleOnScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);

  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });

  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        scale: springScale,
        opacity,
        rotateX: springRotateX,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Magnetic element - disabled on mobile
export function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isMobile) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (isMobile) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
