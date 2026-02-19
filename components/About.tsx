"use client";

import SectionTitle from "./SectionTitle";
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
        <div className="mb-16 fade-in">
          <SectionTitle
            title="Pourquoi la Journée Culturelle ?"
            subtitle="Éducation et Culture, moteurs du Progrès Social"
          />
        </div>

        {/* Main Text */}
        <div
          className="mb-16 max-w-3xl mx-auto space-y-6 slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
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
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-border/50 hover:border-primary/30 scale-in"
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-montserrat">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
