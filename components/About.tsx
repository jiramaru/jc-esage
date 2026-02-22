"use client";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { GraduationCap, Users, Music, Globe } from "lucide-react";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Éducation",
    description:
      "Partager le savoir et les connaissances à travers la culture",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Rassembler les étudiants autour d'une passion commune",
  },
  {
    icon: Music,
    title: "Culture",
    description: "Célébrer la diversité culturelle et artistique",
  },
  {
    icon: Globe,
    title: "Progrès",
    description: "Moteurs du progrès social et du développement",
  },
];

export default function About() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Reveal className="mb-16">
          <SectionTitle
            title="Pourquoi la Journée Culturelle ?"
            subtitle="Éducation et Culture, moteurs du Progrès Social"
          />
        </Reveal>

        {/* Main Text */}
        <Reveal className="mb-16 max-w-3xl mx-auto space-y-6" delay={0.05}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La Journée Culturelle approche à grands pas. Dans deux mois, ESGAE
            organisera sa Journée Culturelle, un événement phare qui célèbre la
            richesse de nos traditions et talents.
          </p>
          <p className="text-lg text-foreground font-semibold leading-relaxed">
            Si vous avez manqué l&apos;édition passée, ne ratez pas celle de cette
            année,
            <span className="text-primary"> car demain sera meilleur qu&apos;hier.</span>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cet événement réunit nos étudiants dans une célébration commune de
            l&apos;art, de la musique, de la danse et du théâtre. C&apos;est un moment
            inoubliable de partage, de découverte et de fierté culturelle.
          </p>
        </Reveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <Reveal key={index} delay={0.05 + index * 0.05}>
              <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 h-full flex flex-col">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 shadow-lg flex-shrink-0">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
