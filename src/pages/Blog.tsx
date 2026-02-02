import { Link } from "react-router-dom";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-subtle-bg" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Insights, tutorials, and industry trends from our team of experts. Stay ahead with the latest in technology and design.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 h-14 bg-card border-border text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "gradient-bg" : "border-primary/50 hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-brand-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                      {post.category}
                    </span>
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
                    <span className="text-primary flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Load More Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
