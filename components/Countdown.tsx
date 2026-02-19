"use client";

import { useState, useEffect } from "react";
import { Clock, CheckCircle, Share2, PartyPopper, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";

function CountdownBox({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  return (
    <div
      className="scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-gradient-hero rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow hover:scale-105 duration-300">
        <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-montserrat">
          {String(value).padStart(2, "0")}
        </div>
        <div className="text-sm sm:text-base text-white/80 mt-2">{label}</div>
      </div>
    </div>
  );
}

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export default function Countdown() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      // Target date: April 4, 2026, 09:00 AM
      const targetDate = new Date("2026-04-04T09:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
        isComplete: false,
      });
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {countdown.isComplete ? (
          <div className="text-center py-12 space-y-6 fade-in">
            <div className="flex justify-center mb-4 animate-bounce">
              <PartyPopper className="w-14 h-14 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-montserrat flex items-center justify-center gap-3">
              <CheckCircle className="w-10 h-10 text-primary" />
              C&apos;est aujourd&apos;hui !
            </h2>
            <p className="text-lg text-muted-foreground">
              Bienvenue à la Journée Culturelle ESGAE 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl gap-2 hover:scale-105 transition-transform">
                <CalendarDays className="w-4 h-4" />
                Voir le programme du jour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-primary text-primary hover:bg-primary/5 gap-2"
              >
                <Share2 className="w-4 h-4" />
                Partager l&apos;événement
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center space-y-2 slide-in-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-montserrat flex items-center justify-center gap-3">
                <Clock className="w-10 h-10 text-primary" />
                Compte à rebours
              </h2>
              <p className="text-muted-foreground">
                Jusqu&apos;à la Journée Culturelle ESGAE
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CountdownBox value={countdown.days} label="Jours" delay={0.2} />
              <CountdownBox
                value={countdown.hours}
                label="Heures"
                delay={0.25}
              />
              <CountdownBox
                value={countdown.minutes}
                label="Minutes"
                delay={0.3}
              />
              <CountdownBox
                value={countdown.seconds}
                label="Secondes"
                delay={0.35}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
