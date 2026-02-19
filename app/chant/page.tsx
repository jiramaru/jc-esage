"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ChantPage() {
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
          <h1 className="text-2xl font-bold font-montserrat">Chant</h1>
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
            <span className="bg-gradient-hero bg-clip-text text-transparent">Chant</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Écoutez des artistes talentueux interpréter des chansons inspirantes
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Description */}
          <div className="mb-16 fade-in">
            <h3 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6">
              À propos du chant
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Le chant est une célébration de la voix humaine et de sa puissance à émouvoir, inspirer et unir. À la Journée Culturelle ESGAE, les artistes vocaux présentent des performances magnifiques qui mêlent tradition et modernité.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Des mélodies douces aux performances énergiques, en passant par des arrangements contemporains de classiques, chaque performance raconte une histoire et touche le cœur du public.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le chant à ESGAE est un moment de connexion émotionnelle, de partage culturel et de célébration du talent artistique de notre communauté.
            </p>
          </div>

          {/* Previous Edition */}
          <div className="mb-16 bg-card rounded-2xl p-8 border border-border/50">
            <h4 className="text-2xl font-bold font-montserrat mb-4">Édition 2025</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              L'édition 2025 a proposé plus de 20 performances vocales diverses, des solos inspirants aux arrangements de groupe. Le public a été captivé par la qualité des voix et la diversité des styles musicaux présentés.
            </p>
            
            {/* Gallery placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-hero rounded-lg flex items-center justify-center text-muted-foreground hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-sm">Photo {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-primary">Styles musicaux</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Soul & R&B
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Pop & Variété
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Musique traditionnelle africaine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Gospel & Spirituals
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border/50">
              <h5 className="text-xl font-bold font-montserrat mb-3 text-accent">Moments clés</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Solos vocaux mesmerisant
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Duets & arrangements vocaux
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Chants en groupe
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Finale avec tous les artistes
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-hero rounded-2xl p-8 text-black">
            <h5 className="text-2xl font-bold font-montserrat mb-4">Prêt à partager votre voix?</h5>
            <p className="mb-6">Inscrivez-vous ou partagez votre talent lors de la Journée Culturelle ESGAE 2026</p>
            <Link href="/#localisation">
              <Button size="lg" className="rounded-2xl gap-2">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
