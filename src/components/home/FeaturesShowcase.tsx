import { CheckCircle2, Users, Award, Zap, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, Parallax3D, ScaleOnScroll, Magnetic, TextReveal } from "@/components/ui/ScrollAnimations";
import { GlassCard } from "@/components/ui/UiverseCard";

const features = [
  { icon: CheckCircle2, title: "Quality Assured", description: "Every project undergoes rigorous testing" },
  { icon: Users, title: "Dedicated Team", description: "Expert developers, designers & marketers" },
  { icon: Award, title: "Award Winning", description: "Recognized for excellence in digital solutions" },
  { icon: Zap, title: "Fast Delivery", description: "On-time delivery without compromising quality" },
];

const steps = [
  { icon: CheckCircle2, title: "Project Kickoff", desc: "Requirements & Planning" },
  { icon: Palette, title: "Design & Development", desc: "Creative Execution" },
  { icon: Zap, title: "Launch & Support", desc: "Deployment & Maintenance" },
];

export function FeaturesShowcase() {
  return (
    <section className="py-24 gradient-subtle-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating 3D shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-2xl"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border border-primary/20 rounded-full"
        animate={{ 
          rotateZ: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-4 h-4" />
                Why Choose Us
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                <TextReveal text="Why Choose Vornox Lab?" className="text-4xl md:text-5xl font-bold" />
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10">
                We combine creativity with technology to deliver solutions that drive real business results.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                  <Magnetic>
                    <motion.div 
                      className="flex gap-4 group cursor-pointer"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                      >
                        <feature.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  </Magnetic>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="relative">
            <ScaleOnScroll>
              <Parallax3D>
                <div className="relative">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <GlassCard className="p-8">
                    <div className="space-y-6">
                      {steps.map((step, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ x: 10, scale: 1.02 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <step.icon className="w-6 h-6 text-primary-foreground" />
                          </motion.div>
                          <div>
                            <div className="font-semibold text-foreground">{step.title}</div>
                            <div className="text-sm text-muted-foreground">{step.desc}</div>
                          </div>
                          
                          {/* Connection line */}
                          {index < steps.length - 1 && (
                            <motion.div 
                              className="absolute left-[3.5rem] top-full w-0.5 h-6 bg-gradient-to-b from-primary/50 to-transparent"
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.3 }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </Parallax3D>
            </ScaleOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
