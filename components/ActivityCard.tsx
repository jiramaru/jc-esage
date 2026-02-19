"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
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
  delay = 0,
  href,
}: ActivityCardProps) {
  const link = href || activityLinks[title] || "#";
  const isLink = link !== "#";

  const cardContent = (
    <>
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="text-primary" size={32} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-foreground mb-3 font-montserrat">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>

      {/* Bottom accent line */}
      <div className="h-1 w-0 bg-gradient-hero rounded-full mt-6 group-hover:w-full transition-all duration-500" />
    </>
  );

  const card = (
    <Card className="h-full rounded-2xl border-border/70 shadow-sm transition-all duration-300 group-hover:shadow-xl hover:border-primary/50 hover:scale-105">
      <CardContent className="p-8">
        {cardContent}
      </CardContent>
    </Card>
  );

  return (
    <div
      className="group slide-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      {isLink ? (
        <Link href={link} className="block h-full">
          {card}
        </Link>
      ) : (
        card
      )}
    </div>
  );
}
