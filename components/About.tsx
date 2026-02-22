"use client";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { BookOpen, Users, Palette, Globe } from "lucide-react";

const FEATURES = [
  {
    icon: BookOpen,
    title: "Éducation",
    description: "Promouvoir le partage des connaissances et du savoir à travers la culture, en faisant de l'apprentissage un levier d'ouverture, de réflexion et de transmission.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Fédérer les étudiants autour de passions communes, encourager l'échange, la solidarité et la création de liens durables au sein d'une communauté engagée.",
  },
  {
    icon: Palette,
    title: "Culture",
    description: "Valoriser et célébrer la diversité culturelle et artistique sous toutes ses formes, en mettant en lumière les identités et les talents.",
  },
  {
    icon: Globe,
    title: "Progrès",
    description: "Démontrer que la culture est un moteur essentiel du développement social, économique et humain, capable d'inspirer l'innovation et de bâtir l'avenir.",
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
            Née il y'a 4 ans, la Journée Culturelle est l'un des événements phares organisés par l'association des étudiants et anciens (AEA) sous la supervision de l'Ecole Supérieure de Gestion et d'Administration des Entreprises (ESGAE).
          </p>
          <p className="text-lg text-foreground font-semibold leading-relaxed">
            Cette journée devenue emblématique, loin d'être anodine, est à ce jour le rendez-vous étudiant à ne pas manquer.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La journée culturelle est l'événement qui nous rassemble autour d'une seule et même cause : la célébration de l'interculturalité.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Participer à cet événement, c'est prôner la culture et reconnaître son importance.
          </p>
          <p className="text-lg text-foreground font-semibold leading-relaxed">
            Vibrante et stimulante, participer à cette belle et grande journée ne vous fera regretter qu'une seule chose : devoir attendre une année supplémentaire avant la prochaine édition.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cet événement rassemble nos étudiants ainsi que tous ceux qui veulent participer, dans une célébration commune de l'art, de la musique, de la danse et du théâtre. C'est un moment unique et inoubliable de partage, de découverte et de fierté culturelle.
          </p>
          <p className="text-lg text-foreground font-semibold leading-relaxed">
            Si vous avez manqué l'édition passée, ne ratez pas celle de cette année, car demain sera mieux qu'hier.
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
