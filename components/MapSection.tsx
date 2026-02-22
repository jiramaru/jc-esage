"use client";

import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MapSection() {
  return (
    <section
      id="localisation"
      className="py-16 sm:py-24 bg-background relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-16">
          <SectionTitle
            title="Nous trouver"
            subtitle="ESGAE, Avenue Cité des 17, Moukondo"
          />
        </Reveal>

        {/* Map Container */}
        <Reveal>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/20 h-96 md:h-96 hover:shadow-2xl transition-shadow duration-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.9883338129953!2d15.26620521302171!3d-4.228318377340429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6bccd8b019b529%3A0x21be820b31837d87!2sEcole%20Sup%C3%A9rieure%20de%20Gestion%20et%20d'Administration%20des%20Entreprises!5e0!3m2!1sfr!2snl!4v1771486232583!5m2!1sfr!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </Reveal>

        {/* Action Buttons */}
        <Reveal className="flex flex-col sm:flex-row gap-4 justify-center mt-10" delay={0.05}>
          <a
            href="https://www.google.com/maps/search/ESGAE+Moukondo+Cameroon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-2xl gap-2 hover:shadow-lg hover:scale-105 transition-all"
            >
              <ExternalLink size={20} />
              Ouvrir dans Google Maps
            </Button>
          </a>

        </Reveal>

        {/* Address Info */}
        <Reveal delay={0.1}>
          <div className="mt-12 bg-card rounded-2xl p-8 shadow-md border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat flex items-center gap-3">
              <Navigation className="text-primary" size={28} />
              Adresse Complète
            </h3>
            <p className="text-lg font-semibold text-foreground mb-2">
              ESGAE
            </p>
            <p className="text-muted-foreground">
              Avenue Cité des 17<br />
              Moukondo, Cameroon
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
