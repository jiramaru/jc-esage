"use client";

import React from "react";
import ActivityCard from "./ActivityCard";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import ProgrammeHero from "./ProgrammeHero";
import ProgrammeLinks from "./ProgrammeLinks";
import CategoryDescription from "./CategoryDescription";
import CategoryGallery from "./CategoryGallery";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
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
      "Écoutez des artistes talentueux interpréter des chants inspirants",
    image: "/assets/imgs/chant/chant-03.jpeg",
  },
  {
    icon: Crown,
    title: "Élection Miss ESGAE",
    description:
      "Participez à l'une des sélections les plus attendues de la journée culturelle. Et, votez pour l'étudiante que vous aimeriez voir gagner.",
    image: "/assets/imgs/miss/miss-07.jpeg",
  },
  {
    icon: Drama,
    title: "Théâtre",
    description:
      "Découvrez des sketches et pièces de théâtre pleins d'humour et d'émotions spécialement conçus pour vous divertir tout en vous transmettant un message poignant",
    image: "/assets/imgs/theatre/theatre-02.jpeg",
  },
  {
    icon: Flag,
    title: "Défilé",
    description:
      "Assistez au défilé coloré des nations et départements représentés par différents étudiants",
    image: "/assets/imgs/defile/defile-01.jpeg",
  },
];

interface ProgrammePageProps {
  category?: string;
}

