import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,47%,4%)] via-[hsl(220,40%,8%)] to-[hsl(222,47%,6%)]" />

      {/* Large gradient orbs */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(189 94% 43% / 0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
}
