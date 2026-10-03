import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WORDS = ["Web apps", "Mobile apps", "AI products", "Dashboards", "Learning platforms", "Mentoring"];

// A band of words that slides sideways as the page scrolls (driven by scroll, not a timer).
const ScrollBand = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-45%"]);

  return (
    <div ref={ref} className="rule overflow-hidden border-y-2 py-4 md:py-6" aria-hidden="true">
      <motion.div style={{ x }} className="display flex whitespace-nowrap text-[11vw] md:text-[6.5vw]">
        {[...WORDS, ...WORDS].map((word, index) => (
          <span key={index} className="flex items-center">
            {word}
            <span className="mx-[0.35em] font-serif font-normal normal-case italic">&amp;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollBand;
