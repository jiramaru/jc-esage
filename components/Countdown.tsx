"use client";

import React, { useState, useEffect } from "react";
import { Clock, CheckCircle, Share2, PartyPopper, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  const displayValue = String(value).padStart(2, "0");
  
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      <div className="bg-accent from-primary to-accent text-white rounded-lg px-2 sm:px-4 py-2 sm:py-6 min-w-12 sm:min-w-20 text-center shadow-lg">
        <div className="text-xl sm:text-4xl lg:text-5xl font-bold font-poppins tabular-nums leading-tight">
          {displayValue}
        </div>
      </div>
      <span className="text-[10px] sm:text-sm text-muted-foreground font-medium uppercase tracking-tighter sm:tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) {
    return (
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-8" />
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-8">
        {countdown.isComplete ? (
          <Reveal>
            <div className="text-center py-12 space-y-6">
              <div className="flex justify-center mb-4 animate-bounce">
                <PartyPopper className="w-14 h-14 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-poppins flex items-center justify-center gap-3">
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
          </Reveal>
        ) : (
          <div className="space-y-6 sm:space-y-12">
            <Reveal>
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-5xl font-bold text-foreground font-poppins flex items-center justify-center gap-2 sm:gap-3">
                  <Clock className="w-6 sm:w-10 h-6 sm:h-10 text-primary" />
                  Compte à rebours
                </h2>
                <p className="text-xs sm:text-base text-muted-foreground">
                  Jusqu&apos;à la Journée Culturelle de l&apos;ESGAE
                </p>
              </div>
            </Reveal>

            <Card className="rounded-3xl border bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-4 sm:p-8">
                <div className="flex items-center justify-center gap-1 sm:gap-4">
                  <TimeUnit value={countdown.days} label="Jours" />
                  <div className="text-sm sm:text-3xl text-muted-foreground/50 font-bold">:</div>
                  <TimeUnit value={countdown.hours} label="Heures" />
                  <div className="text-sm sm:text-3xl text-muted-foreground/50 font-bold">:</div>
                  <TimeUnit value={countdown.minutes} label="Minutes" />
                  <div className="text-sm sm:text-3xl text-muted-foreground/50 font-bold">:</div>
                  <TimeUnit value={countdown.seconds} label="Secondes" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
