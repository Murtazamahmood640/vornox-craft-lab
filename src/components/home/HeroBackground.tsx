import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Theme-aware overlay to blend video with design */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Gradient overlays for depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(217 91% 60% / 0.1) 0%, 
            transparent 50%,
            hsl(200 80% 50% / 0.08) 100%)`,
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.3)_60%,hsl(var(--background)/0.7)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
    </div>
  );
}
