import { Search } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function SEOService() {
  return (
    <ServicePage
      icon={Search}
      title="SEO"
      subtitle="Dominate Search Rankings"
      description="Increase your organic visibility and drive qualified traffic with our proven SEO strategies. We help businesses of all sizes rank higher in search results and attract more customers."
      features={[
        "Comprehensive SEO audit",
        "Keyword research and strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Content optimization",
        "Link building campaigns",
        "Local SEO optimization",
        "Monthly ranking reports",
      ]}
      benefits={[
        {
          title: "Organic Traffic",
          description: "Drive sustainable, free traffic from search engines without paying for every click.",
        },
        {
          title: "Higher Rankings",
          description: "Climb the search results and get in front of customers actively searching for your services.",
        },
        {
          title: "Qualified Leads",
          description: "Attract visitors who are already interested in what you offer and ready to buy.",
        },
        {
          title: "Brand Credibility",
          description: "High search rankings build trust and establish you as an authority in your industry.",
        },
        {
          title: "Long-Term Results",
          description: "Unlike paid ads, SEO benefits compound over time for lasting results.",
        },
        {
          title: "Competitive Edge",
          description: "Outrank your competitors and capture market share in your industry.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "SEO Audit",
          description: "We analyze your website's current SEO health and identify areas for improvement.",
        },
        {
          step: "2",
          title: "Keyword Research",
          description: "We identify the most valuable keywords your target audience is searching for.",
        },
        {
          step: "3",
          title: "On-Page Optimization",
          description: "We optimize your website's content, structure, and technical elements for search engines.",
        },
        {
          step: "4",
          title: "Content Strategy",
          description: "We create a content plan to target relevant keywords and attract backlinks.",
        },
        {
          step: "5",
          title: "Link Building",
          description: "We build high-quality backlinks to increase your website's authority and rankings.",
        },
      ]}
    />
  );
}
