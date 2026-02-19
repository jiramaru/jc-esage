"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GalleryGlobe from "@/components/GalleryGlobe";
import ActivityNav from "@/components/ActivityNav";

export default function DancePage() {
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
          <h1 className="text-2xl font-bold font-montserrat">Danse</h1>
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
        <div
          aria-hidden="true"
          className="absolute -bottom-32 -right-32 size-[26rem] rounded-full blur-3xl opacity-35 float"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgb(16 185 129 / 0.55), transparent 60%)",
            animationDelay: "2s",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium">
            Section Culturelle 2026
          </Badge>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight font-montserrat">
            <span className="bg-gradient-hero bg-clip-text text-transparent">Danse</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Vivez des performances de danse captivantes célébrant notre héritage culturel
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16 fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
              À propos de la danse
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              La danse est l'une des sections les plus dynamiques et attendues de la Journée Culturelle ESGAE. C'est une célébration vibrante de la diversité culturelle à travers le mouvement, le rythme et l'expression artistique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nos artistes talentueux présentent des performances mêlant danse traditionnelle africaine, danse contemporaine et styles modernes. Chaque performance raconte une histoire, transmet une émotion et célèbre notre patrimoine culturel.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Que ce soit des mouvements gracieux, des rythmes énergiques ou des compositions originales, la danse à ESGAE est une expérience inoubliable qui unit les spectateurs dans une célébration commune.
            </p>
          </div>

          {/* Previous Edition */}
          <div className="mb-16 bg-card rounded-2xl p-8 border border-border/50">
            <h4 className="text-2xl font-bold font-montserrat mb-6">Édition 2025</h4>
            <p className="text-muted-foreground leading-relaxed mb-8">
              L'édition 2025 a été marquée par des performances spectaculaires mettant en avant les talents danser de nos étudiants. Avec plus de 15 groupes de danse et plus de 200 danseurs, cette édition a établi des records en termes de participation et d'engagement.
            </p>
            
            {/* Gallery Globe */}
            <GalleryGlobe images={galleryImages} autoRotate={true} rotationSpeed={2} />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-primary">Genres représentés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Danse traditionnelle africaine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Danse contemporaine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Hip-hop & Street Jazz
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Danse fusion
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-accent">Moments clés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Ouverture de la danse en direct
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Performances des groupes de danse
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Dance battle & compétition
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Grand finale avec tous les danseurs
                </li>
              </ul>
            </div>
          </div>

          {/* Other Activities Navigation */}
          <ActivityNav currentActivity="dance" />
        </div>
      </section>
    </div>
  );
}
