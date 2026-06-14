"use client";

import { useState } from "react";
import AndroidModal from "./AndroidModal";

const APP_STORE_URL = "https://testflight.apple.com/join/Xv1kFjpz";

type StoreButtonsProps = {
  variant?: "ink" | "light";
};

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className={className} fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.7-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" className={className} fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
    </svg>
  );
}

export default function StoreButtons({ variant = "ink" }: StoreButtonsProps) {
  const [showAndroid, setShowAndroid] = useState(false);

  const buttonClasses =
    variant === "ink"
      ? "bg-ink text-white hover:bg-ink/90"
      : "bg-white text-ink hover:bg-slate-pale";

  const subLabelClasses = variant === "ink" ? "text-white/60" : "text-ink-soft";

  const baseClasses = `flex items-center gap-3 rounded-btn px-5 py-3 shadow-soft transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lift ${buttonClasses}`;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <a href={APP_STORE_URL} className={baseClasses}>
          <AppleIcon className="h-6 w-6" />
          <span className="text-left leading-tight">
            <span className={`block text-[0.6875rem] font-medium ${subLabelClasses}`}>
              Download on
            </span>
            <span className="block text-base font-semibold">TestFlight</span>
          </span>
        </a>

        <button type="button" onClick={() => setShowAndroid(true)} className={baseClasses}>
          <PlayIcon className="h-5 w-5" />
          <span className="text-left leading-tight">
            <span className={`block text-[0.6875rem] font-medium ${subLabelClasses}`}>
              Sign up on
            </span>
            <span className="block text-base font-semibold">Google Play</span>
          </span>
        </button>
      </div>

      {showAndroid && <AndroidModal onClose={() => setShowAndroid(false)} />}
    </>
  );
}
