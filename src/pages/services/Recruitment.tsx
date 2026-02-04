import { Users } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function RecruitmentService() {
  return (
    <ServicePage
      icon={Users}
      title="Recruitment"
      subtitle="Find the Right Talent for Your Team"
      description="Build your dream team with our expert recruitment services. We connect businesses with top-tier talent, streamlining your hiring process and ensuring you find candidates who align with your company culture and goals."
      features={[
        "Executive search and headhunting",
        "Technical talent acquisition",
        "Full-cycle recruitment management",
        "Candidate screening and assessment",
        "Interview coordination and scheduling",
        "Background verification services",
        "Onboarding support",
        "Talent pool development",
      ]}
      benefits={[
        {
          title: "Top Talent Access",
          description: "Access our extensive network of pre-vetted, high-quality candidates across industries.",
        },
        {
          title: "Time Savings",
          description: "Reduce your time-to-hire significantly with our streamlined recruitment process.",
        },
        {
          title: "Quality Matches",
          description: "Our rigorous screening ensures candidates match both skills and culture requirements.",
        },
        {
          title: "Industry Expertise",
          description: "Specialized recruiters who understand your industry and its unique talent needs.",
        },
        {
          title: "Cost Effective",
          description: "Reduce hiring costs and minimize the risk of bad hires with our proven process.",
        },
        {
          title: "Scalable Solutions",
          description: "Whether hiring one person or building entire teams, we scale to meet your needs.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Requirement Analysis",
          description: "We understand your hiring needs, company culture, and ideal candidate profile.",
        },
        {
          step: "2",
          title: "Talent Sourcing",
          description: "We search our network and platforms to identify qualified candidates.",
        },
        {
          step: "3",
          title: "Screening & Assessment",
          description: "Thorough evaluation of skills, experience, and cultural fit.",
        },
        {
          step: "4",
          title: "Interview Coordination",
          description: "We manage the interview process and gather feedback from all parties.",
        },
        {
          step: "5",
          title: "Offer & Onboarding",
          description: "We assist with offer negotiations and ensure smooth onboarding.",
        },
      ]}
    />
  );
}
