"use client";

import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

interface ProgrammeHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function ProgrammeHero({
  title,
  subtitle,
  backgroundImage,
}: ProgrammeHeroProps) {
  return (
    <section className="relative w-full h-80 sm:h-96 lg:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 sm:px-8 max-w-4xl">
          <Reveal>
            <h1 className="mb-4 text-5xl lg:text-7xl font-bold">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="text-lg lg:text-2xl text-gray-200">{subtitle}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