export default function ProgrammePage({ category }: ProgrammePageProps) {
  // Get category-specific data
  const getCategoryData = () => {
    const categoryMap: { [key: string]: { 
      title: string; 
      subtitle: string; 
      image: string;
      description: string[];
      highlights?: { title: string; items: string[] }[];
      galleryImages: string[];
    } } = {
      dance: {
        title: "Danse",
        subtitle: "Vivez des performances de danse captivantes célébrant notre héritage culturel à travers des mouvements gracieux et des chorégraphies envoûtantes",
        image: "/assets/imgs/dance/dance-14.jpeg",
        description: [
          "La danse est l'une des sections les plus dynamiques et attendues de la Journée Culturelle ESGAE. C'est une célébration vibrante de la diversité culturelle à travers le mouvement, le rythme et l'expression artistique.",
          "Nos artistes talentueux présentent des performances mêlant danse traditionnelle africaine, danse contemporaine et styles modernes. Chaque performance raconte une histoire, transmet une émotion et célèbre notre patrimoine culturel.",
          "Que ce soit des mouvements gracieux, des rythmes énergiques ou des compositions originales, la danse à ESGAE est une expérience inoubliable qui unit les spectateurs dans une célébration commune."
        ],
        highlights: [
          {
            title: "Genres représentés",
            items: [
              "Danse traditionnelle africaine",
              "Danse contemporaine",
              "Hip-hop & Street Jazz",
              "Danse fusion"
            ]
          },
          {
            title: "Moments clés",
            items: [
              "Ouverture de la danse en direct",
              "Performances des groupes de danse",
              "Dance battle & compétition",
              "Grand finale avec tous les danseurs"
            ]
          }
        ],
        galleryImages: [
          "/assets/imgs/dance/dance-01.jpeg",
          "/assets/imgs/dance/dance-02.jpeg",
          "/assets/imgs/dance/dance-03.jpeg",
          "/assets/imgs/dance/dance-04.jpeg",
          "/assets/imgs/dance/dance-05.jpeg",
          "/assets/imgs/dance/dance-06.jpeg",
          "/assets/imgs/dance/dance-07.jpeg",
          "/assets/imgs/dance/dance-08.jpeg",
          "/assets/imgs/dance/dance-09.jpeg",
          "/assets/imgs/dance/dance-10.jpeg",
          "/assets/imgs/dance/dance-11.jpeg",
          "/assets/imgs/dance/dance-12.jpeg",
          "/assets/imgs/dance/dance-13.jpeg",

        ]
      },
      chant: {
        title: "Chant",
        subtitle: "Écoutez des artistes talentueux interpréter des chansons inspirantes qui touchent le cœur et élèvent l'esprit",
        image: "/assets/imgs/chant/chant-01.jpeg",
        description: [
          "Le chant est une célébration de la voix humaine et de sa puissance à émouvoir, inspirer et unir. À la Journée Culturelle ESGAE, les artistes vocaux présentent des performances magnifiques qui mêlent tradition et modernité.",
          "Des mélodies douces aux performances énergiques, en passant par des arrangements contemporains de classiques, chaque performance raconte une histoire et touche le cœur du public.",
          "Le chant à ESGAE est un moment de connexion émotionnelle, de partage culturel et de célébration du talent artistique de notre communauté."
        ],
        highlights: [
          {
            title: "Styles musicaux",
            items: [
              "Soul & R&B",
              "Pop & Variété",
              "Musique traditionnelle africaine",
              "Gospel & Spirituals"
            ]
          },
          {
            title: "Moments clés",
            items: [
              "Solos vocaux mesmerisant",
              "Duets & arrangements vocaux",
              "Chants en groupe",
              "Finale avec tous les artistes"
            ]
          }
        ],
        galleryImages: [
          "/assets/imgs/chant/chant-01.jpeg",
          "/assets/imgs/chant/chant-02.jpeg",
          "/assets/imgs/chant/chant-03.jpeg",
          "/assets/imgs/chant/chant-04.jpeg",
          "/assets/imgs/chant/chant-05.jpeg"
        ]
      },
      miss: {
        title: "Élection Miss ESGAE",
        subtitle: "Participez à l'un des moments les plus attendus de la Journée Culturelle, où la beauté et l'intelligence se rencontrent",
        image: "/assets/imgs/miss/miss-07.jpeg",
        description: [
          "L'Élection Miss ESGAE est bien plus qu'un concours de beauté. C'est une célébration de confiance, de charisme et de représentation féminine. Cette section met en lumière les femmes exceptionnelles de notre communauté académique.",
          "Les candidates présentent leur talent, leur personnalité et leur vision, créant un spectacle captivant et inspirant pour le public. C'est une opportunité de briller, de se connecter avec la communauté et de représenter les valeurs d'ESGAE.",
          "Cette édition promet d'être exceptionnelle avec des candidates dynamiques et talentueuses, des performances spectaculaires et des moments inoubliables."
        ],
        highlights: [
          {
            title: "Catégories",
            items: [
              "Miss ESGAE",
              "Première Dauphine",
              "Deuxième Dauphine",
              "Meilleure Performance"
            ]
          },
          {
            title: "Moments clés",
            items: [
              "Présentation des candidates",
              "Épreuves de talent",
              "Épreuves de question",
              "Couronnement de Miss ESGAE"
            ]
          }
        ],
        galleryImages: [
          "/assets/imgs/miss/miss-01.jpeg",
           "/assets/imgs/miss/miss-02.jpeg",
            "/assets/imgs/miss/miss-03.jpeg",
             "/assets/imgs/miss/miss-04.jpeg",
              "/assets/imgs/miss/miss-05.jpeg",
               "/assets/imgs/miss/miss-06.jpeg",
       
        ]
      },
      theatre: {
        title: "Théâtre",
        subtitle: "Découvrez des sketches et pièces de théâtre pleins d'humour et d'émotions qui racontent nos histoires",
        image: "/assets/imgs/theatre/theatre-01.jpeg",
        description: [
          "Le théâtre est l'art de raconter des histoires à travers la performance vivante. À ESGAE, nos étudiants explorent cet art sous toutes ses formes, du comédie au drame, en passant par la tragédie et la comédie musicale.",
          "Nos pièces de théâtre reflètent les préoccupations sociales, les aspirations culturelles et les expériences personnelles de notre communauté. Chaque performance est une invitation à la réflexion et à l'émotion.",
          "Le théâtre à ESGAE est une plateforme d'expression créative où les talents de nos étudiants s'épanouissent et où le public découvre des perspectives nouvelles et touchantes."
        ],
        highlights: [
          {
            title: "Genres théâtraux",
            items: [
              "Comédie",
              "Drame",
              "Tragédie",
              "Théâtre expérimental"
            ]
          },
          {
            title: "Moments clés",
            items: [
              "Pièces originales",
              "Classiques revisités",
              "Monologues puissants",
              "Scènes collectives"
            ]
          }
        ],
        galleryImages: [
          "/assets/imgs/theatre/theatre-01.jpeg",
          "/assets/imgs/theatre/theatre-02.jpeg",
        ]
      },
      defile: {
        title: "Défilé",
        subtitle: "Assistez au défilé coloré des nations et départements représentés, célébrant notre diversité culturelle",
        image: "/assets/imgs/defile/defile-01.jpeg",
        description: [
          "Le défilé est l'une des sections les plus spectaculaires de la Journée Culturelle ESGAE. C'est une célébration de notre diversité culturelle à travers les tenues traditionnelles, les couleurs vibrantes et les mouvements gracieux.",
          "Chaque groupe représente une nation, une région ou un département avec fierté, présentant ses traditions, son histoire et sa culture. C'est un spectacle visuel éblouissant qui unit toutes nos communautés.",
          "Le défilé à ESGAE est plus qu'une simple procession - c'est une affirmation de notre identité collective, un hommage à nos racines et une célébration de notre unité dans la diversité."
        ],
        highlights: [
          {
            title: "Représentations",
            items: [
              "Nations africaines",
              "Régions du Cameroun",
              "Départements représentés",
              "Groupes culturels"
            ]
          },
          {
            title: "Moments clés",
            items: [
              "Ouverture du défilé",
              "Présentation des groupes",
              "Performance culturelle",
              "Clôture spectaculaire"
            ]
          }
        ],
        galleryImages: [
          "/assets/imgs/defile/defile-01.jpeg",
          "/assets/imgs/defile/defile-02.jpeg",
          "/assets/imgs/defile/defile-03.jpeg",
          "/assets/imgs/defile/defile-04.jpeg",
          "/assets/imgs/defile/defile-05.jpeg",
          "/assets/imgs/defile/defile-06.jpeg",
          "/assets/imgs/defile/defile-07.jpeg",
          "/assets/imgs/defile/defile-08.jpeg",
          "/assets/imgs/defile/defile-09.jpeg"
        ]
      },
    };

    return categoryMap[category || ""] || {
      title: "Au programme",
      subtitle: "Découvrez toutes les activités et animations de cette édition",
      image: "/assets/imgs/jc/jc-01.jpeg",
      description: [],
      galleryImages: []
    };
  };

  const categoryData = getCategoryData();

  return (
    <>
      {/* Hero Section */}
      <div className="lg:pt-0">
        <ProgrammeHero
          title={categoryData.title}
          subtitle={categoryData.subtitle}
          backgroundImage={categoryData.image}
        />
      </div>

      {/* Category Description */}
      {category && (
        <CategoryDescription
          category={categoryData.title}
          description={categoryData.description}
          highlights={categoryData.highlights}
        />
      )}

      {/* Category Gallery */}
      {category && (
        <CategoryGallery
          category={categoryData.title}
          images={categoryData.galleryImages}
        />
      )}

      {/* Other Programmes Links */}
      <ProgrammeLinks currentCategory={category} />

      {/* Back to Home Button */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <Link href="/#program">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-primary border-primary/20 hover:bg-primary/90 hover:border-primary transition-all duration-300 gap-2"
                >
                  <Home className="w-4 h-4" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
