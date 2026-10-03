import { motion } from "framer-motion";

export const EASE = [0.76, 0, 0.24, 1];

// Slides text up from behind an invisible edge. `inView` plays each time it scrolls
// into view (up or down); otherwise it plays once on page load. Visibility is watched on the outer
// (clipping) span: the inner text starts fully clipped, so the browser would never
// report it as visible.
const MASK_VARIANTS = { hidden: { y: "110%" }, visible: { y: "0%" } };

export const Mask = ({ children, delay = 0, inView = false, className = "" }) => {
  const trigger = inView
    ? { whileInView: "visible", viewport: { once: false, margin: "-40px" } }
    : { animate: "visible" };

  return (
    <motion.span initial="hidden" {...trigger} className={`block overflow-hidden pb-[0.04em] ${className}`}>
      <motion.span className="block" variants={MASK_VARIANTS} transition={{ duration: 1, ease: EASE, delay }}>
        {children}
      </motion.span>
    </motion.span>
  );
};

// Like Mask, but each letter rises on its own, one after another.
export const Letters = ({ text, delay = 0, stagger = 0.04 }) => (
  <span className="flex overflow-hidden pb-[0.04em]">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay: delay + index * stagger }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

// Fades content in with a small lift each time it scrolls into view (up or down).
const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default Reveal;
