import FadeUp from "./FadeUp";

const steps = [
  {
    number: "01",
    title: "Save it",
    body: "Found somewhere worth remembering? Pin it in seconds — add the name, location, category, photos, and any notes you want to remember it by.",
  },
  {
    number: "02",
    title: "Share it",
    body: "Next time someone asks for a recommendation, you'll actually have an answer. Send your favourite spots in seconds.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-hairline bg-surface py-24 lg:py-36">
      <div className="mx-auto max-w-[1140px] px-6 sm:px-8">
        <FadeUp className="text-center">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-eyebrow text-slate">
            How it works
          </p>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-heading">
            Save it. Share it.
          </h2>
        </FadeUp>
        <div className="mt-16 mx-auto grid max-w-[640px] gap-12 md:grid-cols-2 md:gap-8">
          {steps.map((step, i) => (
            <FadeUp key={step.number} delay={i * 0.08}>
              <div className="text-center">
                <span className="text-5xl font-bold tracking-display text-slate-light">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-heading">
                  {step.title}
                </h3>
                <p className="mt-3 leading-[1.7] text-ink-soft">{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
