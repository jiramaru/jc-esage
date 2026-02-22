"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Clock, CheckCircle, Share2, PartyPopper, CalendarDays } from "lucide-react";
import gsap from "gsap";

import Reveal from "./Reveal";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import Roboto Slab font
import "./countdown-font.css";

interface RollingDigitColumnProps {
  digit: string;
  delay?: number;
}

function RollingDigitColumn({ digit, delay = 0 }: RollingDigitColumnProps) {
  const columnRef = React.useRef<HTMLDivElement>(null);
  const prevDigitRef = React.useRef(digit);
  const prefersReducedMotion = React.useMemo(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  React.useEffect(() => {
    const el = columnRef.current;
    if (!el || prefersReducedMotion) return;

    const prev = prevDigitRef.current;
    if (prev === digit) return;

    prevDigitRef.current = digit;

    // Create flip elements
    const flipTop = document.createElement("div");
    const flipBottom = document.createElement("div");
    flipTop.className = "absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-hero rounded-t-xl border-b border-border/30";
    flipBottom.className = "absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-hero rounded-b-xl border-t border-border/30";

    // Clone current digit into halves
    const currentTop = document.createElement("div");
    const currentBottom = document.createElement("div");
    currentTop.className = "absolute inset-x-0 top-0 h-1/2 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold countdown-digit text-primary leading-none overflow-hidden rounded-t-xl";
    currentBottom.className = "absolute inset-x-0 bottom-0 h-1/2 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold countdown-digit text-primary leading-none overflow-hidden rounded-b-xl";
    currentTop.textContent = prev;
    currentBottom.textContent = prev;

    // New digit for the top (visible during flip)
    const newTop = document.createElement("div");
    newTop.className = "absolute inset-x-0 top-0 h-1/2 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold countdown-digit text-primary leading-none overflow-hidden rounded-t-xl";
    newTop.textContent = digit;
    newTop.style.opacity = "0";

    // New digit for the bottom (revealed after flip)
    const newBottom = document.createElement("div");
    newBottom.className = "absolute inset-x-0 bottom-0 h-1/2 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold countdown-digit text-primary leading-none overflow-hidden rounded-b-xl";
    newBottom.textContent = digit;
    newBottom.style.opacity = "0";

    // Shadow overlay during flip
    const shadowOverlay = document.createElement("div");
    shadowOverlay.className = "absolute inset-0 bg-black/5 rounded-xl pointer-events-none";
    shadowOverlay.style.opacity = "0";

    // Assemble
    flipTop.appendChild(currentTop);
    flipTop.appendChild(newTop);
    flipBottom.appendChild(currentBottom);
    flipBottom.appendChild(newBottom);
    el.appendChild(flipTop);
    el.appendChild(flipBottom);
    el.appendChild(shadowOverlay);

    // Animate flip (top half folds down, bottom half folds up) with shadow
    const tl = gsap.timeline({ delay });
    tl.set(flipTop, { transformOrigin: "bottom" });
    tl.set(flipBottom, { transformOrigin: "top" });
    tl.to(shadowOverlay, { opacity: 1, duration: 0.15 }, 0);
    tl.to(currentTop, { opacity: 0, duration: 0.16 }, 0);
    tl.to(newTop, { opacity: 1, duration: 0.16 }, 0);
    tl.to(flipTop, { rotateX: -90, duration: 0.32, ease: "power2.inOut" }, 0);
    tl.to(flipBottom, { rotateX: 90, duration: 0.32, ease: "power2.inOut" }, 0);
    tl.set(newBottom, { opacity: 1 }, 0.32);
    tl.set(currentBottom, { opacity: 0 }, 0.32);
    tl.to(shadowOverlay, { opacity: 0, duration: 0.15 }, 0.32);
    tl.call(() => {
      // Cleanup and set final digit
      el.removeChild(flipTop);
      el.removeChild(flipBottom);
      el.removeChild(shadowOverlay);
      // Update the static display
      const staticDisplay = el.querySelector(".static-digit");
      if (staticDisplay) staticDisplay.textContent = digit;
    });
  }, [digit, prefersReducedMotion]);

  return (
    <div
      ref={columnRef}
      className="relative w-8 h-20 sm:w-10 sm:h-20 lg:w-12 lg:h-24 overflow-hidden bg-gradient-hero rounded-sm shadow-inner border border-border/20 lg:text-xl"
      style={{ perspective: "200px" }}
    >
      <div className="static-digit absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold countdown-digit text-primary leading-none">
        {digit}
      </div>
      {/* Split line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-border/40 pointer-events-none" />
    </div>
  );
}

interface CountdownUnitProps {
  value: number;
  label: string;
  delay?: number;
}

function CountdownUnit({ value, label, delay = 0 }: CountdownUnitProps) {
  const digits = String(value).padStart(2, "0").split("");
  return (
    <Reveal delay={delay} className="shrink-0" y={10} scale={0.98}>
      <div className="bg-gradient-hero rounded-xl px-3 py-4 w-28 sm:w-32 text-center">
        <div className="flex justify-center gap-1 rounded-sm py-8">
          {digits.map((d, i) => (
            <RollingDigitColumn key={`${label}-${i}`} digit={d} delay={delay + i * 0.04} />
          ))}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground/80 mt-2 leading-none">{label}</div>
      </div>
    </Reveal>
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
          <Reveal>
            <div className="text-center py-12 space-y-6">
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
          </Reveal>
        ) : (
          <div className="space-y-12">
            <Reveal>
              <div className="text-center space-y-2">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-montserrat flex items-center justify-center gap-3">
                  <Clock className="w-10 h-10 text-primary" />
                  Compte à rebours
                </h2>
                <p className="text-muted-foreground">
                  Jusqu&apos;à la Journée Culturelle de l&apos;ESGAE
                </p>
              </div>
            </Reveal>

            <Card className="rounded-sm border bg-card/80 backdrop-blur-sm shadow-sm">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-stretch gap-3 sm:gap-4 justify-start sm:justify-center overflow-x-auto">
                  <CountdownUnit value={countdown.days} label="Jours" delay={0.2} />
                  <CountdownUnit value={countdown.hours} label="Heures" delay={0.25} />
                  <CountdownUnit value={countdown.minutes} label="Minutes" delay={0.3} />
                  <CountdownUnit value={countdown.seconds} label="Secondes" delay={0.35} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
