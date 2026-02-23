"use client";

import React from "react";
import Link from "next/link";
import { Music, Mic, Crown, Drama, Flag } from "lucide-react";
import Reveal from "./Reveal";

const PROGRAM_LINKS = [
  {
    icon: Music,
    title: "Danse",
    href: "/dance",
    description: "Performances de danse captivantes",
  },
  {
    icon: Mic,
    title: "Chant",
    href: "/chant",
    description: "Artistes talentueux et chansons inspirantes",
  },
  {
    icon: Crown,
    title: "Élection Miss ESGAE",
    href: "/miss",
    description: "Un des moments les plus attendus",
  },
  {
    icon: Drama,
    title: "Théâtre",
    href: "/theatre",
    description: "Sketches et pièces pleins d'émotions",
  },
  {
    icon: Flag,
    title: "Défilé",
    href: "/defile",
    description: "Célébration de notre diversité culturelle",
  },
];

interface ProgrammeLinksProps {
  currentCategory?: string;
}

export default function ProgrammeLinks({ currentCategory }: ProgrammeLinksProps) {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-poppins mb-4">
              Explorez nos programmes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez toutes les activités et animations prévues pour la Journée Culturelle
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAM_LINKS.filter(link => link.title !== currentCategory).map((program, index) => (
            <Reveal key={program.title} delay={index * 0.1}>
              <Link href={program.href}>
                <div className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 motion-safe:group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <program.icon className="text-primary" size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 font-poppins">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors">
                    <span>Découvrir</span>
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
