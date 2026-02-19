"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GalleryGlobeProps {
  images: string[];
  autoRotate?: boolean;
  rotationSpeed?: number;
}

export default function GalleryGlobe({
  images,
  autoRotate = true,
  rotationSpeed = 2,
}: GalleryGlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || images.length === 0) return;

    const radius = 150;
    const angleSlice = (Math.PI * 2) / images.length;

    // Position items in a circle
    itemsRef.current.forEach((item, index) => {
      if (!item) return;

      const angle = angleSlice * index;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      gsap.set(item, {
        x,
        z,
        rotationY: angle * (180 / Math.PI),
      });
    });

    // Auto rotation animation
    if (autoRotate) {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(itemsRef.current, {
        rotationZ: 360,
        duration: rotationSpeed * images.length * 2,
        ease: "none",
        transformOrigin: "center center",
      });

      // Mouse interaction
      const onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = (e.clientX - centerX) / rect.width;
        const mouseY = (e.clientY - centerY) / rect.height;

        gsap.to(itemsRef.current, {
          rotationY: mouseX * 60,
          rotationX: -mouseY * 60,
          duration: 0.5,
          overwrite: "auto",
        });
      };

      const onMouseLeave = () => {
        gsap.to(itemsRef.current, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      };

      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseleave", onMouseLeave);

      return () => {
        container.removeEventListener("mousemove", onMouseMove);
        container.removeEventListener("mouseleave", onMouseLeave);
        tl.kill();
      };
    }
  }, [images, autoRotate, rotationSpeed]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 flex items-center justify-center perspective"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-32 h-32 rounded-full bg-gradient-hero opacity-20 blur-3xl" />
      </div>

      {/* Image items */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="absolute w-24 h-24 sm:w-32 sm:h-32 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            <div
              className="w-full h-full rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 bg-gradient-hero border border-accent/50"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Fallback placeholder */}
              {!image && (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-card">
                  <span className="text-sm">Photo {index + 1}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions text */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground text-center pointer-events-none">
        <p>Survolez pour interagir</p>
      </div>
    </div>
  );
}
