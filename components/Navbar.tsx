"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  CalendarDays,
  Images,
  Info,
  MapPin,
  type LucideIcon,
} from "lucide-react";

import Reveal from "./Reveal";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Accueil", href: "#hero", icon: Home },
    { label: "Programme", href: "#programme", icon: CalendarDays },
    { label: "Galerie", href: "#galerie", icon: Images },
    { label: "Infos", href: "#infos", icon: Info },
    { label: "Localisation", href: "#localisation", icon: MapPin },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-foreground/95 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-foreground/60 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#"
            className="font-montserrat font-bold text-2xl bg-clip-text text-white hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
         
            JC-ESGAE
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => (
              <Link key={link.label} href={link.href}>
                <Reveal delay={index * 0.03} y={8}>
                  <Button
                    variant="ghost"
                    className={`text-white/85 hover:text-white hover:bg-white/10 transition-all duration-300 gap-2`}
                  >
                    {(() => {
                      const Icon = link.icon as LucideIcon
                      return <Icon className="size-4" />
                    })()}
                    <span className="hidden sm:inline">{link.label}</span>
                  </Button>
                </Reveal>
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Ouvrir le menu"
                  className="text-white/90 hover:text-white hover:bg-white/10"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0 bg-foreground/95 border-l border-white/10">
                <SheetHeader className="px-4 pt-4">
                  <SheetTitle className="font-montserrat text-white flex items-center gap-2">
                    <CalendarDays className="size-4" /> Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="px-2 pb-4">
                  <div className="mt-2 grid gap-1">
                    {links.map((link) => (
                      <Link key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
                        <Button
                          variant="ghost"
                          className="justify-start w-full text-white/85 hover:text-white hover:bg-white/10 gap-3"
                        >
                          {(() => {
                            const Icon = link.icon as LucideIcon
                            return <Icon className="size-5" />
                          })()}
                          {link.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
