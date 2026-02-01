import { PenTool } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function ContentWritingService() {
  return (
    <ServicePage
      icon={PenTool}
      title="Content Writing"
      subtitle="Words That Convert"
      description="Engage your audience with compelling content that tells your story and drives action. Our expert writers create content that resonates with your audience and supports your business goals."
      features={[
        "Website copywriting",
        "Blog posts and articles",
        "Product descriptions",
        "Email marketing content",
        "Social media content",
        "Case studies and white papers",
        "Press releases",
        "SEO-optimized content",
      ]}
      benefits={[
        {
          title: "Engaging Content",
          description: "Capture attention and keep readers engaged with professionally written content.",
        },
        {
          title: "Brand Voice",
          description: "Develop a consistent voice that reflects your brand personality across all content.",
        },
        {
          title: "SEO Benefits",
          description: "Content optimized for search engines helps you rank higher and attract more traffic.",
        },
        {
          title: "Authority Building",
          description: "Position yourself as an industry expert with valuable, insightful content.",
        },
        {
          title: "Conversion Focus",
          description: "Content crafted with clear calls-to-action that guide readers toward conversion.",
        },
        {
          title: "Time Savings",
          description: "Let us handle content creation while you focus on running your business.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Discovery",
          description: "We learn about your business, audience, and content goals to create a strategy.",
        },
        {
          step: "2",
          title: "Research",
          description: "Our writers research your industry, competitors, and topics thoroughly.",
        },
        {
          step: "3",
          title: "Writing",
          description: "We create compelling, well-researched content tailored to your audience.",
        },
        {
          step: "4",
          title: "Review & Revisions",
          description: "You review the content and we make revisions until you're completely satisfied.",
        },
        {
          step: "5",
          title: "Delivery & Support",
          description: "Final content is delivered in your preferred format with ongoing support as needed.",
        },
      ]}
    />
  );
}
