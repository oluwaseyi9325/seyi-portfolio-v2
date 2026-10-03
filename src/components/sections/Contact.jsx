import { profile, socials } from "@/data/portfolio";
import Reveal, { Mask } from "@/components/ui/Reveal";

const LINKS = [
  ...socials,
  { title: "Résumé", url: profile.resume, download: true },
];

const Contact = () => (
  <section id="contact" className="container-page pb-16 pt-24 md:pt-32">
    <div className="rule grid gap-6 border-t-2 pt-4 md:grid-cols-12">
      <p className="text-sm md:col-span-3">(06) Contact</p>
    </div>

    <h2 className="display mt-10 text-[16vw] md:text-[11vw]">
      <Mask inView>Let&apos;s work</Mask>
      <Mask inView delay={0.1}>
        <span className="font-serif font-normal normal-case italic tracking-[-0.02em]">together.</span>
      </Mask>
    </h2>

    <Reveal className="mt-10 md:mt-14">
      <a
        href={`mailto:${profile.email}`}
        className="link-underline break-all text-[6.5vw] font-medium tracking-[-0.02em] md:text-[3.5vw]"
      >
        {profile.email}
      </a>
    </Reveal>

    <Reveal className="rule mt-16 grid gap-10 border-t-2 pt-6 md:grid-cols-12">
      <p className="muted text-lg leading-relaxed md:col-span-5">
        I&apos;m open to full-time roles, freelance projects and collaborations. Email is the fastest way to reach
        me, and my résumé has everything else.
      </p>
      <ul className="grid grid-cols-2 gap-x-8 md:col-span-6 md:col-start-7">
        {LINKS.map((link) => (
          <li key={link.title} className="border-b border-ink/20 dark:border-paper/20">
            <a
              href={link.url}
              {...(link.download ? { download: true } : { target: "_blank", rel: "noreferrer" })}
              className="group flex items-center justify-between py-3 text-lg"
            >
              {link.title}
              <span className="transition-transform duration-500 ease-expo group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Contact;
