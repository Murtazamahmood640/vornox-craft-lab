import { Link } from "react-router-dom";
import { ArrowRight, Zap, CheckCircle, Globe, Megaphone, Search, PenTool, Palette, Monitor, CloudCog, Users, AppWindow } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroBackground } from "@/components/home/HeroBackground";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { FeaturesShowcase } from "@/components/home/FeaturesShowcase";
import { ScrollReveal, StaggerContainer, StaggerItem, Float3D } from "@/components/ui/ScrollAnimations";
import { UiverseCard } from "@/components/ui/UiverseCard";
import { useState, useEffect } from "react";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const portfolioItems = [
  { title: "TintsShine", category: "Corporate", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", url: "https://tintsshine.com/" },
  { title: "RA Global LLP", category: "Business", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop", url: "https://ragloballlp.com/" },
  { title: "Matrix Code Core", category: "Tech", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop", url: "https://matrixcodecore.com/" },
  { title: "Singular Villas Ibiza", category: "Real Estate", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop", url: "https://www.singularvillasibiza.com/" },
];

const rotatingWords = ["Websites", "Applications", "Marketing", "Solutions", "Brands"];

const heroServices = [
  { icon: Globe, label: "Websites" },
  { icon: AppWindow, label: "Web Apps" },
  { icon: Megaphone, label: "Marketing" },
  { icon: Search, label: "SEO" },
  { icon: Palette, label: "Design" },
  { icon: CloudCog, label: "SaaS" },
];

export default function Index() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Agency Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Zap className="w-4 h-4" />
                #1 Digital Agency in Pakistan
              </motion.div>

              <motion.h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We Create
                <br />
                Digital{" "}
                <span className="relative inline-block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIndex}
                      className="gradient-text inline-block"
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                From stunning websites to powerful applications, we deliver end-to-end digital solutions that help your business grow.
              </motion.p>

              {/* Key Points */}
              <motion.div
                className="flex flex-col gap-3 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {["Custom Web Development", "Result-Driven Marketing", "24/7 Expert Support"].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </div>

            {/* Right: Animated Floating Icons */}
            <div className="hidden lg:block relative h-[500px]">
              {/* Central glowing orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Orbiting icons */}
              {heroServices.map((service, i) => {
                const angle = (i / heroServices.length) * 360;
                const radius = 180;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const floatDelay = i * 0.8;
                const floatDuration = 5 + i * 0.5;

                return (
                  <motion.div
                    key={service.label}
                    className="absolute top-1/2 left-1/2"
                    style={{ x: x - 32, y: y - 32 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-card/80 border border-border/60 backdrop-blur-md flex items-center justify-center shadow-lg hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-default group"
                      animate={{
                        y: [0, -12, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: floatDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: floatDelay,
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <motion.span
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                    >
                      {service.label}
                    </motion.span>
                  </motion.div>
                );
              })}

              {/* Connecting lines / orbit ring */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-primary/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-primary/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating particles around icons */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary/30"
                  style={{
                    x: Math.cos((i * 45 * Math.PI) / 180) * (120 + Math.random() * 80) - 4,
                    y: Math.sin((i * 45 * Math.PI) / 180) * (120 + Math.random() * 80) - 4,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-primary"
              animate={{ opacity: [1, 0.5, 1], y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center group cursor-default">
                  <motion.div
                    className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Section */}
      <ServicesShowcase />

      {/* Features Section */}
      <FeaturesShowcase />

      {/* Portfolio Preview */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Palette className="w-4 h-4" />
                  Our Work
                </motion.div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-xl text-muted-foreground">A glimpse of our recent work and success stories.</p>
              </div>
              <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                <Link to="/portfolio">
                  View All Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {portfolioItems.map((item, index) => (
              <StaggerItem key={index}>
                <Float3D intensity={0.5} rotationIntensity={8}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <UiverseCard className="aspect-[4/3] overflow-hidden">
                      <div className="relative h-full group">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="text-sm text-primary mb-1 font-medium">{item.category}</div>
                          <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                        </div>
                      </div>
                    </UiverseCard>
                  </a>
                </Float3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Preview */}
      <BlogPreview />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-dark-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Ready to Start Your Next Project?</h2>
              <p className="text-xl text-muted-foreground mb-10">Let's discuss how we can help transform your ideas into reality.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all">
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6">
                  <Link to="/portfolio">See Our Work</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
