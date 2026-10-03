import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { initials, projects } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import LogoTile from "@/components/ui/LogoTile";
import { EASE } from "@/components/ui/Reveal";

const FILTERS = ["All", "Web", "Mobile", "AI", "Tools"];

// Same row entrance as Experience: the rule draws across, then the name slides up.
const rowLine = { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1, ease: EASE } } };
const rowTitle = { hidden: { y: "110%" }, visible: { y: "0%", transition: { duration: 0.9, ease: EASE, delay: 0.15 } } };
const rowMeta = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.7, ease: EASE, delay: 0.3 } } };

// Card that trails the cursor over the project list (desktop only).
const CursorPreview = ({ project, x, y }) => (
  <motion.div
    style={{ x, y }}
    animate={{ scale: project ? 1 : 0, opacity: project ? 1 : 0 }}
    transition={{ duration: 0.35, ease: EASE }}
    className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
    aria-hidden="true"
  >
    <div className="rule w-72 -translate-x-1/2 -translate-y-1/2 border-2 bg-paper dark:bg-ink">
      {project && (
        <>
          <div style={{ backgroundColor: project.imgBg || "#ffffff" }} className="relative h-40 border-b-2 border-ink dark:border-paper">
            {project.img ? (
              <div className="absolute inset-8">
                <Image src={project.img} alt="" fill sizes="288px" className="object-contain" />
              </div>
            ) : (
              <span className="display absolute inset-0 grid place-items-center text-7xl text-ink">{initials(project.name)}</span>
            )}
          </div>
          <p className="p-4 text-sm leading-snug">{project.summary}</p>
        </>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [hovered, setHovered] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 250, damping: 28 });
  const y = useSpring(mouseY, { stiffness: 250, damping: 28 });

  const showPreview = (project, event) => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    // Jump straight to the pointer on first entry, so the card doesn't fly in from
    // wherever it was last (e.g. when a row scrolls under a still cursor).
    if (!hovered) {
      x.jump(event.clientX);
      y.jump(event.clientY);
    }
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
    setHovered(project);
  };

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="container-page py-24 md:py-32">
      <SectionHeader index="05" label="Work" title="Selected work">
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base">
          {FILTERS.map((name) => {
            const count = name === "All" ? projects.length : projects.filter((p) => p.category.includes(name)).length;
            const isActive = filter === name;
            return (
              <button
                key={name}
                onClick={() => setFilter(name)}
                aria-current={isActive}
                className={`link-underline ${isActive ? "" : "muted"}`}
              >
                {name}
                <sup className="ml-0.5 text-[10px]">{count}</sup>
              </button>
            );
          })}
        </div>
      </SectionHeader>

      <ul
        className="project-list rule border-b-2"
        onMouseMove={(event) => {
          mouseX.set(event.clientX);
          mouseY.set(event.clientY);
        }}
        onMouseLeave={() => setHovered(null)}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((project, index) => (
            <motion.li
              layout
              key={project.slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              onMouseEnter={(event) => showPreview(project, event)}
              className="project-row"
            >
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, margin: "-40px" }} className="relative">
                <motion.span
                  variants={rowLine}
                  className="absolute inset-x-0 top-0 h-[2px] origin-left bg-ink dark:bg-paper"
                  aria-hidden="true"
                />
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-[2rem_1fr_auto] items-center gap-4 py-5 md:grid-cols-[3rem_1fr_10rem_16rem_2rem] md:gap-6 md:py-7"
                >
                  <motion.span variants={rowMeta} className="muted text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                  <span className="flex min-w-0 items-center gap-3">
                    <LogoTile logo={project.img} logoBg={project.imgBg} name={project.name} className="md:hidden" />
                    <span className="block overflow-hidden">
                      <motion.span variants={rowTitle} className="display block pb-[0.04em] text-3xl md:text-6xl">
                        <span className="inline-block transition-transform duration-500 ease-expo group-hover:translate-x-3">
                          {project.name}
                        </span>
                      </motion.span>
                    </span>
                  </span>
                  <motion.span variants={rowMeta} className="muted hidden text-sm md:block">
                    {project.category.join(" / ")}
                  </motion.span>
                  <motion.span variants={rowMeta} className="muted hidden truncate text-sm md:block">
                    {project.stack}
                  </motion.span>
                  <motion.span variants={rowMeta} className="text-2xl">
                    <span className="inline-block transition-transform duration-500 ease-expo group-hover:-rotate-45">→</span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <CursorPreview project={hovered} x={x} y={y} />
    </section>
  );
};

export default Projects;
