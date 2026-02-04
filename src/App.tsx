import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Service Pages
import WebsitesService from "./pages/services/Websites";
import WebApplicationsService from "./pages/services/WebApplications";
import DigitalMarketingService from "./pages/services/DigitalMarketing";
import SEOService from "./pages/services/SEO";
import ContentWritingService from "./pages/services/ContentWriting";
import GraphicDesignService from "./pages/services/GraphicDesign";
import ITConsultingService from "./pages/services/ITConsulting";
import SaaSService from "./pages/services/SaaS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Routes */}
          <Route path="/services/websites" element={<WebsitesService />} />
          <Route path="/services/web-applications" element={<WebApplicationsService />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingService />} />
          <Route path="/services/seo" element={<SEOService />} />
          <Route path="/services/content-writing" element={<ContentWritingService />} />
          <Route path="/services/graphic-design" element={<GraphicDesignService />} />
          <Route path="/services/it-consulting" element={<ITConsultingService />} />
          <Route path="/services/saas" element={<SaaSService />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
