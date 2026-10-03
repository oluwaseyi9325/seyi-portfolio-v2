import { stack } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const Stack = () => (
  <section id="stack" className="container-page py-24 md:py-32">
    <SectionHeader index="03" label="Stack" title="Toolkit" />

    <div className="rule border-b">
      {stack.map((group, index) => (
        <Reveal key={group.title} delay={index * 0.05} className="rule grid gap-2 border-t py-5 md:grid-cols-12 md:py-6">
          <p className="muted pt-1 text-sm uppercase tracking-wider md:col-span-3">{group.title}</p>
          <p className="text-2xl font-medium tracking-[-0.02em] md:col-span-9 md:text-4xl">
            {group.items.map((item, itemIndex) => (
              <span key={item}>
                {itemIndex > 0 && <span className="muted mx-2 font-serif font-normal italic md:mx-3">/</span>}
                {item}
              </span>
            ))}
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Stack;
