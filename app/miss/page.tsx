"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GalleryGlobe from "@/components/GalleryGlobe";
import ActivityNav from "@/components/ActivityNav";

export default function MissPage() {
  const galleryImages = [
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/#programme">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour au programme
            </Button>
          </Link>
          <h1 className="text-2xl font-bold font-montserrat">Élection Miss ESGAE</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full flex items-center justify-center overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/15 z-0" />
        <div
          aria-hidden="true"
          className="absolute -top-24 -left-24 size-[22rem] rounded-full blur-3xl opacity-40 float"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgb(217 142 4 / 0.6), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium">
            Section Culturelle 2026
          </Badge>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight font-montserrat">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Miss ESGAE</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Participez à l'une des sections les plus attendues de la Journée Culturelle
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16 fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
              À propos de l'Élection Miss ESGAE
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              L'Élection Miss ESGAE est bien plus qu'un concours de beauté. C'est une célébration de confiance, de charisme et de représentation féminine. Cette section met en lumière les femmes exceptionnelles de notre communauté académique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Les candidates présentent leur talent, leur personnalité et leur vision, créant un spectacle captivant et inspirant pour le public. C'est une opportunité de briller, de se connecter avec la communauté et de représenter les valeurs d'ESGAE.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cette édition promet d'être exceptionnelle avec des candidates dynamiques et talentueuses, des performances spectaculaires et des moments inoubliables.
            </p>
          </div>

          {/* Previous Edition */}
          <div className="mb-16 bg-card rounded-2xl p-8 border border-border/50">
            <h4 className="text-2xl font-bold font-montserrat mb-6">Édition 2025</h4>
            <p className="text-muted-foreground leading-relaxed mb-8">
              L'édition 2025 a couronné Miss ESGAE 2025, accompagnée de première et deuxième dauphines. Les performances des candidates ont fasciné le public avec des talents divers et des prestations mémorables. Plus de 5000 spectateurs ont suivi le concours en direct.
            </p>
            
            {/* Gallery Globe */}
            <GalleryGlobe images={galleryImages} autoRotate={true} rotationSpeed={2} />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-primary">Catégories</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Miss ESGAE
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Première Dauphine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Deuxième Dauphine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Meilleure Performance
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-accent">Moments clés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Présentation des candidates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Épreuves de talent
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Épreuves de question
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Couronnement de Miss ESGAE
                </li>
              </ul>
            </div>
          </div>

          {/* Other Activities Navigation */}
          <ActivityNav currentActivity="miss" />
        </div>
      </section>
    </div>
  );
}
