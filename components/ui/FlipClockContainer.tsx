"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FlipClock, FlipClockColon } from "./FlipClock";
import "../styles/flip-clock.css";

interface FlipClockContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function FlipClockContainer({ children, className }: FlipClockContainerProps) {
  return (
    <div
      className={cn(
        "absolute top-0 bottom-0 left-1/2 right-0 m-auto ml-[-465px] w-[930px] h-[200px] text-center",
        className
      )}
    >
      {children}
    </div>
  );
}

// Pre-configured time display component
interface FlipClockTimeProps {
  hours?: string;
  minutes?: string;
  seconds?: string;
  className?: string;
}

export function FlipClockTime({ 
  hours = "00", 
  minutes = "00", 
  seconds = "00",
  className 
}: FlipClockTimeProps) {
  return (
    <FlipClockContainer className={className}>
      <FlipClock digit={hours[0]} />
      <FlipClock digit={hours[1]} />
      <FlipClockColon />
      <FlipClock digit={minutes[0]} />
      <FlipClock digit={minutes[1]} />
      <FlipClockColon />
      <FlipClock digit={seconds[0]} />
      <FlipClock digit={seconds[1]} />
    </FlipClockContainer>
  );
}
