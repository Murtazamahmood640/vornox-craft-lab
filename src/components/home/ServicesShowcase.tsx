import { Link } from "react-router-dom";
import { Globe, AppWindow, Megaphone, Search, PenTool, Palette, Monitor, CloudCog, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { UiverseCard, NeonCard, GlassCard, HolographicCard } from "@/components/ui/UiverseCard";
import { StaggerContainer, StaggerItem, ScrollReveal, Float3D } from "@/components/ui/ScrollAnimations";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    href: "/services/websites",
    cardType: "uiverse",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    description: "Powerful web apps tailored to your business processes.",
    href: "/services/web-applications",
    cardType: "neon",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that grow your online presence.",
    href: "/services/digital-marketing",
    cardType: "glass",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boost your rankings and drive organic traffic.",
    href: "/services/seo",
    cardType: "holographic",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Compelling content that engages and converts.",
    href: "/services/content-writing",
    cardType: "uiverse",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals that strengthen your brand identity.",
    href: "/services/graphic-design",
    cardType: "neon",
  },
  {
    icon: Monitor,
    title: "IT Consulting",
    description: "Strategic guidance for your technology decisions.",
    href: "/services/it-consulting",
    cardType: "glass",
  },
  {
    icon: CloudCog,
    title: "SaaS Development",
    description: "Scalable software solutions for recurring revenue.",
    href: "/services/saas",
    cardType: "holographic",
  },
];

const CardWrapper = ({ cardType, children }: { cardType: string; children: React.ReactNode }) => {
  switch (cardType) {
    case "uiverse":
      return <UiverseCard className="h-full">{children}</UiverseCard>;
    case "neon":
      return <NeonCard className="h-full">{children}</NeonCard>;
    case "glass":
      return <GlassCard className="h-full">{children}</GlassCard>;
    case "holographic":
      return <HolographicCard className="h-full">{children}</HolographicCard>;
    default:
      return <UiverseCard className="h-full">{children}</UiverseCard>;
  }
};

export function ServicesShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-4 h-4" />
              What We Offer
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions to elevate your business to the next level.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Float3D intensity={0.3} rotationIntensity={5}>
                <Link to={service.href} className="block h-full">
                  <CardWrapper cardType={service.cardType}>
                    <div className="p-6 h-full flex flex-col">
                      <motion.div 
                        className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="w-7 h-7 text-primary-foreground" />
                      </motion.div>
                      
                      <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {service.description}
                      </p>
                      
                      <motion.div 
                        className="flex items-center gap-2 mt-4 text-primary text-sm font-medium"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </CardWrapper>
                </Link>
              </Float3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
