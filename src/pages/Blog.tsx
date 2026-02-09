import { Link } from "react-router-dom";
import { Calendar, Clock, User, Search, ArrowRight, Share2, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem, Float3D, Magnetic } from "@/components/ui/ScrollAnimations";
import { UiverseCard } from "@/components/ui/UiverseCard";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends Dominating 2024",
    excerpt: "Explore the cutting-edge design trends that are shaping the future of web development and user experience. From 3D elements to dark mode designs, discover what's trending.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    author: "Alex Morgan",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "How to Boost Your SEO Rankings in 2024",
    excerpt: "Learn the latest SEO strategies and techniques to improve your website's visibility and organic traffic. Updated with the latest Google algorithm changes.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    date: "Jan 12, 2024",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    id: 3,
    title: "The Complete Guide to SaaS Development",
    excerpt: "Everything you need to know about building a successful SaaS product from ideation to launch. Includes architecture patterns and best practices.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    author: "Mike Johnson",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    category: "Development",
  },
  {
    id: 4,
    title: "Digital Marketing Strategies That Actually Work",
    excerpt: "Discover proven digital marketing strategies that deliver real results. From content marketing to paid advertising, we cover it all.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    author: "Emma Wilson",
    date: "Jan 8, 2024",
    readTime: "8 min read",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Building Scalable Web Applications with React",
    excerpt: "A deep dive into building enterprise-grade React applications. Learn about state management, performance optimization, and testing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    author: "David Park",
    date: "Jan 5, 2024",
    readTime: "12 min read",
    category: "Development",
  },
  {
    id: 6,
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how color influences brand perception and customer behavior. A comprehensive guide to choosing the right colors for your brand.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    author: "Lisa Thompson",
    date: "Jan 3, 2024",
    readTime: "6 min read",
    category: "Design",
  },
];

const categories = ["All", "Design", "Development", "SEO", "Marketing"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleShare = (platform: string, post: typeof blogPosts[0]) => {
    const url = window.location.href;
    const text = `Check out: ${post.title}`;
    
    switch (platform) {
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, "_blank");
        break;
      case "phone":
        window.open("tel:03228258640");
        break;
      case "email":
        window.open(`mailto:info@vornoxlab.com?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(text + "\n\n" + url)}`);
        break;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <motion.div 
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="font-display text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="gradient-text text-glow">Blog</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Insights, tutorials, and industry trends from our team of experts. Stay ahead with the latest in technology and design.
            </motion.p>
            
            {/* Search */}
            <motion.div 
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 h-14 bg-card border-border text-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "gradient-bg shadow-glow" : "border-primary/50 hover:bg-primary/10"}
                  data-cursor="Filter"
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {filteredPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Float3D intensity={0.4}>
                  <Link to={`/blog/${post.id}`} className="block">
                    <UiverseCard className="overflow-hidden">
                      {/* Image */}
                      <div className="relative overflow-hidden aspect-[16/10]">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium shadow-glow">
                            {post.category}
                          </span>
                        </div>
                        {/* Share Button */}
                        <div className="absolute top-4 right-4" onClick={(e) => e.preventDefault()}>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                size="icon"
                                variant="secondary"
                                className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                              >
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-popover border border-border">
                              <DropdownMenuItem onClick={() => handleShare("whatsapp", post)} className="cursor-pointer">
                                <MessageCircle className="w-4 h-4 mr-2 text-green-500" />
                                Share on WhatsApp
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare("phone", post)} className="cursor-pointer">
                                <Phone className="w-4 h-4 mr-2 text-primary" />
                                Call Us: 03228258640
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShare("email", post)} className="cursor-pointer">
                                <Mail className="w-4 h-4 mr-2 text-primary" />
                                Email: info@vornoxlab.com
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        {/* Author */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <span className="text-primary flex items-center gap-1 text-sm font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </UiverseCard>
                  </Link>
                </Float3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Load More */}
          <ScrollReveal>
            <div className="text-center mt-12">
              <Magnetic>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover:shadow-glow transition-all" data-cursor="Load">
                  Load More Articles
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
