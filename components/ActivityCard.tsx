"use client";

import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ActivityCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ActivityCardProps) {
  return (
    <div
      className="group slide-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <Card className="h-full rounded-2xl border-border/70 shadow-sm transition-all duration-300 group-hover:shadow-xl hover:border-primary/50 hover:scale-105">
        <CardContent className="p-8">
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
        </CardContent>
      </Card>
    </div>
  );
}
