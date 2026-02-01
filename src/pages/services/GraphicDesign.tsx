import { Palette } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function GraphicDesignService() {
  return (
    <ServicePage
      icon={Palette}
      title="Graphic Design"
      subtitle="Visual Excellence for Your Brand"
      description="Make a lasting impression with stunning visual designs that elevate your brand. From logos to marketing materials, we create designs that communicate your message and captivate your audience."
      features={[
        "Logo and brand identity design",
        "Marketing materials and brochures",
        "Social media graphics",
        "Presentation design",
        "Infographics and data visualization",
        "Packaging design",
        "Print and digital ads",
        "UI/UX design elements",
      ]}
      benefits={[
        {
          title: "Professional Image",
          description: "Quality design elevates your brand and creates a professional impression.",
        },
        {
          title: "Brand Consistency",
          description: "Cohesive visual identity across all touchpoints strengthens brand recognition.",
        },
        {
          title: "Stand Out",
          description: "Unique, creative designs help you differentiate from competitors.",
        },
        {
          title: "Emotional Connection",
          description: "Visual design creates emotional connections that words alone cannot achieve.",
        },
        {
          title: "Increased Engagement",
          description: "Eye-catching visuals drive more engagement across all marketing channels.",
        },
        {
          title: "Versatile Assets",
          description: "Get designs in multiple formats for use across print and digital media.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Brief & Discovery",
          description: "We discuss your vision, brand values, and design requirements in detail.",
        },
        {
          step: "2",
          title: "Concept Development",
          description: "Our designers create initial concepts and mood boards for your feedback.",
        },
        {
          step: "3",
          title: "Design Refinement",
          description: "We refine the chosen concept based on your input until it's perfect.",
        },
        {
          step: "4",
          title: "Finalization",
          description: "Final designs are polished and prepared in all required formats and sizes.",
        },
        {
          step: "5",
          title: "Delivery",
          description: "You receive all final files with brand guidelines and usage instructions.",
        },
      ]}
    />
  );
}
