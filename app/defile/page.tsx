"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GalleryGlobe from "@/components/GalleryGlobe";
import ActivityNav from "@/components/ActivityNav";

export default function DefilePage() {
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
          <h1 className="text-2xl font-bold font-montserrat">Défilé</h1>
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
            <span className="bg-gradient-hero bg-clip-text text-transparent">Défilé</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Assistez au défilé coloré des nations et départements représentés
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16 fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
              À propos du défilé
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Le défilé est l'un des moments les plus spectaculaires de la Journée Culturelle. C'est une procession colorée et vivante où les nations, régions et groupes culturels d'ESGAE se présentent avec fierté et créativité.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              À travers des costumes traditionnels, des bannières culturelles et des performances ambulantes, le défilé célèbre la diversité, l'unité et la richesse culturelle de notre communauté académique. C'est un spectacle gratuit et ouvert à tous.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque groupe apporte sa propre essence, créant une symphonie visuelle de couleurs, de musiques et de mouvements qui enchantent les spectateurs.
            </p>
          </div>

          {/* Previous Edition */}
          <div className="mb-16 bg-card rounded-2xl p-8 border border-border/50">
            <h4 className="text-2xl font-bold font-montserrat mb-6">Édition 2025</h4>
            <p className="text-muted-foreground leading-relaxed mb-8">
              L'édition 2025 a vu plus de 30 groupes défiler, représentant plus de 25 nations et régions différentes. Le défilé a duré plus de 2 heures, avec des costumes spectaculaires et une ambiance festive. Plus de 8000 spectateurs ont assisté à cet événement coloré.
            </p>
            
            {/* Gallery Globe */}
            <GalleryGlobe images={galleryImages} autoRotate={true} rotationSpeed={2} />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-primary">Catégories de groupes</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Groupes nationaux
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Groupes régionaux
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Associations culturelles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Groupes artistiques
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-accent">Moments clés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Assemblée et préparation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Cortège officiel de départ
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Défilé principal coloré
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Finale célébrative
                </li>
              </ul>
            </div>
          </div>

          {/* Other Activities Navigation */}
          <ActivityNav currentActivity="defile" />
        </div>
      </section>
    </div>
  );
}
