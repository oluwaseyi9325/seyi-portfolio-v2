import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { work } from "@/data/portfolio";
import { EASE } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import LogoTile from "@/components/ui/LogoTile";

// Each row animates every time it scrolls into view: the top rule draws across,
// the logo pops in and the company name slides up from behind its edge.
const row = {
  line: { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: EASE } } },
  logo: {
    hidden: { opacity: 0, scale: 0.5, rotate: -8 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, ease: EASE, delay: 0.15 } },
  },
  title: { hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.9, ease: EASE, delay: 0.2 } } },
  meta: { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay: 0.35 } } },
};

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="container-page py-24 md:py-32">
      <SectionHeader index="04" label="Experience" title="Experience" />

      <ul className="rule border-b-2">
        {work.map((job, index) => {
          const isOpen = openIndex === index;
          const panelId = `job-panel-${index}`;
          return (
            <motion.li
              key={`${job.company}-${job.duration}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-60px" }}
              className="relative"
            >
              <motion.span
                variants={row.line}
                className="absolute inset-x-0 top-0 h-[2px] origin-left bg-ink dark:bg-paper"
                aria-hidden="true"
              />

              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left md:grid-cols-[auto_1fr_16rem_auto] md:gap-8 md:py-7"
              >
                <motion.span variants={row.logo} className="block">
                  <LogoTile logo={job.logo} logoBg={job.logoBg} name={job.company} />
                </motion.span>
                <span className="min-w-0">
                  <span className="block overflow-hidden">
                    <motion.span
                      variants={row.title}
                      className="block text-2xl font-bold tracking-[-0.03em] md:text-4xl"
                    >
                      <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-2">
                        {job.company}
                      </span>
                    </motion.span>
                  </span>
                  <motion.span variants={row.meta} className="muted block text-sm md:text-base">
                    {job.role}
                    {/* On narrow screens the date column is hidden, so show it with the role. */}
                    <span className="md:hidden"> · {job.duration}</span>
                  </motion.span>
                </span>
                <motion.span variants={row.meta} className="muted hidden text-sm md:block">
                  {job.duration}
                </motion.span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="text-4xl font-light leading-none"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-8 md:grid-cols-12 md:pb-10">
                      <div className="muted space-y-1 text-sm md:col-span-3 md:col-start-2">
                        <p>{job.location}</p>
                        {job.url && (
                          <a href={job.url} target="_blank" rel="noreferrer" className="link-underline inline-block text-ink dark:text-paper">
                            Visit website ↗
                          </a>
                        )}
                      </div>
                      <ul className="space-y-3 text-base leading-relaxed md:col-span-8 md:text-lg">
                        {job.responsibilities.map((item, itemIndex) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: EASE, delay: 0.15 + itemIndex * 0.08 }}
                            className="flex gap-4"
                          >
                            <span className="muted">—</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Experience;
