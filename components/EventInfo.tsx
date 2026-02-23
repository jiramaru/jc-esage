"use client";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { MapPin, Clock, Ticket, DollarSign, Info } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const EVENT_INFO = [
  {
    icon: MapPin,
    label: "Lieu",
    value: "ESGAE",
    subvalue: "Moukondo",
  },
  {
    icon: Clock,
    label: "Heure",
    value: "09h00",
    subvalue: "Samedi 04 Avril 2026",
  },
  {
    icon: DollarSign,
    label: "PAF",
    value: "1000",
    subvalue: "Francs",
  },
  {
    icon: Ticket,
    label: "Billets",
    value: "Sur place",
    subvalue: "Au burreau de l'AEA",
  },
];

export default function EventInfo() {
  return (
    <section
      id="infos"
      className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
        <Reveal className="mb-16">
          <SectionTitle
            title="Informations Pratiques"
            subtitle="Tout ce que vous devez savoir"
          />
        </Reveal>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_INFO.map((info, index) => {
            const Icon = info.icon;
            return (
              <Reveal key={index} delay={0.05 + index * 0.05} className="group">
                <Card className="rounded-2xl border-border/70 shadow-sm transition-all duration-300 group-hover:shadow-lg hover:border-primary/30 hover:scale-101 h-full">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="text-primary" size={28} />
                    </div>

                    {/* Label */}
                    <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wide">
                      {info.label}
                    </p>

                    {/* Main Value */}
                    <h3 className="text-2xl font-bold text-foreground mb-1 font-poppins">
                      {info.value}
                    </h3>

                    {/* Sub Value */}
                    <p className="text-sm text-accent font-semibold">{info.subvalue}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Important Note */}
        <Reveal delay={0.1}>
          <div className="mt-16 bg-primary/10 border border-primary/30 rounded-2xl p-6 max-w-2xl mx-auto flex gap-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-foreground font-semibold mb-2 flex items-center gap-2">
                <Info className="size-4 text-primary" />
                Important
              </p>
              <p className="text-muted-foreground">
                Arrivez à l&apos;heure pour profiter au maximum de l&apos;événement. Les
                inscriptions se feront à l&apos;entrée. Préparez votre présence pour une
                journée inoubliable !
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
