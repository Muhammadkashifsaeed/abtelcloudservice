"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
}

interface ParticleNetworkCanvasProps {
  className?: string;
  theme?: "light" | "dark";
}

export function ParticleNetworkCanvas({
  className,
  theme = "light",
}: ParticleNetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Respect reduced motion & disable on touch
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouch) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 16000), 55);

    // Dynamic color palettes for light vs dark theme aligned with #FF5E14 brand lime
    const colors =
      theme === "light"
        ? [
            "rgba(255, 94, 20, 0.85)", // Brand lime
            "rgba(11, 14, 20, 0.75)",   // Obsidian dark
            "rgba(177, 194, 41, 0.7)",  // Deep lime
            "rgba(100, 116, 139, 0.6)", // Slate accent
            "rgba(255, 94, 20, 0.6)",  // Lime glow
          ]
        : [
            "rgba(255, 94, 20, 0.85)", // Brand lime
            "rgba(255, 94, 20, 0.65)", // Lime glow
            "rgba(255, 255, 255, 0.7)", // White spark
            "rgba(255, 255, 255, 0.9)", // White spark
          ];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius,
        baseRadius: radius,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 130,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    const maxDist = 115;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.32;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              theme === "light"
                ? `rgba(255, 94, 20, ${alpha * 0.45})`
                : `rgba(255, 94, 20, ${alpha * 0.75})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.radius) {
          // Gentle pull toward mouse
          const force = (1 - mDist / mouse.radius) * 0.8;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
          p.radius = p.baseRadius * 1.5;

          // Connection line to mouse
          const lineAlpha = (1 - mDist / mouse.radius) * 0.55;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle =
            theme === "light"
              ? `rgba(255, 94, 20, ${lineAlpha * 0.6})`
              : `rgba(255, 94, 20, ${lineAlpha * 0.85})`;
          ctx.lineWidth = 1.1;
          ctx.stroke();
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Glow halo for larger particles
        if (p.radius > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle =
            theme === "light"
              ? "rgba(255, 94, 20, 0.12)"
              : "rgba(255, 94, 20, 0.2)";
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className || "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
