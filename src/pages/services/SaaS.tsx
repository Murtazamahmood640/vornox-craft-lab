import { CloudCog } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function SaaSService() {
  return (
    <ServicePage
      icon={CloudCog}
      title="SaaS Development"
      subtitle="Scalable Software Products"
      description="Transform your idea into a profitable SaaS product. We build subscription-based software solutions from the ground up, designed for scalability, security, and recurring revenue."
      features={[
        "Product strategy and validation",
        "MVP development",
        "Multi-tenant architecture",
        "Subscription and billing integration",
        "User authentication and roles",
        "API development",
        "Analytics and reporting dashboards",
        "Scalable cloud infrastructure",
      ]}
      benefits={[
        {
          title: "Recurring Revenue",
          description: "Build a sustainable business with predictable monthly recurring revenue.",
        },
        {
          title: "Scalable Architecture",
          description: "Our multi-tenant architecture grows efficiently with your user base.",
        },
        {
          title: "Faster Time to Market",
          description: "We help you launch an MVP quickly to validate your idea with real users.",
        },
        {
          title: "Lower Upfront Cost",
          description: "SaaS model reduces customer acquisition barriers with subscription pricing.",
        },
        {
          title: "Continuous Improvement",
          description: "Gather user feedback and iterate quickly to improve your product.",
        },
        {
          title: "Global Reach",
          description: "Cloud-based delivery means you can serve customers anywhere in the world.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Product Discovery",
          description: "We validate your idea, define features, and create a product roadmap.",
        },
        {
          step: "2",
          title: "Architecture Design",
          description: "We design a scalable, secure architecture that supports SaaS requirements.",
        },
        {
          step: "3",
          title: "MVP Development",
          description: "We build a minimum viable product to get you to market quickly.",
        },
        {
          step: "4",
          title: "Launch & Iterate",
          description: "We help you launch, gather feedback, and iterate based on user insights.",
        },
        {
          step: "5",
          title: "Scale & Optimize",
          description: "We support growth with performance optimization and feature expansion.",
        },
      ]}
    />
  );
}
