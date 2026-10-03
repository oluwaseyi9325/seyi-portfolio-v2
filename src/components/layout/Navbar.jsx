import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import useTheme from "@/hooks/useTheme";
import { profile } from "@/data/portfolio";
import { EASE, Mask } from "@/components/ui/Reveal";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const themeLabel = theme === "dark" ? "Light mode" : "Dark mode";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* mix-blend-difference keeps the bar readable over both light and dark sections. */}
      <header className="fixed inset-x-0 top-0 z-50 text-white mix-blend-difference">
        <nav className="container-page flex h-16 items-center justify-between text-sm font-medium">
          <Link href="/" className="font-bold tracking-tight">
            {profile.name}
            <sup className="ml-0.5 text-[10px] font-normal">©{new Date().getFullYear()}</sup>
          </Link>


          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link key={link.id} href={`/#${link.id}`} className="link-underline">
                {link.label}
              </Link>
            ))}
            <button onClick={toggleTheme} className="link-underline">
              {themeLabel}
            </button>
          </div>

          <button onClick={() => setIsOpen(true)} className="link-underline md:hidden" aria-expanded={isOpen}>
            Menu
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper md:hidden"
          >
            <div className="container-page flex h-16 items-center justify-between text-sm font-medium">
              <span className="font-bold">{profile.name}</span>
              <button onClick={() => setIsOpen(false)} className="link-underline">
                Close
              </button>
            </div>

            <div className="container-page flex flex-1 flex-col justify-center">
              {LINKS.map((link, index) => (
                <Link
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-baseline gap-4 border-t border-paper/20 py-3"
                >
                  <span className="text-xs text-paper/50">0{index + 1}</span>
                  <span className="display text-[15vw]">
                    <Mask delay={0.25 + index * 0.07}>{link.label}</Mask>
                  </span>
                </Link>
              ))}
            </div>

            <div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-paper/20 py-5 text-sm">
              <button onClick={toggleTheme} className="link-underline">
                {themeLabel}
              </button>
              <a href={`mailto:${profile.email}`} className="link-underline">
                {profile.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
