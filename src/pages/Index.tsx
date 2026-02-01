import { Link } from "react-router-dom";
import { ArrowRight, Globe, AppWindow, Megaphone, Search, PenTool, Palette, Monitor, CloudCog, CheckCircle2, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

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
        {/* Background */}
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4" />
              Transforming Ideas into Digital Reality
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We Build Digital
              <br />
              <span className="gradient-text">Experiences</span> That Matter
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From stunning websites to powerful web applications, we deliver end-to-end digital solutions that help your business grow and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg" className="gradient-bg text-primary-foreground text-lg px-8 py-6 shadow-brand-lg hover:opacity-90 transition-opacity">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
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
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-brand-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 gradient-subtle-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">Vornox Lab?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10">
                We combine creativity with technology to deliver solutions that drive real business results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl" />
              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-brand-xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Project Kickoff</div>
                      <div className="text-sm text-muted-foreground">Requirements & Planning</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                      <Palette className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Design & Development</div>
                      <div className="text-sm text-muted-foreground">Creative Execution</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Launch & Support</div>
                      <div className="text-sm text-muted-foreground">Deployment & Maintenance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A glimpse of our recent work and success stories.
              </p>
            </div>
            <Button asChild variant="outline" size="lg">
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
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-purple-300 mb-1">{item.category}</div>
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-purple-200/80 mb-10">
              Let's discuss how we can help transform your ideas into reality. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
