import { AppWindow } from "lucide-react";
import { ServicePage } from "@/components/services/ServicePage";

export default function WebApplicationsService() {
  return (
    <ServicePage
      icon={AppWindow}
      title="Web Applications"
      subtitle="Powerful Custom Software Solutions"
      description="We develop custom web applications that streamline your business processes, improve efficiency, and give you a competitive edge. From complex dashboards to full-featured platforms, we build software that works for you."
      features={[
        "Custom functionality tailored to your needs",
        "Scalable architecture for growth",
        "User-friendly interface design",
        "Secure authentication and authorization",
        "API development and integrations",
        "Real-time data processing",
        "Cloud deployment and hosting",
        "Comprehensive documentation and training",
      ]}
      benefits={[
        {
          title: "Tailored Solutions",
          description: "Off-the-shelf software rarely fits perfectly. We build exactly what your business needs.",
        },
        {
          title: "Improved Efficiency",
          description: "Automate repetitive tasks and streamline workflows to save time and reduce errors.",
        },
        {
          title: "Scalable Architecture",
          description: "Our applications grow with your business, handling increased load and users seamlessly.",
        },
        {
          title: "Seamless Integrations",
          description: "Connect with your existing tools and services for a unified technology ecosystem.",
        },
        {
          title: "Data-Driven Insights",
          description: "Built-in analytics and reporting help you make informed business decisions.",
        },
        {
          title: "Ongoing Support",
          description: "We provide maintenance, updates, and support to keep your application running smoothly.",
        },
      ]}
      process={[
        {
          step: "1",
          title: "Requirements Analysis",
          description: "We thoroughly analyze your business processes and requirements to understand exactly what you need.",
        },
        {
          step: "2",
          title: "Architecture Design",
          description: "Our team designs a robust, scalable architecture that will support your application for years to come.",
        },
        {
          step: "3",
          title: "Agile Development",
          description: "We build your application in sprints, delivering working features regularly for your feedback.",
        },
        {
          step: "4",
          title: "Quality Assurance",
          description: "Comprehensive testing ensures your application is reliable, secure, and performs well.",
        },
        {
          step: "5",
          title: "Deployment & Training",
          description: "We deploy your application and train your team to use it effectively.",
        },
      ]}
    />
  );
}
