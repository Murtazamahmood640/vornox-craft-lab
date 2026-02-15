import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@vornoxlab.com",
    href: "mailto:info@vornoxlab.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "03228258640",
    href: "tel:03228258640",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: "03228258640",
    href: "https://wa.me/923228258640",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, Innovation Hub, Digital City 10001",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: "#",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error) throw error;
      toast({
        title: "Message Sent!",
        description: data?.message || "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch (err: any) {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="font-display text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in <span className="gradient-text text-glow">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Whether you need a new website, want to revamp your digital presence, or have questions about our services, we're here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all group"
                  >
                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center flex-shrink-0 shadow-glow">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form - No wrapper animations */}
            <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                      className="h-12" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required 
                      className="h-12" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890" 
                      className="h-12" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company" 
                      className="h-12" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="websites">Websites</option>
                    <option value="web-applications">Web Applications</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="seo">SEO</option>
                    <option value="content-writing">Content Writing</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="it-consulting">IT Consulting</option>
                    <option value="saas">SaaS Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gradient-bg text-primary-foreground text-lg py-6 shadow-glow hover:shadow-glow-lg transition-all"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 gradient-subtle-bg relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-glow h-[400px] bg-card border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/50 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
