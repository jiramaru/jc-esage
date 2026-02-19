import * as React from "react";

function DrumIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 20c0-6 8-10 18-10s18 4 18 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 20v20c0 6 8 10 18 10s18-4 18-10V20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M14 30c0 6 8 10 18 10s18-4 18-10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 21l6 26M44 21l-6 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M32 8l4 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M36 14l6-4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

function SapphireIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 10h20l10 12-20 32L12 22 22 10z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 22h40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path
        d="M22 10l10 44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M42 10L32 54"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function AfricanMaskIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 10c8 0 14 6 14 14v20c0 8-6 14-14 14s-14-6-14-14V24c0-8 6-14 14-14z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="26" r="3" fill="currentColor" opacity="0.8" />
      <circle cx="40" cy="26" r="3" fill="currentColor" opacity="0.8" />
      <path
        d="M28 42c2-2 4-2 8-2s6 0 8 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 20l-4-8M44 20l4-8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function AcaciaTreeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 54V32M20 32c-6 4-8 8-8 12s2 8 8 8M44 32c6 4 8 8 8 12s-2 8-8 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M20 22c-4-2-8-2-10 0M44 22c4-2 8-2 10 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function AfricanBeadsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="44" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="32" cy="44" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="40" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M32 12L20 24M32 12L44 24M20 24L14 40M20 24L32 44M44 24L50 40M44 24L32 44"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}

export default function BackgroundDecor() {
  const items = [
    {
      id: "left-1",
      side: "left",
      top: "12vh",
      type: "drum" as const,
      size: "size-16",
      opacity: "opacity-[0.14]",
      color: "text-primary",
      anim: "float",
      blur: "blur-[0.2px]",
    },
    {
      id: "left-2",
      side: "left",
      top: "28vh",
      type: "mask" as const,
      size: "size-14",
      opacity: "opacity-[0.13]",
      color: "text-accent",
      anim: "pulse-subtle",
      blur: "blur-0",
    },
    {
      id: "left-3",
      side: "left",
      top: "50vh",
      type: "acacia" as const,
      size: "size-16",
      opacity: "opacity-[0.12]",
      color: "text-primary",
      anim: "float",
      blur: "blur-0",
    },
    {
      id: "left-4",
      side: "left",
      top: "76vh",
      type: "beads" as const,
      size: "size-12",
      opacity: "opacity-[0.11]",
      color: "text-accent",
      anim: "float",
      blur: "blur-0",
    },
    {
      id: "right-1",
      side: "right",
      top: "20vh",
      type: "sapphire" as const,
      size: "size-16",
      opacity: "opacity-[0.12]",
      color: "text-accent",
      anim: "float",
      blur: "blur-[0.2px]",
    },
    {
      id: "right-2",
      side: "right",
      top: "40vh",
      type: "mask" as const,
      size: "size-14",
      opacity: "opacity-[0.13]",
      color: "text-primary",
      anim: "pulse-subtle",
      blur: "blur-0",
    },
    {
      id: "right-3",
      side: "right",
      top: "62vh",
      type: "acacia" as const,
      size: "size-16",
      opacity: "opacity-[0.12]",
      color: "text-accent",
      anim: "float",
      blur: "blur-0",
    },
    {
      id: "right-4",
      side: "right",
      top: "88vh",
      type: "beads" as const,
      size: "size-12",
      opacity: "opacity-[0.10]",
      color: "text-primary",
      anim: "float",
      blur: "blur-0",
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0" />

      {items.map((it, idx) => {
        const base =
          it.side === "left"
            ? "left-4 sm:left-8"
            : "right-4 sm:right-8";
        const rotate =
          it.side === "left" ? "-rotate-6" : "rotate-6";
        const delay = `${(idx % 4) * 0.8}s`;

        return (
          <div
            key={it.id}
            className={`absolute ${base} ${it.opacity} ${it.color} ${it.blur}`}
            style={{ top: it.top }}
          >
            <div
              className={`${it.size} ${rotate} ${it.anim}`}
              style={{ animationDelay: delay }}
            >
              {it.type === "drum" ? (
                <DrumIcon className="size-full" />
              ) : it.type === "sapphire" ? (
                <SapphireIcon className="size-full" />
              ) : it.type === "mask" ? (
                <AfricanMaskIcon className="size-full" />
              ) : it.type === "acacia" ? (
                <AcaciaTreeIcon className="size-full" />
              ) : (
                <AfricanBeadsIcon className="size-full" />
              )}
            </div>
          </div>
        );
      })}

      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 h-[26rem] w-[26rem] rounded-full opacity-[0.06] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgb(217 142 4 / 0.9), transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-24 left-1/3 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full opacity-[0.05] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, rgb(37 99 235 / 0.9), transparent 60%)",
        }}
      />
    </div>
  );
}
