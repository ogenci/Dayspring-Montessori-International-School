import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/dmis/logo.png";

const links = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admission", href: "/admissions" },
  { label: "Student-Life", href: "/student-life" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      {/* Floating pill */}
      <div
        className="mx-auto flex max-w-[1050px] items-center justify-between px-5 py-3 rounded-[10px] transition-all duration-500 ease-out bg-maroon/70 backdrop-blur-md border border-maroon/30 shadow-[0_8px_32px_-8px_rgba(36,10,10,0.45)]"
      >
        {/* Logo only */}
        <a
          href="/"
          className="flex items-center group/logo shrink-0"
          aria-label="Dayspring Montessori International School — Home"
        >
          <div className="overflow-hidden rounded-lg transition-all duration-300 group-hover/logo:scale-[1.06] group-hover/logo:rotate-[2deg]">
            <img
              src={logo}
              alt="Dayspring Montessori crest"
              className="h-12 w-12 object-contain drop-shadow-sm"
            />
          </div>
        </a>

        {/* Desktop nav links — always light since bg is always dark-ish */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[4px] px-4 py-2 text-[13px] font-medium tracking-wide text-cream/90 transition-colors duration-300 hover:bg-cream/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2.5">
          <a
            href="/admissions"
            className="hidden rounded-full px-5 py-2 text-[13px] font-semibold tracking-wide bg-gold text-maroon-deep transition-all duration-300 hover:bg-cream hover:scale-[1.03] hover:shadow-[0_8px_24px_-6px_rgba(224,162,58,0.55)] group/btn sm:inline-flex items-center gap-1.5"
          >
            Apply Now
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-cream hover:bg-cream/15 transition-all duration-300 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-[10px] border border-maroon/30 bg-maroon/90 backdrop-blur-md shadow-[0_12px_40px_-12px_rgba(36,10,10,0.5)] animate-menu-slide-down lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-5">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 45}ms` }}
                className="animate-menu-item-slide-in flex items-center justify-between rounded-[10px] px-3 py-3 text-[15px] font-medium text-cream/85 transition-colors duration-200 hover:bg-cream/10 hover:text-cream group"
              >
                <span>{l.label}</span>
                <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-gold">
                  →
                </span>
              </a>
            ))}
            <div
              style={{ animationDelay: `${links.length * 45}ms` }}
              className="animate-menu-item-slide-in mt-3 px-1"
            >
              <a
                href="/admissions"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-gold py-3 text-[14px] font-semibold tracking-wide text-maroon-deep hover:bg-cream transition-colors duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}