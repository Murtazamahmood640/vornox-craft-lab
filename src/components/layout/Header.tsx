import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Menu, X, ChevronDown, Globe, AppWindow, Megaphone, Search, PenTool, Palette, Monitor, CloudCog, Users, LogIn, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const services = [
  { name: "Websites", href: "/services/websites", icon: Globe, desc: "Beautiful, responsive websites" },
  { name: "Web Applications", href: "/services/web-applications", icon: AppWindow, desc: "Powerful custom web apps" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: Megaphone, desc: "Data-driven campaigns" },
  { name: "SEO", href: "/services/seo", icon: Search, desc: "Boost your search rankings" },
  { name: "Content Writing", href: "/services/content-writing", icon: PenTool, desc: "Compelling copy that converts" },
  { name: "Graphic Design", href: "/services/graphic-design", icon: Palette, desc: "Stunning brand visuals" },
  { name: "IT Consulting", href: "/services/it-consulting", icon: Monitor, desc: "Strategic tech guidance" },
  { name: "SaaS Development", href: "/services/saas", icon: CloudCog, desc: "Scalable software products" },
  { name: "Recruitment", href: "/services/recruitment", icon: Users, desc: "Find the right talent" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  const openMega = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Vornox Lab" className="h-10 w-auto dark:brightness-100 brightness-0" />
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

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                  isServicesActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
              </button>

              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-popover border border-border rounded-2xl shadow-xl p-6 w-[680px] animate-fade-in">
                    <div className="grid grid-cols-3 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          onClick={() => setMegaOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-colors group ${
                            location.pathname === service.href
                              ? "bg-primary/10"
                              : "hover:bg-muted"
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                              {service.name}
                            </div>
                            <div className="text-xs text-muted-foreground leading-snug mt-0.5">
                              {service.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            {user ? (
              <Button asChild className="gradient-bg text-primary-foreground hover:opacity-90 shadow-brand-md">
                <Link to="/dashboard"><LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="outline">
                  <Link to="/auth"><LogIn className="w-4 h-4 mr-2" /> Sign In</Link>
                </Button>
                <Button asChild className="gradient-bg text-primary-foreground hover:opacity-90 shadow-brand-md">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </>
            )}
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
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
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

              <div className="mt-4 px-4 flex items-center justify-between">
                <ThemeToggle />
              </div>
              <div className="px-4 space-y-2">
                {user ? (
                  <Button asChild className="w-full gradient-bg text-primary-foreground">
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
                  </Button>
                ) : (
                  <>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/auth" onClick={() => setIsOpen(false)}>Sign In</Link>
                    </Button>
                    <Button asChild className="w-full gradient-bg text-primary-foreground">
                      <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
