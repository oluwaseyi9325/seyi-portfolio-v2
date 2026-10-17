import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { EASE } from "@/components/ui/Reveal";

const ResumeContext = createContext({ openResume: () => false });

// Browsers on laptops/desktops show PDFs inside a page reliably; phones don't
// (Android shows nothing, iOS often only the first page), so they get a new tab.
const canPreviewInline = () =>
  typeof window !== "undefined" && window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;

const ResumeModal = ({ onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${profile.name} résumé`}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-0 z-[70] flex flex-col bg-ink text-paper"
    >
      <div className="container-page flex h-16 shrink-0 items-center justify-between gap-6 text-sm font-medium">
        <p>
          <span className="font-bold">{profile.name}</span>
          <span className="text-paper/50"> — Résumé</span>
        </p>
        <div className="flex items-center gap-6">
          <a href={profile.resume} download className="link-underline">
            Download ↓
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="link-underline">
            Open in new tab ↗
          </a>
          <button ref={closeRef} onClick={onClose} className="link-underline">
            Close ✕
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
        className="container-page min-h-0 flex-1 pb-6"
      >
        <iframe
          src={`${profile.resume}#view=FitH&navpanes=0`}
          title={`${profile.name} résumé (PDF)`}
          className="h-full w-full border-2 border-paper/20 bg-white"
        />
      </motion.div>
    </motion.div>
  );
};

export const ResumeProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  // Returns true when the pop-up handled it; false means "let the link open normally".
  const openResume = useCallback(() => {
    if (!canPreviewInline()) return false;
    setIsOpen(true);
    return true;
  }, []);

  return (
    <ResumeContext.Provider value={{ openResume }}>
      {children}
      <AnimatePresence>{isOpen && <ResumeModal onClose={close} />}</AnimatePresence>
    </ResumeContext.Provider>
  );
};

// A normal link to the PDF (new tab), upgraded to the pop-up on laptops/desktops.
export const ResumeLink = ({ children, className = "" }) => {
  const { openResume } = useContext(ResumeContext);
  return (
    <a
      href={profile.resume}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        // Cmd/Ctrl/Shift-click keeps the browser's usual "open in new tab/window".
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        if (openResume()) event.preventDefault();
      }}
      className={className}
    >
      {children}
    </a>
  );
};
