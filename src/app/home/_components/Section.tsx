import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  scroll?: boolean;
}

const Section = ({ title, children, scroll }: SectionProps) => (
  <section className="px-5 mt-14">
    <h2 className="Subhead_1_bold">{title}</h2>
    {scroll ? (
      <div className="overflow-x-auto -mx-5 -mb-5">
        <div className="flex gap-4 px-5 py-5">
          {children}
          <div className="w-1 shrink-0" />
        </div>
      </div>
    ) : (
      <div className="shadow-basic rounded-lg mt-5 overflow-hidden">
        {children}
      </div>
    )}
  </section>
);

export default Section;
