"use client";

import React from "react";
import ActivityCard from "./ActivityCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
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
    image: "/assets/imgs/dance/dance-09.jpeg",
  },
  {
    icon: Mic,
    title: "Chant",
    description:
      "Écoutez des artistes talentueux interpréter des chansons inspirantes",
    image: "/assets/imgs/chant/chant-03.jpeg",
  },
  {
    icon: Crown,
    title: "Élection Miss ESGAE",
    description:
      "Participez à l'une des sections les plus attendues de la Journée Culturelle",
    image: "/assets/imgs/miss/miss-05.jpeg",
  },
  {
    icon: Drama,
    title: "Théâtre",
    description:
      "Découvrez des sketches et pièces de théâtre pleins d'humour et d'émotions",
    image: "/assets/imgs/theatre/theatre-02.jpeg",
  },
  {
    icon: Flag,
    title: "Défilé",
    description:
      "Assistez au défilé coloré des nations et départements représentés",
    image: "/assets/imgs/defile/defile-03.jpeg",
  },
];

export default function Programme() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <Reveal className="mb-16">
          <SectionTitle
            title="Explorez nos activités"
            subtitle="Découvrez toutes les animations et performances prévues pour cette édition"
          />
        </Reveal>

        {/* Activities Grid */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((activity, index) => (
              <ActivityCard
                key={index}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                image={activity.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
