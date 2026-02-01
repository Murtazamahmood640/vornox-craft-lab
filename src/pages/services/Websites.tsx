import { Globe } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function WebsitesService() {
  return (
    <ServicePage
      icon={Globe}
      title="Websites"
      subtitle="Beautiful, Responsive, High-Converting"
      description="We create stunning websites that not only look great but also drive results. From simple landing pages to complex multi-page websites, we build digital experiences that convert visitors into customers."
      features={[
        "Custom responsive design for all devices",
        "SEO-optimized structure and content",
        "Fast loading speeds with optimized performance",
        "CMS integration for easy content management",
        "SSL certificate and security setup",
        "Analytics and tracking integration",
        "Cross-browser compatibility",
        "Ongoing maintenance and support",
      ]}
      benefits={[
        {
          title: "First Impressions Matter",
          description: "Your website is often the first interaction customers have with your brand. We make it count.",
        },
        {
          title: "Mobile-First Design",
          description: "With over 60% of web traffic from mobile, we prioritize responsive, mobile-optimized experiences.",
        },
        {
          title: "Conversion Focused",
          description: "Every element is designed with purpose to guide visitors toward your business goals.",
        },
        {
          title: "Search Engine Ready",
          description: "Built-in SEO best practices help your site rank higher and get found by your target audience.",
        },
        {
          title: "Fast & Secure",
          description: "Lightning-fast load times and robust security measures protect your site and users.",
        },
        {
          title: "Easy to Manage",
          description: "Intuitive content management systems let you update your site without technical knowledge.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Discovery & Planning",
          description: "We learn about your business, goals, and target audience to create a strategic plan for your website.",
        },
        {
          step: "2",
          title: "Design & Wireframing",
          description: "Our designers create beautiful mockups and wireframes for your approval before development begins.",
        },
        {
          step: "3",
          title: "Development",
          description: "We build your website using modern technologies and best practices for performance and security.",
        },
        {
          step: "4",
          title: "Testing & QA",
          description: "Rigorous testing across devices and browsers ensures everything works perfectly.",
        },
        {
          step: "5",
          title: "Launch & Support",
          description: "We deploy your site and provide ongoing maintenance and support to keep it running smoothly.",
        },
      ]}
    />
  );
}
