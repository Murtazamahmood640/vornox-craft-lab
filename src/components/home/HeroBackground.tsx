import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(230,25%,8%)] via-[hsl(220,40%,12%)] to-[hsl(260,30%,10%)]" />

      {/* Animated flowing gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            hsl(217 91% 60% / 0.25) 0%, 
            hsl(260 70% 50% / 0.15) 25%,
            hsl(280 60% 45% / 0.12) 50%,
            hsl(200 80% 50% / 0.18) 75%,
            hsl(217 91% 60% / 0.2) 100%)`,
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radial gradient layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(217 91% 60% / 0.2) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, hsl(260 76% 55% / 0.18) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, hsl(189 94% 43% / 0.15) 0%, transparent 50%)`,
        }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-[150px] -left-[150px] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(189 94% 43% / 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 grid-pattern-animated" />

      {/* Light beams */}
      <motion.div
        className="absolute h-[2px] w-[400px] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        style={{ top: "25%", left: "-400px" }}
        animate={{ x: [0, 2000] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 4 }}
      />
      <motion.div
        className="absolute h-[1px] w-[250px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ top: "65%", left: "-250px" }}
        animate={{ x: [0, 2000] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 6, delay: 2 }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Noise & vignette */}
      <div className="absolute inset-0 noise-overlay opacity-[0.015]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(222_47%_6%/0.3)_60%,hsl(222_47%_6%/0.7)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/95" />
    </div>
  );
}
