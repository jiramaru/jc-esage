"use client";

import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import Reveal from "./Reveal";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  delay?: number;
  href?: string;
}

const activityLinks: { [key: string]: string } = {
  Danse: "/dance",
  Chant: "/chant",
  "Élection Miss ESGAE": "/miss",
  Théâtre: "/theatre",
  Défilé: "/defile",
};

export default function ActivityCard({
  icon: Icon,
  title,
  description,
  image,
  delay = 0,
  href,
}: ActivityCardProps) {
  const link = href || activityLinks[title] || "#";
  const isLink = link !== "#";

  const cardContent = (
    <>
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6 motion-safe:group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="text-primary" size={32} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-3 font-montserrat">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed text-sm mb-6">{description}</p>

      {/* Category Image */}
      <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={`${title} category image`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary transition-colors">
        <span className="underline-offset-4 group-hover:underline group-hover:text-primary">Voir plus</span>
        <ArrowRight className="h-4 w-4 motion-safe:group-hover:translate-x-1 transition-transform duration-300 group-hover:text-primary" />
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-0 bg-gradient-hero rounded-full mt-6 group-hover:w-full transition-all duration-500" />
    </>
  );

  const card = (
    <Card className="h-full cursor-pointer rounded-2xl border-border/70 shadow-sm transition-all duration-300 group-hover:shadow-xl hover:border-primary group-hover:border-primary group-hover:text-primary motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] active:scale-[0.99]">
      <CardContent className="p-8">
        {cardContent}
      </CardContent>
    </Card>
  );

  return (
    <Reveal className="group" delay={delay}>
      {isLink ? (
        <Link
          href={link}
          className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${title} - Voir plus`}
        >
          {card}
        </Link>
      ) : (
        card
      )}
    </Reveal>
  );
}
