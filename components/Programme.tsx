"use client";

import ActivityCard from "./ActivityCard";
import SectionTitle from "./SectionTitle";
import {
  Music,
  Mic,
  Crown,
  Drama,
  Flag,
} from "lucide-react";

const ACTIVITIES = [
  {
    icon: Music,
    title: "Danse",
    description:
      "Vivez des performances de danse captivantes célébrant notre héritage culturel",
  },
  {
    icon: Mic,
    title: "Chant",
    description:
      "Écoutez des artistes talentueux interpréter des chansons inspirantes",
  },
  {
    icon: Crown,
    title: "Élection Miss ESGAE",
    description:
      "Participez à l'une des sections les plus attendues de la Journée Culturelle",
  },
  {
    icon: Drama,
    title: "Théâtre",
    description:
      "Découvrez des sketches et pièces de théâtre pleins d'humour et d'émotions",
  },
  {
    icon: Flag,
    title: "Défilé",
    description:
      "Assistez au défilé coloré des nations et départements représentés",
  },
];

export default function Programme() {
  return (
    <section
      id="programme"
      className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 fade-in">
          <SectionTitle
            title="Au programme"
            subtitle="Découvrez toutes les activités et animations de cette édition"
          />
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((activity, index) => (
            <ActivityCard
              key={index}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Info Box */}
        <div
          className="mt-16 bg-gradient-hero rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 scale-in"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-lg font-medium">
            Chaque activité est conçue pour divertir, inspirer et célébrer notre
            diversité culturelle.
          </p>
          <p className="mt-4 text-white/80">
            Plus de détails sur le programme complet seront annoncés bientôt.
          </p>
        </div>
      </div>
    </section>
  );
}
