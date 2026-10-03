import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { EASE, Letters, Mask } from "@/components/ui/Reveal";

const fadeIn = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

const Portrait = ({ className, sizes }) => (
  <motion.span
    initial={{ clipPath: "inset(100% 0 0 0)" }}
    animate={{ clipPath: "inset(0% 0 0 0)" }}
    transition={{ duration: 1.2, ease: EASE, delay: 0.5 }}
    className={`relative block aspect-[4/5] shrink-0 overflow-hidden ${className}`}
  >
    <Image
      src={profile.portrait}
      alt={profile.name}
      fill
      priority
      sizes={sizes}
      className="object-cover object-[50%_20%] grayscale mix-blend-multiply transition duration-700 ease-expo hover:scale-105 dark:mix-blend-normal"
    />
  </motion.span>
);

// The name writes itself in, one letter at a time, just after the headline lands.
const NameLetters = () => (
  <span className="font-serif italic">
    <span className="sr-only">{profile.name}</span>
    {profile.name.split("").map((char, index) => (
      <motion.span
        key={index}
        aria-hidden="true"
        className="inline-block"
        initial={{ opacity: 0, y: "0.35em" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 1.1 + index * 0.06 }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const Intro = ({ className }) => (
  <motion.p {...fadeIn(0.9)} className={className}>
    Hi, I&apos;m <NameLetters />
    <br />
    building web & mobile products.
  </motion.p>
);

const [ROLE_FIRST, ROLE_SECOND] = profile.role.split(" ");

const Hero = () => (
  <section id="home" className="container-page flex min-h-[100svh] flex-col justify-end pb-6 pt-24">
    {/* Below laptop width: intro and a large photo sit above the headline. */}
    <div className="mb-6 flex items-end justify-between gap-6 lg:hidden">
      <Intro className="max-w-sm text-lg leading-snug sm:text-2xl" />
      <Portrait className="w-[40vw] sm:w-[34vw]" sizes="40vw" />
    </div>

    {/* The role is the headline; the name sits in the intro and the top bar. */}
    <h1 className="display relative text-[17vw] lg:text-[13.5vw]" aria-label={`${profile.name}, ${profile.role}`}>
      <Letters text={ROLE_FIRST} delay={0.1} />
      <Mask delay={0.45}>
        <span className="block pb-[0.08em] pr-[0.08em] font-serif font-normal normal-case italic tracking-[-0.01em]">
          {ROLE_SECOND}
        </span>
      </Mask>

      {/* Laptop and up: pinned bottom-right so the tall photo rises beside the first
          word instead of pushing the two lines apart. */}
      <span className="absolute bottom-[2vw] right-0 hidden max-w-[48vw] items-end gap-6 lg:flex">
        <Intro className="text-right text-[1.9vw] font-medium normal-case leading-tight tracking-normal" />
        <Portrait className="w-[16vw]" sizes="16vw" />
      </span>
    </h1>

    <motion.div
      {...fadeIn(1)}
      className="rule mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t-2 pt-4 text-sm md:grid-cols-12 md:text-base"
    >
      <p className="col-span-2 md:col-span-5">
        5+ years building with React, Next.js, React Native and Node.js — for startups and product teams across
        Africa and beyond.
      </p>
      <p className="muted md:col-span-3 md:col-start-7">
        Based in {profile.location}
        <br />
        Open to international opportunities
      </p>
      <Link href="/#contact" className="group flex items-start justify-end gap-2 text-right md:col-span-3">
        <span className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
        <span className="link-underline">Let&apos;s connect</span>
      </Link>
    </motion.div>
  </section>
);

export default Hero;
