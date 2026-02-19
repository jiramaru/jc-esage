"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GalleryGlobe from "@/components/GalleryGlobe";
import ActivityNav from "@/components/ActivityNav";

export default function TheatrePage() {
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
          <h1 className="text-2xl font-bold font-montserrat">Théâtre</h1>
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
            <span className="bg-gradient-hero bg-clip-text text-transparent">Théâtre</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez des sketches et pièces de théâtre pleins d'humour et d'émotions
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16 fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
              À propos du théâtre
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Le théâtre à ESGAE est un art vivant qui transcende les frontières. À travers des sketches comiques, des pièces dramatiques et des adaptations créatives, nos comédiens enchantent et émeuvent le public.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Chaque performance est une occasion d'explorer la condition humaine, de faire rire, de faire réfléchir et de partager des émotions authentiques avec l'audience. Le théâtre à ESGAE c'est la magie de l'expression artistique live.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Des histoires tirées de la vie quotidienne aux adaptations de classiques, le théâtre reste l'une des sections les plus appréciées et attendues de notre événement.
            </p>
          </div>

          {/* Previous Edition */}
          <div className="mb-16 bg-card rounded-2xl p-8 border border-border/50">
            <h4 className="text-2xl font-bold font-montserrat mb-6">Édition 2025</h4>
            <p className="text-muted-foreground leading-relaxed mb-8">
              L'édition 2025 a présenté plus de 12 pièces théâtrales et sketches comiques qui ont ravi le public. Avec des comédiens talentueux et des histoires captivantes, la section théâtre a reçu une ovation debout de la part des spectateurs.
            </p>
            
            {/* Gallery Globe */}
            <GalleryGlobe images={galleryImages} autoRotate={true} rotationSpeed={2} />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-primary">Genres présentés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Sketches humoristiques
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Pièces dramatiques
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Comédies musicales
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Improv & one-man shows
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-accent">Moments clés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Sketches comiques remplis d'énergie
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Pièces dramatiques émouvantes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Mise en scène créative
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Interaction avec le public
                </li>
              </ul>
            </div>
          </div>

          {/* Other Activities Navigation */}
          <ActivityNav currentActivity="theatre" />
        </div>
      </section>
    </div>
  );
}
