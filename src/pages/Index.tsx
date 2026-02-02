import { Link } from "react-router-dom";
import { ArrowRight, Globe, AppWindow, Megaphone, Search, PenTool, Palette, Monitor, CloudCog, CheckCircle2, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { HeroBackground } from "@/components/home/HeroBackground";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "Beautiful, responsive websites that convert visitors into customers.",
    href: "/services/websites",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    description: "Powerful web apps tailored to your business processes.",
    href: "/services/web-applications",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven campaigns that grow your online presence.",
    href: "/services/digital-marketing",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boost your rankings and drive organic traffic.",
    href: "/services/seo",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Compelling content that engages and converts.",
    href: "/services/content-writing",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals that strengthen your brand identity.",
    href: "/services/graphic-design",
  },
  {
    icon: Monitor,
    title: "IT Consulting",
    description: "Strategic guidance for your technology decisions.",
    href: "/services/it-consulting",
  },
  {
    icon: CloudCog,
    title: "SaaS Development",
    description: "Scalable software solutions for recurring revenue.",
    href: "/services/saas",
  },
];

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

const features = [
  { icon: CheckCircle2, title: "Quality Assured", description: "Every project undergoes rigorous testing" },
  { icon: Users, title: "Dedicated Team", description: "Expert developers, designers & marketers" },
  { icon: Award, title: "Award Winning", description: "Recognized for excellence in digital solutions" },
  { icon: Zap, title: "Fast Delivery", description: "On-time delivery without compromising quality" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <HeroBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm">
              <Zap className="w-4 h-4" />
              Transforming Ideas into Digital Reality
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We Build Digital
              <br />
              <span className="gradient-text text-glow">Experiences</span> That Matter
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From stunning websites to powerful web applications, we deliver end-to-end digital solutions that help your business grow and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg transition-all hover:scale-105">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:text-glow transition-all">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              What We Offer
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital solutions to elevate your business to the next level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-brand-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 gradient-subtle-bg relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Vornox Lab?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                We combine creativity with technology to deliver solutions that drive real business results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl animate-pulse-slow" />
              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-brand-xl">
                <div className="space-y-6">
                  {[
                    { icon: CheckCircle2, title: "Project Kickoff", desc: "Requirements & Planning" },
                    { icon: Palette, title: "Design & Development", desc: "Creative Execution" },
                    { icon: Zap, title: "Launch & Support", desc: "Deployment & Maintenance" },
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center group-hover:shadow-glow transition-all">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{step.title}</div>
                        <div className="text-sm text-muted-foreground">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Our Work
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A glimpse of our recent work and success stories.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-border hover:border-primary/50 transition-all duration-500"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-primary mb-1 font-medium">{item.category}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                </div>
                
                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/50 transition-colors pointer-events-none" />
              </a>
            ))}
          </div>
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss how we can help transform your ideas into reality. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all">
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
        </div>
      </section>
    </Layout>
  );
}
