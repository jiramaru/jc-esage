"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import "../styles/flip-clock.css";

interface FlipClockProps {
  digit: string;
  className?: string;
}

export function FlipClock({ digit, className }: FlipClockProps) {
  return (
    <div className={cn("flip-clock-num", className)}>
      {/* Upper half */}
      <div className="flip-clock-upper">
        <span className="absolute w-full block">{digit}</span>
      </div>
      
      {/* Lower half */}
      <div className="flip-clock-lower">
        <span className="relative w-full block top-[-100%]">{digit}</span>
      </div>
    </div>
  );
}

interface FlipClockColonProps {
  className?: string;
}

export function FlipClockColon({ className }: FlipClockColonProps) {
  return (
    <span className={cn("flip-clock-colon", className)}>
      :
    </span>
  );
}
