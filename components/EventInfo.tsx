"use client";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { MapPin, Clock, Ticket, DollarSign, Info } from "lucide-react";

const EVENT_INFO = [
  {
    icon: MapPin,
    label: "Lieu",
    value: "ESGAE",
    detail: "Moukondo",
  },
  {
    icon: Clock,
    label: "Heure",
    value: "09h00",
    detail: "Samedi 04 Avril 2026",
  },
  {
    icon: DollarSign,
    label: "PAF (Prix d'Accès)",
    value: "1000 CFA",
    detail: "Francs",
  },
  {
    icon: Ticket,
    label: "Billets",
    value: "Sur place",
    detail: "Au bureau de l'AEA",
  },
];

export default function EventInfo() {
  return (
    <section
      id="infos"
      className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
        <Reveal className="mb-12">
          <SectionTitle
            title="Informations Pratiques"
            subtitle="Tout ce que vous devez savoir"
          />
        </Reveal>

        {/* Table-like Layout */}
        <Reveal>
          <div className="bg-card rounded-2xl border border-border/50 shadow-md overflow-hidden">
            {/* Table Rows */}
            <div className="divide-y divide-border/50">
              {EVENT_INFO.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="grid sm:grid-cols-3 gap-3 sm:gap-0 p-4 sm:p-6 hover:bg-accent/5 transition-colors duration-200 items-start sm:items-center"
                  >
                    {/* Mobile Label */}
                    <div className="sm:hidden flex items-center gap-3 col-span-4 mb-2">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {info.label}
                      </span>
                    </div>

                    {/* Desktop Icon + Label */}
                    <div className="hidden sm:flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {info.label}
                      </span>
                    </div>

                    {/* Value Column */}
                    <div className="sm:col-span-1">
                      <p className="text-lg sm:text-xl font-bold text-foreground font-poppins">{info.value}</p>
                    </div>

                    {/* Detail Column */}
                    <div className="sm:col-span-1">
                      <p className="text-sm text-accent font-semibold">{info.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Important Note */}
        <Reveal delay={0.1} className="mt-8 sm:mt-12">
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-4 sm:p-6 flex gap-4">
            <Info className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm sm:text-base text-foreground font-semibold mb-2">
                ℹ️ Important
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
