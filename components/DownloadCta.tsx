import FadeUp from "./FadeUp";
import StoreButtons from "./StoreButtons";

export default function DownloadCta() {
  return (
    <section className="bg-ink py-16 text-white lg:py-24">
      <div className="mx-auto max-w-[1140px] px-6 text-center sm:px-8">
        <FadeUp>
          <h2 className="mx-auto max-w-[40rem] text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.1] tracking-heading">
            Your next favourite spot is out there. Don&rsquo;t lose it.
          </h2>
          <p className="mx-auto mt-5 max-w-[30rem] text-lg leading-[1.7] text-white/70">
            Get early access to Pin!t on iOS and Android — free, always.
          </p>
          <div className="mt-10 flex justify-center">
            <StoreButtons variant="light" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
