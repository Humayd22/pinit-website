import FadeUp from "./FadeUp";

// Update this as the community grows.
const EARLY_PINNERS = "500+";

export default function SocialProof() {
  return (
    <section className="bg-base py-24 lg:py-36">
      <div className="mx-auto max-w-[1140px] px-6 text-center sm:px-8">
        <FadeUp>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-eyebrow text-slate">
            Early community
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-heading">
            Join our early pinners.
          </h2>
          <p className="mx-auto mt-5 max-w-[32rem] text-lg leading-[1.7] text-ink-soft">
            Pin!t is just getting started and the people pinning today are
            shaping what it becomes. Save your places and tell us what you think.
          </p>
          <a
            href="https://instagram.com/pinit.world"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block font-semibold text-ink underline decoration-slate-light underline-offset-4 transition-colors duration-250 hover:decoration-slate"
          >
            Follow along on Instagram → @pinit.world
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
