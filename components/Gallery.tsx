"use client";

import * as React from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GALLERY_IMAGES = [
  {
    url: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Concert et performance musicale",
  },
  {
    url: "https://images.pexels.com/photos/3998216/pexels-photo-3998216.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Danse et performances culturelles",
  },
  {
    url: "https://images.pexels.com/photos/2263437/pexels-photo-2263437.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Public et spectateurs",
  },
  {
    url: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Performance scénique",
  },
  {
    url: "https://images.pexels.com/photos/3839612/pexels-photo-3839612.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Ambiance festive",
  },
  {
    url: "https://images.pexels.com/photos/3639729/pexels-photo-3639729.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Moment de la Journée Culturelle",
  },
];

export default function Gallery() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section
      id="galerie"
      className="py-16 sm:py-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className="text-center mb-16 space-y-2 fade-in"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground font-montserrat flex items-center justify-center gap-3">
            <ImageIcon className="w-10 h-10 text-primary" />
            Retour en images
          </h2>
          <p className="text-lg text-muted-foreground">
            Revivez les moments de l&apos;édition précédente
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="mx-auto"
          onMouseLeave={() => autoplay.current.reset()}
        >
          <CarouselContent className="-ml-4">
            {GALLERY_IMAGES.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white font-semibold text-sm">{image.alt}</p>
                  </div>
                  {/* Border glow on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:inline-flex -left-4 bg-background/80 backdrop-blur border-border" />
          <CarouselNext className="hidden sm:inline-flex -right-4 bg-background/80 backdrop-blur border-border" />
        </Carousel>
      </div>
    </section>
  );
}
