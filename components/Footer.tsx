const footerLinks = [
  { label: "Contact", href: "mailto:pinit.location@gmail.com" },
  {
    label: "Instagram",
    href: "https://instagram.com/pinit.world",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-8 px-6 sm:px-8 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold tracking-heading">Pin!t</p>
          <p className="mt-1 text-sm text-ink-soft">Pin the places you love.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-medium text-ink-soft">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition-colors duration-250 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mt-10 text-center text-xs text-slate">
        © {new Date().getFullYear()} Pin!t. All rights reserved.
      </p>
    </footer>
  );
}
