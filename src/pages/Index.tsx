import { Link } from "react-router-dom";
import { ArrowRight, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroBackground } from "@/components/home/HeroBackground";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { FeaturesShowcase } from "@/components/home/FeaturesShowcase";
import { AnimatedCursor } from "@/components/ui/AnimatedCursor";
import { ScrollReveal, Magnetic, Float3D, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimations";
import { UiverseCard } from "@/components/ui/UiverseCard";

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

export default function Index() {
  return (
    <Layout>
      <AnimatedCursor />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4" />
              Transforming Ideas into Digital Reality
            </motion.div>
            
            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We Build Digital
              <br />
              <motion.span 
                className="gradient-text text-glow inline-block"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(217 91% 60% / 0.5)",
                    "0 0 40px hsl(217 91% 60% / 0.8)",
                    "0 0 20px hsl(217 91% 60% / 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Experiences
              </motion.span> That Matter
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From stunning websites to powerful web applications, we deliver end-to-end digital solutions that help your business grow and succeed.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Magnetic>
                <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all">
                  <Link to="/contact" data-cursor="Start">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all">
                  <Link to="/portfolio" data-cursor="Explore">View Our Work</Link>
                </Button>
              </Magnetic>
            </motion.div>
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

      {/* Services Section with Uiverse Cards */}
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
                <p className="text-xl text-muted-foreground">
                  A glimpse of our recent work and success stories.
                </p>
              </div>
              <Magnetic>
                <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                  <Link to="/portfolio" data-cursor="View All">
                    View All Projects
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {portfolioItems.map((item, index) => (
              <StaggerItem key={index}>
                <Float3D intensity={0.5} rotationIntensity={8}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Visit"
                  >
                    <UiverseCard className="aspect-[4/3] overflow-hidden">
                      <div className="relative h-full group">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <motion.div 
                            className="text-sm text-primary mb-1 font-medium"
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {item.category}
                          </motion.div>
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Preview Section */}
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
              <motion.h2 
                className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Next Project?
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground mb-10"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Let's discuss how we can help transform your ideas into reality. Get in touch with our team today.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Magnetic>
                  <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all">
                    <Link to="/contact" data-cursor="Contact">
                      Get a Free Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button asChild size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6">
                    <Link to="/portfolio" data-cursor="Explore">See Our Work</Link>
                  </Button>
                </Magnetic>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
