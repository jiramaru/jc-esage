"use client";

import React from "react";
import Reveal from "./Reveal";

interface CategoryDescriptionProps {
  category: string;
  description: string[];
  highlights?: { title: string; items: string[] }[];
}

export default function CategoryDescription({ 
  category, 
  description, 
  highlights = [] 
}: CategoryDescriptionProps) {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-montserrat mb-8">
              À propos de {category}
            </h2>
            <div className="space-y-6">
              {description.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        {highlights.length > 0 && (
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat text-primary">
                    {highlight.title}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {highlight.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
