import { Monitor } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function ITConsultingService() {
  return (
    <ServicePage
      icon={Monitor}
      title="IT Consulting"
      subtitle="Strategic Technology Guidance"
      description="Navigate the complex technology landscape with expert guidance. We help businesses make informed technology decisions, optimize their IT infrastructure, and implement solutions that drive growth."
      features={[
        "IT strategy and planning",
        "Technology assessment and audit",
        "Digital transformation consulting",
        "Cloud migration strategy",
        "Cybersecurity assessment",
        "Vendor selection and management",
        "IT project management",
        "Technology training and support",
      ]}
      benefits={[
        {
          title: "Expert Guidance",
          description: "Leverage our experience to make better technology decisions for your business.",
        },
        {
          title: "Cost Optimization",
          description: "Reduce IT costs while improving performance and capability.",
        },
        {
          title: "Risk Mitigation",
          description: "Identify and address technology risks before they become problems.",
        },
        {
          title: "Competitive Advantage",
          description: "Use technology strategically to outpace competitors and serve customers better.",
        },
        {
          title: "Future-Ready",
          description: "Build a technology foundation that supports your long-term business goals.",
        },
        {
          title: "Vendor Neutral",
          description: "Get unbiased recommendations focused on what's best for your business.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Assessment",
          description: "We evaluate your current IT infrastructure, processes, and challenges.",
        },
        {
          step: "2",
          title: "Strategy Development",
          description: "We create a technology roadmap aligned with your business objectives.",
        },
        {
          step: "3",
          title: "Solution Design",
          description: "We design solutions and recommend technologies to address your needs.",
        },
        {
          step: "4",
          title: "Implementation Support",
          description: "We guide the implementation process and ensure successful adoption.",
        },
        {
          step: "5",
          title: "Ongoing Advisory",
          description: "We provide continued support and guidance as your needs evolve.",
        },
      ]}
    />
  );
}
