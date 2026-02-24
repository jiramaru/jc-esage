"use client";

import * as React from "react";
import { ArrowDown, Calendar, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

import Reveal from "./Reveal";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const titleTypedRef = React.useRef<HTMLSpanElement | null>(null);
  const titleCursorRef = React.useRef<HTMLSpanElement | null>(null);
  const esgaeRef = React.useRef<HTMLSpanElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const scrollYRef = React.useRef(0);
  const mouseRef = React.useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  React.useEffect(() => {
    const el = titleTypedRef.current;
    if (!el) return;

    const full = "Journée Culturelle";
    el.textContent = "";

    const state = { i: 0 };
    // repeatDelay: 0.6s = time between typing cycles. Adjust to change pause between repeats
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    tl.to(state, {
      i: full.length,
      duration: Math.min(4.6, Math.max(2.6, full.length * 0.18)), // Type-in duration: adjust 0.18 multiplier for faster/slower typing
      ease: "none",
      onUpdate: () => {
        el.textContent = full.slice(0, Math.round(state.i));
      },
    })
      .to({}, { duration: 1.0 }) // Pause between typing and deleting: 1.0s
      .to(state, {
        i: 0,
        duration: Math.min(2.6, Math.max(1.6, full.length * 0.1)), // Type-out duration: adjust 0.1 multiplier for faster/slower deletion
        ease: "none",
        onUpdate: () => {
          el.textContent = full.slice(0, Math.round(state.i));
        },
      });

    return () => {
      tl.kill();
    };
  }, []);

  React.useEffect(() => {
    const el = esgaeRef.current;
    if (!el) return;

    // repeatDelay: 0.4s = time between glow cycles. Adjust to change pause between repeats
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    // Shimmer/Glow effect with sweeping light
    tl.to(el, {
      backgroundPosition: "200% center",
      duration: 2, // Gradient sweep duration: adjust to make shimmer faster or slower
      ease: "power1.inOut",
    }, 0)
      .to(el, {
        // Glow bright: modify rgba values to change glow color and intensity
        textShadow: "0 0 30px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.2)",
        duration: 1, // Glow fade-in duration: adjust for faster/slower effect
        ease: "sine.inOut",
      }, 0)
      .to(el, {
        // Glow fade: dim the glow effect
        textShadow: "0 0 5px rgba(16, 185, 129, 0.2), inset 0 0 5px rgba(16, 185, 129, 0.05)",
        duration: 1, // Glow fade-out duration: adjust for faster/slower effect
        ease: "sine.inOut",
      }, 1); // Timeline position: 1s (when first glow completes)

    // Add shimmer gradient background
    el.style.backgroundImage = "linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.5) 50%, transparent 100%)";
    el.style.backgroundSize = "200% center";
    el.style.backgroundPosition = "-200% center";
    el.style.backgroundClip = "text";
    el.style.webkitBackgroundClip = "text";

    return () => {
      tl.kill();
    };
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;

    // Generate particles with random properties. Adjust length for more/less particles, and modify property ranges for different behaviors
    const particles = Array.from({ length: 40  }).map(() => ({
      x: Math.random(),
      y: Math.random() * 0.5, // Keep particles in upper half for higher positioning
      r: 2.4 + Math.random() * 7.0, // Doubled from 1.2 + Math.random() * 3.5
      vx: (-0.5 + Math.random()) * 0.05,
      vy: (-0.5 + Math.random()) * 0.05,
      rot: Math.random() * Math.PI * 2,
      vr: (-0.5 + Math.random()) * 0.03,
      shape: ((): "circle" | "square" | "triangle" => {
        const t = Math.random();
        if (t < 0.6) return "circle";
        if (t < 0.85) return "square";
        return "triangle";
      })(),
      tint: Math.random() > 0.55 ? "green" : "orange",
    }));

    const resize = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onScroll = () => {
      scrollYRef.current = window.scrollY || 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / Math.max(1, rect.width);
      const ny = (event.clientY - rect.top) / Math.max(1, rect.height);
      mouseRef.current.tx = (nx - 0.5) * 2;
      mouseRef.current.ty = (ny - 0.5) * 2;
    };

    const render = () => {
      const scroll = scrollYRef.current;
      const progress = Math.max(0, Math.min(1, scroll / 900));

      // Mouse smoothing factor: 0.15 = smooth response (0=instant, 1=no lag). Adjust for more/less responsiveness
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.15;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const speed = 0.018; // Base particle speed: higher=faster, lower=slower
        // X-axis: 0.012 = scroll acceleration. Adjust to change horizontal scroll effect
        p.x += p.vx * speed * (1 + progress * 0.012);
        // Y-axis: 0.000005=gravity, 0.009=scroll acceleration. Adjust for floating/falling effect
        p.y += (p.vy * speed + progress * 0.000005) * (1 + progress * 0.009);
        // Rotation: 0.015 = spin speed increase on scroll. Adjust for faster/slower spin
        p.rot += p.vr * (1 + progress * 0.015);

        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;
        if (p.y < -0.05) p.y = 1.05;
        if (p.y > 1.05) p.y = -0.05;

        // Position X: 14=wave amplitude, 35/15=mouse influence. Adjust for horizontal movement effect
        const px =
          p.x * width +
          Math.sin(progress * Math.PI) * 14 +
          mx * (35 + progress * 15);
        // Position Y: 42=scroll drift, 28/10=mouse influence. Adjust for vertical motion effect
        const py = p.y * height - progress * 42 + my * (28 + progress * 10);
        // Opacity: 0.15=minimum, 0.25=base, 0.1=fade on scroll. Adjust for particle visibility
        const alpha = Math.max(0.15, 0.25 + (1 - progress) * 0.1);

        // Particle colors: Green (16,185,129) or Orange (217,142,4). Modify RGB values for different colors
        // 0.8 = opacity multiplier. Adjust for brighter/dimmer particles
        const fill =
          p.tint === "green"
            ? `rgba(16, 185, 129, ${Math.min(1, alpha * 0.8)})`
            : `rgba(217, 142, 4, ${Math.min(1, alpha * 0.8)})`;

        // Particle size: 0.9=base scale, 0.25=growth on scroll. Adjust for bigger/smaller particles
        const size = (p.r * 0.9) * (1 + progress * 0.25);

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(p.rot);
        ctx.fillStyle = fill;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillRect(-size, -size, size * 2, size * 2);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -size * 1.35);
          ctx.lineTo(size * 1.15, size * 1.0);
          ctx.lineTo(-size * 1.15, size * 1.0);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }

      raf = window.requestAnimationFrame(render);
    };

    resize();
    onScroll();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    
    // Start render loop
    raf = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full pointer-events-none"
        style={{ zIndex: 1, display: "block" }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/15" style={{ zIndex: 0 }} />
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 size-[22rem] rounded-full blur-3xl opacity-40 float"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgb(217 142 4 / 0.6), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 size-[26rem] rounded-full blur-3xl opacity-35 float"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgb(16 185 129 / 0.55), transparent 60%)",
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-8 text-center space-y-8 md:space-y-10">
        {/* Badge slide-in animation: delay 0.1s. Adjust to change when badge appears */}
        <Reveal className="flex justify-center" delay={0.05}>
          <Badge
            variant="secondary"
            className="bg-accent text-accent-foreground font-medium gap-2 px-4 py-2"
          >
            <Sparkles className="w-4 h-4" />
            Samedi 04 Avril 2026 • 09h00
          </Badge>
        </Reveal>

        {/* Title slide-in animation: delay 0.2s. Adjust to change when title appears */}
        <Reveal className="space-y-2" delay={0.1}>
          <h1 className="font-poppins text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none space-y-2">
            <span className="text-foreground block h-20 sm:h-24 md:h-32">
              <span ref={titleTypedRef} />
              <span
                ref={titleCursorRef}
                aria-hidden="true"
                className="typed-cursor"
              />
            </span>
            <span ref={esgaeRef} className="bg-clip-text text-black hidden md:block sm:inline-block text-5xl md:text-6xl lg:text-7xl relative">
              ESGAE
            </span>
            <span className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium block">
              Edition 2026
            </span>
          </h1>
        </Reveal>

        {/* Subtitle slide-in animation: delay 0.3s. Adjust to change when subtitle appears */}
        <Reveal delay={0.15}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Thème :{" "}
            <span className="font-semibold text-foreground bg-gradient-hero bg-clip-text ">
              Éducation et Culture, moteurs du Progrès Social
            </span>
          </p>
        </Reveal>


        {/* Buttons slide-in animation: delay 0.7s. Adjust to change when buttons appear */}
        <Reveal className="flex flex-col sm:flex-row gap-4 justify-center mt-10" delay={0.2}>
          <Button
            asChild
            size="lg"
            className="rounded-2xl gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link href="#5&">
              <Calendar className="w-4 h-4" />
              Voir le programme
            </Link>
          </Button>

        </Reveal>

        {/* Scroll arrow bounce animation: delay 0.9s. Adjust to change when arrow appears */}
        <Reveal className="absolute bottom-[-3rem] sm:bottom-[-5rem] left-1/2 transform -translate-x-1/2" delay={0.3}>
          <div className="animate-bounce">
            <ArrowDown className="text-accent" size={32} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
