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
    <div className="flex flex-col gap-1 ">
      {/* Title */}
      <h3 className="text-base font-bold text-foreground font-poppins line-clamp-1 mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-xs mb-3 line-clamp-2 leading-snug">{description}</p>

      {/* Category Image */}
      <div className="relative w-full h-40 sm:h-48 mb-3 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={`${title} category image`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="mt-auto inline-flex items-center gap-2 text-xs font-semibold text-foreground/90 hover:text-primary transition-colors">
        <span className="underline-offset-4 group-hover:underline group-hover:text-primary">Voir plus</span>
        <ArrowRight className="h-3 w-3 motion-safe:group-hover:translate-x-1 transition-transform duration-300 group-hover:text-primary" />
      </div>

      {/* Bottom accent line */}
      <div className="h-1 w-0 bg-gradient-hero rounded-full mt-3 group-hover:w-full transition-all duration-500" />
    </div>
  );

  const card = (
    <Card className="h-80 sm:h-96 cursor-pointer rounded-2xl border-border/70 shadow-sm transition-all duration-300 group-hover:shadow-xl hover:border-primary group-hover:border-primary group-hover:text-primary motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] active:scale-[0.99] overflow-hidden">
      <CardContent className="p-4 sm:p-6 flex flex-col">
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
