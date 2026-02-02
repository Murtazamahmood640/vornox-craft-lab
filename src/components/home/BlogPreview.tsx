import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends Dominating 2024",
    excerpt: "Explore the cutting-edge design trends that are shaping the future of web development and user experience.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    author: "Alex Morgan",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "How to Boost Your SEO Rankings in 2024",
    excerpt: "Learn the latest SEO strategies and techniques to improve your website's visibility and organic traffic.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
    author: "Sarah Chen",
    date: "Jan 12, 2024",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    id: 3,
    title: "The Complete Guide to SaaS Development",
    excerpt: "Everything you need to know about building a successful SaaS product from ideation to launch.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    author: "Mike Johnson",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    category: "Development",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Latest Insights
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              From Our <span className="gradient-text">Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and trends from our team of experts.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            <Link to="/blog">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-brand-xl"
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
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
