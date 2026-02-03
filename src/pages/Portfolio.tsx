import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem, Float3D, Magnetic } from "@/components/ui/ScrollAnimations";
import { UiverseCard } from "@/components/ui/UiverseCard";

const categories = ["All", "Corporate", "Real Estate", "E-Commerce", "SaaS", "Portfolio", "Other"];

const projects = [
  {
    title: "Resort Website",
    category: "E-Commerce",
    description: "Luxury resort booking platform with elegant design and seamless reservation system.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    url: "https://resort.tintsshine.com/",
  },
  {
    title: "Real Estate Platform",
    category: "Real Estate",
    description: "Modern property listing and management solution for real estate professionals.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    url: "https://realstate.tintsshine.com/",
  },
  {
    title: "Insurance Portal",
    category: "Corporate",
    description: "Comprehensive insurance services platform with quote calculator and policy management.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    url: "https://insurance.tintsshine.com/",
  },
  {
    title: "Beauty Salon",
    category: "E-Commerce",
    description: "Elegant beauty salon website with online booking and product showcase.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
    url: "https://beauty.tintsshine.com/",
  },
  {
    title: "School Management",
    category: "SaaS",
    description: "Educational institution website with enrollment and information portal.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    url: "https://school.tintsshine.com/",
  },
  {
    title: "Restaurant",
    category: "E-Commerce",
    description: "Restaurant website with online ordering and reservation system.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    url: "https://restaurant.tintsshine.com/",
  },
  {
    title: "TintsShine",
    category: "Corporate",
    description: "Multi-service corporate website showcasing various business solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    url: "https://tintsshine.com/",
  },
  {
    title: "RA Global LLP",
    category: "Corporate",
    description: "Professional business consultancy firm's corporate website.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    url: "https://ragloballlp.com/",
  },
  {
    title: "Singular Villas Ibiza",
    category: "Real Estate",
    description: "Luxury villa rentals in Ibiza with stunning property showcases.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    url: "https://www.singularvillasibiza.com/",
  },
  {
    title: "Busters Butcher",
    category: "E-Commerce",
    description: "Premium butcher shop with online ordering and delivery.",
    image: "https://images.unsplash.com/photo-1588347818036-558601350947?w=600&h=400&fit=crop",
    url: "https://bustersbutcher.com/",
  },
  {
    title: "Matrix Code Core",
    category: "Corporate",
    description: "Technology company website with modern tech-forward design.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    url: "https://matrixcodecore.com/",
  },
  {
    title: "High Road Lubricants",
    category: "Corporate",
    description: "Industrial lubricants company with product catalog.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    url: "https://highroadlubricants.com/",
  },
  {
    title: "Abidi Solutions",
    category: "Corporate",
    description: "IT solutions provider with comprehensive service offerings.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    url: "https://abidisolutions.com/",
  },
  {
    title: "Beauty Hub",
    category: "Portfolio",
    description: "Beauty services portfolio with elegant presentation.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
    url: "https://simplon-s-beauty-hub.vercel.app/",
  },
  {
    title: "Auction House Online",
    category: "E-Commerce",
    description: "Online auction platform with real-time bidding.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    url: "https://auction-house-online.vercel.app/",
  },
  {
    title: "Auto Navigator",
    category: "E-Commerce",
    description: "Automotive marketplace with advanced search and filters.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
    url: "https://auto-navigator.vercel.app/",
  },
  {
    title: "Artful Strokes",
    category: "Portfolio",
    description: "Art gallery and portfolio showcase with elegant design.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop",
    url: "https://artful-strokes.vercel.app/",
  },
  {
    title: "Bag Showcase",
    category: "E-Commerce",
    description: "Premium bag collection e-commerce platform.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop",
    url: "https://bag-showcase-henna.vercel.app/",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="font-display text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="gradient-text text-glow">Portfolio</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Explore our collection of successful projects across various industries and technologies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "gradient-bg text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                data-cursor="Filter"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {filteredProjects.map((project, index) => (
              <StaggerItem key={index}>
                <Float3D intensity={0.4}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="Visit"
                  >
                    <UiverseCard className="overflow-hidden">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"
                          whileHover={{ opacity: 80 }}
                        />
                        <motion.div 
                          className="absolute inset-0 flex items-end justify-end p-4 opacity-0"
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
                            <ExternalLink className="w-5 h-5 text-primary-foreground" />
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                        <h3 className="font-display text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                      </div>
                    </UiverseCard>
                  </a>
                </Float3D>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Like What You See?
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                Let's create something amazing together. Your project could be next in our portfolio.
              </p>
              <Magnetic>
                <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all">
                  <Link to="/contact" data-cursor="Start">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
