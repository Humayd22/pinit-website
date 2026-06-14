import FadeUp from "./FadeUp";

const categories = [
  "Restaurants",
  "Coffee Shops",
  "Bars & Nightlife",
  "Shopping",
  "Gyms & Fitness",
  "Spas & Wellness",
  "Activities & Entertainment",
  "Outdoors & Nature",
  "Hotels & Accommodation",
  "Fast Food & Quick Bites",
  "Museums & Culture",
  "Live Music & Events",
  "Healthcare",
  "Viewpoints & Photo Spots",
  "Coworking Spaces",
];

export default function Categories() {
  return (
    <section className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1140px] px-6 sm:px-8">
        <FadeUp>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-eyebrow text-slate">
            Categories
          </p>
          <h2 className="mt-4 max-w-[30rem] text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-heading">
            A place for every kind of place.
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg leading-[1.7] text-ink-soft">
            Every pin lands exactly where it belongs — and every category is
            free, always.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="mt-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <li
                key={category}
                className="rounded-full border border-hairline bg-surface px-5 py-2.5 font-medium text-ink-soft shadow-soft transition-colors duration-250 hover:border-slate-light hover:text-ink"
              >
                {category}
              </li>
            ))}
            <li className="rounded-full bg-slate-pale px-5 py-2.5 font-semibold text-ink">
              ...and more
            </li>
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
