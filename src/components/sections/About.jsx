import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about, profile } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
};

const About = () => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.85", "end 0.5"] });
  const words = about[0].split(" ");

  return (
    <section id="about" className="container-page py-24 md:py-40">
      <div className="grid gap-8 md:grid-cols-12">
        <p className="text-sm md:col-span-3">(01) About</p>

        <div className="md:col-span-9">
          {/* Each word brightens in turn as the paragraph scrolls through the screen. */}
          <p
            ref={textRef}
            className="text-[8vw] font-medium leading-[1.1] tracking-[-0.02em] md:text-[4.4vw]"
          >
            {words.map((word, index) => (
              <Word key={index} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
                {word}
              </Word>
            ))}
          </p>

          <Reveal className="rule mt-14 grid gap-6 border-t pt-6 md:grid-cols-2">
            <p className="muted text-lg leading-relaxed">{about[1]}</p>
            <div className="flex flex-col items-start gap-2 text-lg md:items-end">
              <a href={profile.resume} download className="link-underline">
                Download résumé ↓
              </a>
              <a href={`mailto:${profile.email}`} className="link-underline">
                {profile.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
