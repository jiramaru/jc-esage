"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

interface ProgrammeHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function ProgrammeHero({ title, subtitle, backgroundImage }: ProgrammeHeroProps) {
  return (
    <div className="relative min-h-[60vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={`${title} background`}
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full min-h-[60vh] px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Reveal delay={0.1}>
          <Link href="/">
            <Button
              variant="outline"
              className="mb-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </Reveal>
        
        {/* Title and Subtitle */}
        <Reveal delay={0.2}>
          <div className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-montserrat leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
