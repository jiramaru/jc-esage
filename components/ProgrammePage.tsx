"use client";

import React from "react";
import ActivityCard from "./ActivityCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import ProgrammeHero from "./ProgrammeHero";
import ProgrammeLinks from "./ProgrammeLinks";
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
    image: "/assets/imgs/dance/dance-01.jpeg",
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
    image: "/assets/imgs/jc/jc-01.jpeg",
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
    image: "/assets/imgs/defile/defile-01.jpeg",
  },
];

interface ProgrammePageProps {
  category?: string;
}

export default function ProgrammePage({ category }: ProgrammePageProps) {
  // Get category-specific data
  const getCategoryData = () => {
    const categoryMap: { [key: string]: { title: string; subtitle: string; image: string } } = {
      dance: {
        title: "Danse",
        subtitle: "Vivez des performances de danse captivantes célébrant notre héritage culturel à travers des mouvements gracieux et des chorégraphies envoûtantes",
        image: "/assets/imgs/dance/dance-01.jpeg",
      },
      chant: {
        title: "Chant",
        subtitle: "Écoutez des artistes talentueux interpréter des chansons inspirantes qui touchent le cœur et élèvent l'esprit",
        image: "/assets/imgs/chant/chant-01.jpeg",
      },
      miss: {
        title: "Élection Miss ESGAE",
        subtitle: "Participez à l'un des moments les plus attendus de la Journée Culturelle, où la beauté et l'intelligence se rencontrent",
        image: "/assets/imgs/jc/jc-01.jpeg",
      },
      theatre: {
        title: "Théâtre",
        subtitle: "Découvrez des sketches et pièces de théâtre pleins d'humour et d'émotions qui racontent nos histoires",
        image: "/assets/imgs/theatre/theatre-01.jpeg",
      },
      defile: {
        title: "Défilé",
        subtitle: "Assistez au défilé coloré des nations et départements représentés, célébrant notre diversité culturelle",
        image: "/assets/imgs/defile/defile-01.jpeg",
      },
    };

    return categoryMap[category || ""] || {
      title: "Au programme",
      subtitle: "Découvrez toutes les activités et animations de cette édition",
      image: "/assets/imgs/jc/jc-01.jpeg",
    };
  };

  const categoryData = getCategoryData();

  return (
    <>
      {/* Hero Section */}
      <ProgrammeHero
        title={categoryData.title}
        subtitle={categoryData.subtitle}
        backgroundImage={categoryData.image}
      />

      {/* Activities Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
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

      {/* Other Programmes Links */}
      
    </>
  );
}
