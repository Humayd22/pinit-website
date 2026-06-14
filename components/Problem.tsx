import FadeUp from "./FadeUp";

const painPoints = [
  {
    title: "Found it Monday, forgot it Friday",
    body: "You stumble on an incredible little place — the kind you swear you'll come back to. By the end of the week, the name is gone.",
  },
  {
    title: "“Any recommendations?” …silence",
    body: "Someone asks where to eat and your mind goes completely blank — even though you know good places. You've been to good places.",
  },
  {
    title: "Everyone raved, nobody remembered",
    body: "The whole table was talking about that one spot last month. Now no one can recall what it was called, let alone where it was.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1140px] px-6 sm:px-8">
        <FadeUp className="text-center">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-eyebrow text-slate">
            Sound familiar?
          </p>
          <h2 className="mx-auto mt-4 max-w-[28rem] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-heading">
            Great places deserve better than your memory.
          </h2>
        </FadeUp>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.08}>
              <div className="h-full rounded-card bg-surface p-8 shadow-soft text-center">
                <h3 className="text-xl font-semibold leading-snug">
                  {point.title}
                </h3>
                <p className="mt-4 leading-[1.7] text-ink-soft">{point.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.25}>
          <p className="mt-14 text-center text-xl font-semibold">
            That&rsquo;s why we built Pin!t.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
