import { Mask } from "./Reveal";

const SectionHeader = ({ index, label, title, children }) => (
  <div className="rule mb-12 grid gap-6 border-t-2 pt-4 md:mb-20 md:grid-cols-12">
    <p className="text-sm md:col-span-3">
      ({index}) {label}
    </p>
    <div className="md:col-span-9">
      <h2 className="display text-[14vw] md:text-[8vw]">
        <Mask inView>{title}</Mask>
      </h2>
      {children}
    </div>
  </div>
);

export default SectionHeader;
