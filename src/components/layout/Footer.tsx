import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";

const services = [
  { name: "Websites", href: "/services/websites" },
  { name: "Web Applications", href: "/services/web-applications" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "SEO", href: "/services/seo" },
  { name: "Content Writing", href: "/services/content-writing" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "IT Consulting", href: "/services/it-consulting" },
  { name: "SaaS Development", href: "/services/saas" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="gradient-dark-bg text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="font-display font-bold text-xl">V</span>
              </div>
              <span className="font-display font-bold text-xl">
                Vornox<span className="text-purple-300">Lab</span>
              </span>
            </Link>
            <p className="text-purple-200/80 mb-6 leading-relaxed">
              Empowering businesses with innovative digital solutions. From concept to deployment, we bring your vision to life.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-purple-200/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-purple-200/80 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-purple-200/80">123 Tech Street, Innovation Hub, Digital City 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-purple-200/80 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:hello@vornoxlab.com" className="text-purple-200/80 hover:text-white transition-colors">
                  hello@vornoxlab.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-200/60 text-sm">
            © {new Date().getFullYear()} Vornox Lab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-purple-200/60 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-purple-200/60 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
