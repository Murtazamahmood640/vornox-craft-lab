import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Lightbulb, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve complex problems.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're genuinely passionate about what we do and it shows in every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients, treating their success as our own.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We never settle for mediocrity and strive for excellence in everything.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Sarah Johnson", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Mike Davis", role: "Lead Developer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face" },
  { name: "Emily Brown", role: "Marketing Head", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="w-4 h-4" />
              About Vornox Lab
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              We're a Team of <span className="gradient-text">Digital Innovators</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Founded with a mission to help businesses thrive in the digital age, Vornox Lab brings together creativity, technology, and strategy to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Vornox Lab started with a simple idea: every business deserves access to world-class digital solutions. What began as a small team of passionate developers has grown into a full-service digital agency.
                </p>
                <p>
                  Over the years, we've partnered with startups, SMEs, and enterprises across various industries, helping them navigate the digital landscape and achieve their goals.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and methodologies to deliver innovative solutions that make a real difference.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Our team working together"
                className="relative rounded-3xl shadow-brand-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 gradient-subtle-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-3xl border border-border shadow-brand-lg">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="bg-card p-10 rounded-3xl border border-border shadow-brand-lg">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To be the most trusted digital partner for businesses worldwide, known for our creativity, technical excellence, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do at Vornox Lab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 gradient-subtle-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The talented individuals behind Vornox Lab's success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 gradient-bg rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-2xl object-cover mx-auto shadow-brand-lg"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
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
              Want to Work With Us?
            </h2>
            <p className="text-xl text-purple-200/80 mb-10">
              We're always looking for new challenges and exciting projects. Let's create something amazing together.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
