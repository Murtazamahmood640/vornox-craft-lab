import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
    excerpt: "Explore the cutting-edge design trends that are shaping the future of web development and user experience.",
    content: `Web design is constantly evolving, and 2024 brings exciting new trends that push the boundaries of creativity and functionality.

## 1. Immersive 3D Elements
Three-dimensional design elements are becoming more accessible thanks to WebGL and libraries like Three.js. Websites are incorporating 3D models, animations, and interactive experiences that captivate users.

## 2. Dark Mode by Default
Dark mode has moved from a preference to a default. More websites are launching with dark themes that reduce eye strain and create a premium, modern aesthetic.

## 3. AI-Powered Personalization
Artificial intelligence is enabling hyper-personalized web experiences. From dynamic content to adaptive layouts, AI is transforming how users interact with websites.

## 4. Micro-Interactions
Subtle animations and feedback mechanisms are making interfaces feel more alive. Hover effects, loading animations, and scroll-triggered transitions enhance user engagement.

## 5. Glassmorphism & Transparency
Frosted glass effects continue to dominate, adding depth and dimension to interfaces while maintaining readability and visual hierarchy.

## 6. Bold Typography
Oversized, expressive typography is being used as a primary design element. Custom fonts and variable fonts allow for more creative expression.

## 7. Sustainable Web Design
Eco-friendly design practices are gaining traction. Optimized images, efficient code, and green hosting are becoming priorities for environmentally conscious brands.

## 8. Scroll-Triggered Animations
Content that animates as users scroll creates engaging storytelling experiences. Libraries like GSAP and Framer Motion make these effects accessible.

## 9. Neobrutalism
A raw, bold aesthetic that embraces imperfection. Thick borders, bright colors, and intentionally "rough" designs challenge conventional web aesthetics.

## 10. Voice User Interfaces
Voice-activated navigation and search are becoming more common, making websites more accessible and convenient for users.`,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    author: "Alex Morgan",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "How to Boost Your SEO Rankings in 2024",
    excerpt: "Learn the latest SEO strategies and techniques to improve your website's visibility and organic traffic.",
    content: `Search engine optimization continues to evolve with algorithm updates and changing user behavior. Here's how to stay ahead in 2024.

## Understanding Core Web Vitals
Google's Core Web Vitals remain crucial ranking factors. Focus on Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to ensure your site meets performance benchmarks.

## Content Quality Over Quantity
Gone are the days of keyword stuffing. Google's helpful content update emphasizes genuine, valuable content that answers user queries comprehensively.

## E-E-A-T Principles
Experience, Expertise, Authoritativeness, and Trustworthiness are more important than ever. Demonstrate your credentials and provide evidence-backed content.

## Mobile-First Indexing
With mobile traffic dominating, ensure your website delivers an exceptional mobile experience. Responsive design, fast loading, and touch-friendly interfaces are non-negotiable.

## AI and SEO
Leverage AI tools for keyword research, content optimization, and competitive analysis. But remember—AI should assist, not replace, human creativity and expertise.

## Local SEO Optimization
For businesses serving local markets, optimize your Google Business Profile, gather reviews, and ensure NAP consistency across all platforms.`,
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&h=600&fit=crop",
    author: "Sarah Chen",
    date: "Jan 12, 2024",
    readTime: "7 min read",
    category: "SEO",
  },
  {
    id: 3,
    title: "The Complete Guide to SaaS Development",
    excerpt: "Everything you need to know about building a successful SaaS product from ideation to launch.",
    content: `Building a SaaS product requires careful planning, solid architecture, and a deep understanding of your target market.

## Ideation & Validation
Before writing a single line of code, validate your idea. Talk to potential users, analyze competitors, and ensure there's a real market need.

## Choosing the Right Tech Stack
Select technologies that scale. Consider factors like team expertise, community support, and long-term maintainability. Popular choices include React for frontend, Node.js or Python for backend, and PostgreSQL for databases.

## Architecture Decisions
Plan for scale from day one. Microservices vs monolith, serverless vs traditional—each has trade-offs. Start with what's simplest and evolve as needed.

## Multi-Tenancy
Design your database and application architecture to support multiple tenants efficiently. Consider data isolation, performance, and security implications.

## Subscription Management
Implement robust billing with tools like Stripe. Handle upgrades, downgrades, trials, and failed payments gracefully.

## Security Best Practices
Implement authentication, authorization, data encryption, and regular security audits. Your users trust you with their data—take that seriously.

## Monitoring & Analytics
Set up comprehensive monitoring from day one. Track performance metrics, error rates, and user behavior to make data-driven decisions.`,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop",
    author: "Mike Johnson",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    category: "Development",
  },
  {
    id: 4,
    title: "Digital Marketing Strategies That Actually Work",
    excerpt: "Discover proven digital marketing strategies that deliver real results.",
    content: `In a world saturated with content and ads, standing out requires strategic thinking and authentic engagement.

## Content Marketing
Create valuable, relevant content that addresses your audience's pain points. Blog posts, videos, podcasts, and infographics all play a role in building authority.

## Social Media Strategy
Focus on platforms where your audience lives. Quality over quantity—it's better to excel on two platforms than be mediocre on five.

## Email Marketing
Email remains one of the highest-ROI channels. Build segmented lists, personalize content, and automate nurture sequences.

## Paid Advertising
Smart PPC campaigns on Google and social platforms can drive immediate results. Focus on targeting, ad copy, and landing page optimization.

## Conversion Rate Optimization
Small improvements in conversion rates can dramatically impact revenue. A/B test everything—headlines, CTAs, layouts, and offers.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    author: "Emma Wilson",
    date: "Jan 8, 2024",
    readTime: "8 min read",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Building Scalable Web Applications with React",
    excerpt: "A deep dive into building enterprise-grade React applications.",
    content: `React has become the go-to library for building modern web applications. Here's how to build applications that scale.

## Project Structure
Organize your project by feature, not by file type. This makes it easier to navigate and maintain as your application grows.

## State Management
Choose the right state management solution. React Query for server state, Zustand or Redux for complex client state, and React Context for simple shared state.

## Performance Optimization
Use React.memo, useMemo, and useCallback judiciously. Implement code splitting with lazy loading and optimize bundle size with tree shaking.

## Testing Strategy
Write unit tests for utilities, integration tests for components, and end-to-end tests for critical user flows. Tools like Vitest, Testing Library, and Playwright make this straightforward.

## Deployment & CI/CD
Set up automated pipelines for testing, building, and deploying. Use preview deployments for pull requests and canary releases for production.`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
    author: "David Park",
    date: "Jan 5, 2024",
    readTime: "12 min read",
    category: "Development",
  },
  {
    id: 6,
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how color influences brand perception and customer behavior.",
    content: `Color is one of the most powerful tools in a brand's arsenal. It communicates emotion, builds recognition, and influences purchasing decisions.

## Color and Emotion
Different colors evoke different emotions. Blue conveys trust and professionalism, red signals urgency and passion, green represents growth and health.

## Cultural Considerations
Colors carry different meanings across cultures. White symbolizes purity in Western cultures but mourning in some Eastern cultures. Research your target market's color associations.

## Color Harmony
Use color theory principles—complementary, analogous, and triadic schemes—to create visually pleasing palettes that work together.

## Accessibility
Ensure sufficient contrast ratios for readability. Tools like WebAIM's contrast checker help verify your colors meet WCAG guidelines.

## Brand Consistency
Use your colors consistently across all touchpoints—website, social media, packaging, and print materials. Consistency builds recognition and trust.`,
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=600&fit=crop",
    author: "Lisa Thompson",
    date: "Jan 3, 2024",
    readTime: "6 min read",
    category: "Design",
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleShare = (platform: string) => {
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
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <span className="block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium w-fit mb-4">
                {post.category}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">{post.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Meta & Share */}
            <motion.div
              className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="sm" variant="outline" className="border-primary/50">
                    <Share2 className="w-4 h-4 mr-2" /> Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleShare("whatsapp")} className="cursor-pointer">
                    <MessageCircle className="w-4 h-4 mr-2 text-green-500" /> WhatsApp
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("phone")} className="cursor-pointer">
                    <Phone className="w-4 h-4 mr-2 text-primary" /> Call: 03228258640
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("email")} className="cursor-pointer">
                    <Mail className="w-4 h-4 mr-2 text-primary" /> Email Us
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </motion.div>

            {/* Article Body */}
            <motion.article
              className="prose prose-invert prose-lg max-w-none
                prose-headings:font-display prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-strong:text-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return <h2 key={i}>{paragraph.replace("## ", "")}</h2>;
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </motion.article>

            {/* CTA */}
            <motion.div
              className="mt-16 p-8 rounded-2xl bg-card border border-border text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-display text-2xl font-bold mb-3">Need Help With Your Project?</h3>
              <p className="text-muted-foreground mb-6">Get in touch with our team for a free consultation.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild className="gradient-bg text-primary-foreground">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/50">
                  <a href="https://wa.me/923228258640" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
