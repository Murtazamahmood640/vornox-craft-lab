import { Megaphone } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function DigitalMarketingService() {
  return (
    <ServicePage
      icon={Megaphone}
      title="Digital Marketing"
      subtitle="Data-Driven Growth Strategies"
      description="Grow your online presence and reach your target audience with our comprehensive digital marketing services. We use data-driven strategies to maximize your ROI and achieve measurable results."
      features={[
        "Social media marketing and management",
        "Pay-per-click (PPC) advertising",
        "Email marketing campaigns",
        "Content marketing strategy",
        "Marketing automation setup",
        "Conversion rate optimization",
        "Analytics and performance tracking",
        "Monthly reporting and insights",
      ]}
      benefits={[
        {
          title: "Targeted Reach",
          description: "Reach the right people at the right time with precision-targeted marketing campaigns.",
        },
        {
          title: "Measurable Results",
          description: "Track every click, conversion, and dollar spent with transparent reporting.",
        },
        {
          title: "Cost-Effective Growth",
          description: "Maximize your marketing budget with strategies optimized for ROI.",
        },
        {
          title: "Brand Awareness",
          description: "Build a strong online presence that keeps your brand top of mind.",
        },
        {
          title: "Lead Generation",
          description: "Attract and convert qualified leads into paying customers.",
        },
        {
          title: "Expert Management",
          description: "Our experienced team handles everything so you can focus on your business.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Audit & Analysis",
          description: "We analyze your current marketing efforts and identify opportunities for improvement.",
        },
        {
          step: "2",
          title: "Strategy Development",
          description: "We create a customized marketing strategy aligned with your business goals.",
        },
        {
          step: "3",
          title: "Campaign Creation",
          description: "Our team creates compelling campaigns across the most effective channels for your audience.",
        },
        {
          step: "4",
          title: "Launch & Monitor",
          description: "We launch campaigns and continuously monitor performance for optimization opportunities.",
        },
        {
          step: "5",
          title: "Optimize & Scale",
          description: "Based on data, we optimize campaigns and scale what works to maximize results.",
        },
      ]}
    />
  );
}
