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
    src: "/assets/imgs/jc/jc-01.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-02.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-03.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-04.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-05.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-06.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-07.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-08.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-09.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-10.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-11.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-12.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-13.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-14.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-15.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-16.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-17.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-18.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-19.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-20.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-21.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-22.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-23.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-24.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-25.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-26.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-27.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-28.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-29.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-30.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-31.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-32.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-33.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-34.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-35.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-36.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-37.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-38.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-39.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-40.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-41.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-42.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-43.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-44.jpeg",
    alt: "",
  },
  {
    src: "/assets/imgs/jc/jc-45.jpeg",
    alt: "",
  },
] as const;

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const autoplay = React.useRef(
    Autoplay({ delay: 3200, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const closeLightbox = React.useCallback(() => {
    setLightboxIndex(null);
  }, []);

  React.useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox]);

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
                <div
                  className="group relative overflow-hidden rounded-2xl h-64 lg:h-80 xl:h-96 cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300"
                  onClick={() => setLightboxIndex(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightboxIndex(index);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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

        {lightboxIndex !== null ? (
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="absolute inset-0 p-2 sm:p-8 flex items-center justify-center"
            >
              <div
                className="relative w-[86vw] h-[70vh] sm:w-full sm:h-full max-w-6xl max-h-[90vh] sm:max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={GALLERY_IMAGES[lightboxIndex].src}
                  alt={GALLERY_IMAGES[lightboxIndex].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}


