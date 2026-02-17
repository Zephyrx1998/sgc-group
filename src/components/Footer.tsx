import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">SGC</span>
              <span className="text-accent"> Group</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A diversified conglomerate shaping industries through innovation, trust, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/chairman" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                  Chairman's Message
                </Link>
              </li>
              <li>
                <Link to="/investor-relations" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Corporate Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  SGC Group Headquarters<br />
                  Corporate Tower, Business District<br />
                  Mumbai, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+91 (022) 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@sgcgroup.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} SGC Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
