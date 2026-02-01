import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  children?: ReactNode;
}

export function ServicePage({
  icon: Icon,
  title,
  subtitle,
  description,
  features,
  benefits,
  process,
}: ServicePageProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-8">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-2xl text-primary font-medium mb-6">{subtitle}</p>
            <p className="text-xl text-muted-foreground max-w-2xl">{description}</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                What's <span className="gradient-text">Included</span>
              </h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl opacity-10 blur-2xl" />
              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-brand-xl">
                <h3 className="font-display text-2xl font-bold mb-6">Get a Free Quote</h3>
                <p className="text-muted-foreground mb-6">
                  Tell us about your project and we'll provide a detailed proposal within 24 hours.
                </p>
                <Button asChild className="w-full gradient-bg text-primary-foreground">
                  <Link to="/contact">
                    Contact Us Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 gradient-subtle-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">{title}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-brand-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 text-lg font-bold text-primary-foreground">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers results every time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 my-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-200/80 mb-10">
              Let's discuss your {title.toLowerCase()} needs and create something amazing together.
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
