"use client";

import { useEffect, useState, useRef } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const isAtBottom = () =>
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 40;

    const onScroll = () => {
      setVisible(false);
      clearTimeout(timerRef.current);
      if (!isAtBottom()) {
        timerRef.current = setTimeout(() => setVisible(true), 5000);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0, pointerEvents: "none" }}
    >
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-slate">
        Scroll
      </span>
      <div className="h-12 w-px bg-gradient-to-b from-slate to-transparent" />
    </div>
  );
}
