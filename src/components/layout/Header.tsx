import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe, AppWindow, Megaphone, Search, PenTool, Palette, Monitor, CloudCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Websites", href: "/services/websites", icon: Globe },
  { name: "Web Applications", href: "/services/web-applications", icon: AppWindow },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone },
  { name: "SEO", href: "/services/seo", icon: Search },
  { name: "Content Writing", href: "/services/content-writing", icon: PenTool },
  { name: "Graphic Design", href: "/services/graphic-design", icon: Palette },
  { name: "IT Consulting", href: "/services/it-consulting", icon: Monitor },
  { name: "SaaS Development", href: "/services/saas", icon: CloudCog },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">V</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Vornox<span className="gradient-text">Lab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                    isServicesActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border border-border shadow-brand-lg" align="start">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link
                      to={service.href}
                      className="flex items-center gap-3 px-3 py-2.5 cursor-pointer"
                    >
                      <service.icon className="w-4 h-4 text-primary" />
                      <span>{service.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="gradient-bg text-primary-foreground hover:opacity-90 shadow-brand-md">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-foreground">Services</span>
              </div>
              {services.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-6 py-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  <service.icon className="w-4 h-4 text-primary" />
                  <span>{service.name}</span>
                </Link>
              ))}

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-4 px-4">
                <Button asChild className="w-full gradient-bg text-primary-foreground">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
