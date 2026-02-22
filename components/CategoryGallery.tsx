"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Reveal from "./Reveal";

interface CategoryGalleryProps {
  category: string;
  images: string[];
}

export default function CategoryGallery({ category, images }: CategoryGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

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

  // Filter out empty strings and get valid images
  const validImages = images.filter(img => img && img.trim() !== "");

  if (validImages.length === 0) {
    return (
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-montserrat mb-4">
                Galerie {category}
              </h2>
              <p className="text-muted-foreground">
                Les images de cette catégorie seront bientôt disponibles
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-montserrat mb-4">
              Galerie {category}
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez les moments forts de nos éditions précédentes
            </p>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:overflow-x-auto sm:gap-6 sm:pb-4 lg:grid lg:grid-cols-3 lg:overflow-x-visible">
            {validImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-64 lg:h-80 cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-300 sm:flex-shrink-0 sm:w-80 lg:w-full"
                onClick={() => setLightboxIndex(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setLightboxIndex(index);
                }}
              >
                <Image
                  src={image}
                  alt={`${category} gallery image ${index + 1}`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white font-semibold text-sm">{category} - Image {index + 1}</p>
                </div>
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* Lightbox */}
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
                className="relative w-[86vw] h-[70vh] sm:w-full sm:h-full max-w-6xl max-h-[90vh] sm:max-h-[85vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={validImages[lightboxIndex]}
                  alt={`${category} gallery image ${lightboxIndex + 1}`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain rounded-2xl"
                />
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
