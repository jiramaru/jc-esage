"use client";

import React from "react";
import { FlipClockTime } from "./ui/FlipClockContainer";

export default function FlipClockDemo() {
  return (
    <div className="min-h-screen bg-[#141414] relative">
      <FlipClockTime hours="12" minutes="34" seconds="56" />
    </div>
  );
}
