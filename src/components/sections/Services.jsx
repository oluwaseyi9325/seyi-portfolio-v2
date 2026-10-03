import { services } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const Services = () => (
  <section id="services" className="container-page py-24 md:py-32">
    <SectionHeader index="02" label="Services" title="What I do" />

    <ul className="rule border-b-2">
      {services.map((service, index) => (
        <Reveal as="li" key={service.title} delay={index * 0.05} className="rule group relative overflow-hidden border-t-2">
          {/* Ink fills the row from the bottom on hover. */}
          <div className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-expo group-hover:scale-y-100 dark:bg-paper" />
          <div className="relative grid gap-3 py-7 transition-all duration-500 ease-expo group-hover:text-paper dark:group-hover:text-ink md:grid-cols-12 md:items-center md:py-10 group-hover:px-4 md:group-hover:px-6">
            <span className="text-sm md:col-span-1">0{index + 1}</span>
            <h3 className="display text-4xl md:col-span-6 md:text-6xl">{service.title}</h3>
            <p className="text-base opacity-70 md:col-span-5 md:text-lg">{service.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  </section>
);

export default Services;
