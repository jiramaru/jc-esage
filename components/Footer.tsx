"use client";

import { ArrowUp, Heart } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

import Reveal from "./Reveal";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white pt-16 pb-8 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <Reveal className="space-y-3" delay={0.05}>
            <h3 className="text-2xl font-bold font-poppins gradient-hero bg-clip-text text-white px-2 rounded">ESGAE la grande école</h3>
            <p className="text-white/70">
              Célébrant l&apos;éducation et la culture comme moteurs du progrès
              social.
            </p>
            <p className="text-sm text-white/50">
              AEA - Association des étudiants et anciens
            </p>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={0.1}>
            <h3 className="text-lg font-bold mb-4 font-poppins">Liens</h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#hero" },
                { label: "Programme", href: "#programme" },
                { label: "Galerie", href: "#galerie" },
                { label: "Infos", href: "#infos" },
                { label: "Localisation", href: "#localisation" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-primary">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={0.15}>
            <h3 className="text-lg font-bold mb-4 font-poppins">Nous suivre</h3>
            <div className="flex gap-4 mb-6">
              {[
                { icon: FaFacebook, href: "#", label: "Facebook" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaTiktok, href: "https://www.tiktok.com/@aea_esgae_01?_r=1&_t=ZS-94BZ75LMWgR", label: "TikTok" },
                { icon: FaEnvelope, href: "mailto:contact@esgae.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  target="_blank"
                  href={href}
                  title={label}
                  className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>
              © 2026 Journée Culturelle ESGAE. Tous droits réservés.
            </p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">
              Fait avec
              <Heart size={16} className="text-primary fill-primary" />
              par le Club Informatique
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/40 transition-all hover:scale-110 z-50 animate-bounce"
        >
          <ArrowUp size={24} className="text-primary-foreground" />
        </button>
      )}
    </footer>
  );
}
