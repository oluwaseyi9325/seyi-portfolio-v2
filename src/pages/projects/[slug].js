import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal, { Mask } from "@/components/ui/Reveal";
import { initials, profile, projects } from "@/data/portfolio";

const ProjectPage = ({ slug }) => {
  // Look the project up here rather than passing it through props, because
  // logo images are imported modules that can't be serialised by getStaticProps.
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const title = `${project.name} | ${profile.name}`;

  const meta = [
    { label: "Category", value: project.category.join(" / ") },
    { label: "Stack", value: project.stack },
    { label: "Live", value: project.liveDemo, link: true },
    { label: "Code", value: project.sourceCode, link: true },
  ];

  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={project.summary} />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={project.summary} />
        <meta key="og:url" property="og:url" content={`${profile.siteUrl}/projects/${project.slug}`} />
        <meta key="twitter:title" name="twitter:title" content={title} />
        <meta key="twitter:description" name="twitter:description" content={project.summary} />
      </Head>

      <Navbar />

      {/* key resets the entrance animations when moving from one project to the next. */}
      <main key={slug} className="container-page overflow-x-clip pt-28">
        <Link href="/#projects" className="link-underline text-sm">
          ← All work
        </Link>

        <h1 className="display mt-10 text-[15vw] md:text-[9vw]">
          <Mask>{project.name}</Mask>
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-4xl text-2xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
            {project.title}
          </p>
        </Reveal>

        <Reveal delay={0.4} className="rule mt-14 grid grid-cols-2 border-t-2 md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="border-b border-ink/20 py-4 pr-4 dark:border-paper/20 md:border-b-0">
              <p className="muted text-xs uppercase tracking-wider">{item.label}</p>
              {item.link ? (
                item.value ? (
                  <a href={item.value} target="_blank" rel="noreferrer" className="link-underline mt-1 inline-block">
                    {item.label === "Live" ? "Visit site" : "View source"} ↗
                  </a>
                ) : (
                  <p className="muted mt-1">Private</p>
                )
              ) : (
                <p className="mt-1">{item.value}</p>
              )}
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.5} className="rule relative mt-8 grid aspect-[16/9] place-items-center overflow-hidden border-2 md:aspect-[16/6]">
          {project.img ? (
            <div style={{ backgroundColor: project.imgBg || "#ffffff" }} className="relative h-1/2 w-2/3 md:w-1/3">
              <div className="absolute inset-[12%]">
                <Image src={project.img} alt={`${project.name} logo`} fill sizes="40vw" className="object-contain" />
              </div>
            </div>
          ) : (
            <span className="display text-[30vw] md:text-[16vw]">{initials(project.name)}</span>
          )}
        </Reveal>

        <section className="rule mt-24 grid gap-8 border-t-2 pt-4 md:mt-32 md:grid-cols-12">
          <p className="text-sm md:col-span-3">(01) Overview</p>
          <div className="space-y-6 md:col-span-9">
            <Reveal as="p" className="text-2xl font-medium leading-snug tracking-[-0.02em] md:text-[2.4vw]">
              {project.description[0]}
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {project.description.slice(1).map((paragraph) => (
                <Reveal as="p" key={paragraph} className="muted text-lg leading-relaxed">
                  {paragraph}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="rule mt-24 grid gap-8 border-t-2 pt-4 md:mt-32 md:grid-cols-12">
          <p className="text-sm md:col-span-3">(02) Features</p>
          <ul className="rule border-b md:col-span-9">
            {project.features.map((feature, featureIndex) => (
              <Reveal as="li" key={feature} className="rule grid grid-cols-[3rem_1fr] border-t py-4 text-lg md:text-xl">
                <span className="muted text-sm">{String(featureIndex + 1).padStart(2, "0")}</span>
                {feature}
              </Reveal>
            ))}
          </ul>
        </section>

        <Link href={`/projects/${next.slug}`} className="rule group relative mt-24 block overflow-hidden border-y-2 md:mt-32">
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-expo group-hover:scale-y-100 dark:bg-paper" />
          <span className="relative block py-8 transition-colors duration-500 group-hover:text-paper dark:group-hover:text-ink md:py-12">
            <span className="block text-sm">Next project →</span>
            <span className="display mt-3 block text-[13vw] md:text-[7vw]">{next.name}</span>
          </span>
        </Link>
      </main>

      <Footer />
    </>
  );
};

export const getStaticPaths = () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => ({ props: { slug: params.slug } });

export default ProjectPage;
