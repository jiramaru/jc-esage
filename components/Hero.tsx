"use client";

import * as React from "react";
import { ArrowDown, Calendar, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

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
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    tl.to(state, {
      i: full.length,
      duration: Math.min(4.6, Math.max(2.6, full.length * 0.18)),
      ease: "none",
      onUpdate: () => {
        el.textContent = full.slice(0, Math.round(state.i));
      },
    })
      .to({}, { duration: 1.0 })
      .to(state, {
        i: 0,
        duration: Math.min(2.6, Math.max(1.6, full.length * 0.1)),
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

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    // Shimmer/Glow effect with sweeping light
    tl.to(el, {
      backgroundPosition: "200% center",
      duration: 2,
      ease: "power1.inOut",
    }, 0)
      .to(el, {
        textShadow: "0 0 30px rgba(16, 185, 129, 0.6), inset 0 0 20px rgba(16, 185, 129, 0.2)",
        duration: 1,
        ease: "sine.inOut",
      }, 0)
      .to(el, {
        textShadow: "0 0 5px rgba(16, 185, 129, 0.2), inset 0 0 5px rgba(16, 185, 129, 0.05)",
        duration: 1,
        ease: "sine.inOut",
      }, 1);

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

    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: 1.2 + Math.random() * 3.5,
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

      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.15;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.15;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const speed = 0.018;
        p.x += p.vx * speed * (1 + progress * 0.012);
        p.y += (p.vy * speed + progress * 0.000005) * (1 + progress * 0.009);
        p.rot += p.vr * (1 + progress * 0.015);

        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;
        if (p.y < -0.05) p.y = 1.05;
        if (p.y > 1.05) p.y = -0.05;

        const px =
          p.x * width +
          Math.sin(progress * Math.PI) * 14 +
          mx * (35 + progress * 15);
        const py = p.y * height - progress * 42 + my * (28 + progress * 10);
        const alpha = Math.max(0.15, 0.25 + (1 - progress) * 0.1);

        const fill =
          p.tint === "green"
            ? `rgba(16, 185, 129, ${Math.min(1, alpha * 0.8)})`
            : `rgba(217, 142, 4, ${Math.min(1, alpha * 0.8)})`;

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div
          className="flex justify-center slide-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Badge
            variant="secondary"
            className="bg-accent text-accent-foreground font-medium gap-2 px-4 py-2"
          >
            <Sparkles className="w-4 h-4" />
            Samedi 04 Avril 2026 • 09h00
          </Badge>
        </div>

        <div
          className="space-y-2 slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground block">
              <span ref={titleTypedRef} />
              <span
                ref={titleCursorRef}
                aria-hidden="true"
                className="typed-cursor"
              />
            </span>
            <span ref={esgaeRef} className="bg-clip-text text-black block text-6xl sm:text-7xl md:text-8xl relative inline-block">
              ESGAE
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-medium block">
              Edition 2026
            </span>
          </h1>
        </div>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto slide-in-up font-light"
          style={{ animationDelay: "0.3s" }}
        >
          Thème :{" "}
          <span className="font-semibold text-foreground bg-gradient-hero bg-clip-text ">
            Éducation et Culture, moteurs du Progrès Social
          </span>
        </p>


        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 slide-in-up"
          style={{ animationDelay: "0.7s" }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-2xl gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link href="#programme">
              <Calendar className="w-4 h-4" />
              Voir le programme
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-2xl border-primary text-primary hover:bg-primary/5 gap-2 transition-all duration-300"
          >
            <Link href="#localisation">
              <MapPin className="w-4 h-4" />
              Localisation
            </Link>
          </Button>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-in"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="animate-bounce">
            <ArrowDown className="text-accent" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
