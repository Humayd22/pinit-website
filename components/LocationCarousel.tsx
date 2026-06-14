"use client";

import { useEffect, useRef } from "react";

const locationImages = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Restaurant" },
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80", alt: "Coffee shop" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Viewpoint" },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", alt: "Coffee shop" },
  { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80", alt: "City street" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", alt: "Beach" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", alt: "Fine dining" },
];

const CARD_W = 220;
const CARD_H = 320;
const R = 750;                        // radius of the invisible circle below
const ARC_SPACING = 310;              // arc-length between card centres
const ANGLE_STEP = ARC_SPACING / R;  // radians between adjacent cards
const SPEED = 0.55;                   // px/frame equivalent
const ANGLE_SPEED = SPEED / R;        // radians per frame
const SLOTS = 13;

export default function LocationCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slotsRef = useRef<Array<{ el: HTMLDivElement; img: HTMLImageElement } | null>>([]);
  const angleRef = useRef(0);
  const rafRef = useRef<number>();
  const n = locationImages.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const totalAngle = n * ANGLE_STEP;

    const tick = () => {
      angleRef.current = (angleRef.current + ANGLE_SPEED) % totalAngle;
      const a = angleRef.current;
      const W = container.offsetWidth;
      const H = container.offsetHeight;
      const cx = W / 2;
      // Y of the centre card's centre — sits near bottom of container
      const refY = H - 40 - CARD_H / 2;

      // Start iterating from a little before the leftmost visible card
      const kMin = Math.floor((a - Math.PI * 0.75) / ANGLE_STEP);

      slotsRef.current.forEach((slot, si) => {
        if (!slot) return;
        const k = kMin + si;
        // θ=0 → centre card; negative → left; positive → right
        const θ = k * ANGLE_STEP - a;

        // True circle: position follows (R·sin θ, R·(1−cos θ)) from reference
        const cardCX = cx + R * Math.sin(θ);
        const cardCY = refY + R * (1 - Math.cos(θ));
        const left = cardCX - CARD_W / 2;
        const top = cardCY - CARD_H / 2;

        if (left > W + CARD_W || left + CARD_W < -CARD_W) {
          slot.el.style.display = "none";
          return;
        }

        // Rotation = tangent angle of circle = θ in degrees
        const deg = (θ * 180) / Math.PI;
        const absθ = Math.abs(θ);
        const zIndex = Math.max(0, Math.round(20 - absθ * 8));
        const opacity = Math.max(0.35, 1 - absθ * 0.55);

        const imgIdx = ((k % n) + n) % n;
        if (slot.el.dataset.img !== String(imgIdx)) {
          slot.img.src = locationImages[imgIdx].src;
          slot.img.alt = locationImages[imgIdx].alt;
          slot.el.dataset.img = String(imgIdx);
        }

        slot.el.style.display = "block";
        slot.el.style.left = `${left}px`;
        slot.el.style.top = `${top}px`;
        slot.el.style.zIndex = String(zIndex);
        slot.el.style.transform = `rotate(${deg}deg)`;
        slot.el.style.opacity = String(opacity);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current!); };
  }, [n]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden pb-14"
      style={{
        height: CARD_H + 80,
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      {Array.from({ length: SLOTS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) slotsRef.current[i] = { el, img: el.querySelector("img")! };
          }}
          className="absolute overflow-hidden rounded-2xl shadow-lift"
          style={{
            width: CARD_W,
            height: CARD_H,
            willChange: "transform, opacity",
            display: "none",
          }}
        >
          <img
            src={locationImages[i % n].src}
            alt={locationImages[i % n].alt}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
