"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ActivityNavProps {
  currentActivity: "dance" | "chant" | "miss" | "theatre" | "defile";
}

const activities = [
  {
    id: "dance",
    name: "Danse",
    description: "Performances de danse captivantes",
    href: "/dance",
    color: "from-primary to-accent",
  },
  {
    id: "chant",
    name: "Chant",
    description: "Artistes talentueux et mélodies inspirantes",
    href: "/chant",
    color: "from-accent to-primary",
  },
  {
    id: "miss",
    name: "Miss ESGAE",
    description: "Élection & talents exceptionnels",
    href: "/miss",
    color: "from-primary/80 to-accent/80",
  },
  {
    id: "theatre",
    name: "Théâtre",
    description: "Sketches comiques et pièces dramatiques",
    href: "/theatre",
    color: "from-accent/80 to-primary/80",
  },
  {
    id: "defile",
    name: "Défilé",
    description: "Cortège coloré des nations",
    href: "/defile",
    color: "from-primary/60 to-accent/60",
  },
];

export default function ActivityNav({ currentActivity }: ActivityNavProps) {
  const otherActivities = activities.filter((a) => a.id !== currentActivity);

  return (
    <div className="py-12">
      <h3 className="text-3xl font-bold font-montserrat mb-8 text-center">
        Explorez les autres activités
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {otherActivities.map((activity) => (
          <Link key={activity.id} href={activity.href}>
            <Card className="h-full rounded-2xl border-border/50 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group bg-card hover:border-primary/50">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${activity.color} mb-4 opacity-80`}
                  />
                  <h4 className="text-lg font-bold font-montserrat text-foreground mb-2 group-hover:text-primary transition-colors">
                    {activity.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Découvrir</span>
                  <ArrowRight size={16} />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
