import { useEffect, useRef } from "react";

const CHARS = " .:-=+*#%@";

/**
 * A slowly turning globe drawn in monospace characters, with a ring of nodes
 * orbiting it: the cloud plus the models running on it. Static when the
 * visitor prefers reduced motion; paused while the tab is hidden.
 */
export default function AsciiHero({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const style = getComputedStyle(document.documentElement);
    const signal = style.getPropertyValue("--signal").trim().split(/\s+/).map(Number);
    const ink = style.getPropertyValue("--ink").trim().split(/\s+/).map(Number);
    const mono = getComputedStyle(canvas).fontFamily || "monospace";

    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const cell = width < 500 ? 7 : 9;
      const line = cell * 1.55;
      ctx.font = `${cell * 1.3}px ${mono}`;
      ctx.textBaseline = "top";
      const radius = height * 0.4;
      const cx = width / 2;
      const cy = height / 2;
      const spin = t * 0.00018;

      for (let y = 0; y < height; y += line) {
        for (let x = 0; x < width; x += cell) {
          const nx = (x - cx) / radius;
          const ny = (y - cy) / radius;
          const r2 = nx * nx + ny * ny;
          let v = 0;

          if (r2 < 1) {
            const nz = Math.sqrt(1 - r2);
            // Light from the upper left, plus longitude and latitude lines that turn with time.
            const light = Math.max(0, -0.45 * nx - 0.55 * ny + 0.7 * nz);
            const lon = Math.atan2(nx, nz) + spin * 6;
            const lat = Math.asin(Math.max(-1, Math.min(1, ny)));
            const grid = Math.max(
              Math.pow(Math.abs(Math.cos(lon * 6)), 24),
              Math.pow(Math.abs(Math.cos(lat * 6)), 24),
            );
            v = 0.12 + light * 0.55 + grid * 0.35 * nz;
          }

          // Tilted orbit ring, hidden where it passes behind the globe.
          const ex = nx;
          const ey = (ny - nx * 0.28) * 3.4;
          const ring = Math.abs(Math.sqrt(ex * ex + ey * ey) - 1.42);
          const behind = r2 < 1 && ey < 0;
          if (ring < 0.06 && !behind) v = Math.max(v, 0.55);

          if (v <= 0.04) continue;
          const i = Math.min(CHARS.length - 1, Math.floor(v * CHARS.length));
          const mix = Math.min(1, v * 1.1);
          const c = signal.map((s, k) => Math.round(s + (ink[k] - s) * mix * 0.55));
          ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${0.25 + v * 0.75})`;
          ctx.fillText(CHARS[i], x, y);
        }
      }

      // Nodes travelling along the ring.
      for (let k = 0; k < 5; k++) {
        const a = spin * 9 + (k / 5) * Math.PI * 2;
        const ex = Math.cos(a) * 1.42;
        const ey = Math.sin(a) * 1.42;
        const nx = ex;
        const ny = ey / 3.4 + nx * 0.28;
        if (ey < 0 && nx * nx + ny * ny < 1) continue;
        ctx.fillStyle = `rgb(${ink[0]},${ink[1]},${ink[2]})`;
        ctx.fillText("@", cx + nx * radius, cy + ny * radius);
      }
    };

    // About 24 frames a second is plenty for a slow spin and keeps the CPU quiet.
    let last = -Infinity;
    const loop = (t: number) => {
      if (t - last > 40) {
        draw(t);
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduced) draw(0);
      else raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} className={`font-mono ${className}`} aria-hidden="true" />;
}
