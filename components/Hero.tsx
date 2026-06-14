import FadeUp from "./FadeUp";
import StoreButtons from "./StoreButtons";
import LocationCarousel from "./LocationCarousel";

export default function Hero() {
  return (
    <header className="overflow-hidden bg-[linear-gradient(160deg,#F8F9FB_0%,#C8D6DF_100%)]">
      {/* Centered text content */}
      <div className="mx-auto max-w-[1140px] px-6 pb-4 pt-10 text-center sm:px-8 lg:pt-14">
        <FadeUp>
          <p className="inline-block rounded-full border border-hairline bg-surface px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-eyebrow text-slate shadow-soft">
            Now in testing · iOS &amp; Android
          </p>
          <h1 className="mx-auto mt-6 max-w-[20rem] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-display sm:max-w-none">
            Never lose a great spot again.
          </h1>
          <p className="mx-auto mt-5 max-w-[52rem] text-lg leading-[1.7] text-ink-soft">
            Pin!t is the home for every place you love — saved, organised by
            category, and ready the moment someone asks,{" "}
            <em className="not-italic font-medium text-ink">
              &ldquo;know anywhere good?&rdquo;
            </em>
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons />
          </div>
        </FadeUp>
      </div>

      {/* Location image carousel */}
      <FadeUp delay={0.2}>
        <LocationCarousel />
      </FadeUp>

    </header>
  );
}
