"use client";

import SectionTitle from "./SectionTitle";
import { MapPin, Clock, Ticket, DollarSign, Info } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const EVENT_INFO = [
  {
    icon: MapPin,
    label: "Lieu",
    value: "ESGAE, Avenue Cité des 17",
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
    subvalue: "À l&apos;entrée",
  },
];

export default function EventInfo() {
  return (
    <section
      id="infos"
      className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 fade-in">
          <SectionTitle
            title="Informations Pratiques"
            subtitle="Tout ce que vous devez savoir"
          />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_INFO.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="group scale-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <Card className="rounded-2xl border-border/70 shadow-sm transition-all duration-300 group-hover:shadow-lg hover:border-primary/30 hover:scale-105 h-full">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Label */}
                    <p className="text-xs text-muted-foreground font-medium mb-2 uppercase tracking-wide">
                      {info.label}
                    </p>

                    {/* Main Value */}
                    <h3 className="text-2xl font-bold text-foreground mb-1 font-montserrat">
                      {info.value}
                    </h3>

                    {/* Sub Value */}
                    <p className="text-sm text-accent font-semibold">{info.subvalue}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Important Note */}
        <div
          className="mt-16 bg-primary/10 border border-primary/30 rounded-2xl p-6 max-w-2xl mx-auto slide-in-up flex gap-4"
          style={{ animationDelay: "0.3s" }}
        >
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
      </div>
    </section>
  );
}
