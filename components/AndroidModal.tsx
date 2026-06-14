"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  onClose: () => void;
};

export default function AndroidModal({ onClose }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open, close on Escape
  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError("");
    const { error } = await supabase.from("waitlist").insert({ email });
    if (error) {
      if (error.code === "23505") {
        setDuplicate(true);
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
      return;
    }
    setSubmitted(true);
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Panel */}
      <div
        className="relative w-full max-w-md rounded-[20px] bg-surface p-8 shadow-lift"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-pale text-ink-soft transition-colors hover:bg-hairline"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <p className="text-[0.75rem] font-semibold uppercase tracking-eyebrow text-slate">
                Android · Testing access
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-heading">
                We&rsquo;ll notify you when it&rsquo;s ready.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Android testing is invite-only right now. Drop your email and you&rsquo;ll be notified when your access is granted.
              </p>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-btn border border-hairline bg-base px-4 py-3 text-sm text-ink placeholder:text-slate outline-none focus:border-slate focus:ring-2 focus:ring-slate/20 transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-btn bg-ink px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-ink/90 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Notify me
              </button>
            </form>
          </>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-pale">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6 text-ink">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-heading">
              {duplicate ? "You’re already on the waitlist." : "You’re on the list."}
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              {duplicate
                ? <>We already have <span className="font-medium text-ink">{email}</span> — we&rsquo;ll be in touch when access is granted.</>
                : <>We&rsquo;ll send the Android link to <span className="font-medium text-ink">{email}</span> as soon as access is granted.</>
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
