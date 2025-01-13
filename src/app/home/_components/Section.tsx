import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  scroll?: boolean;
}

export const Section = ({ title, children, scroll }: SectionProps) => (
  <section className="px-5 mt-14">
    <h2 className="Subhead_1_bold mb-4">{title}</h2>
    {scroll ? (
      <div className="overflow-x-auto">
        <div className="flex">{children}</div>
      </div>
    ) : (
      children
    )}
  </section>
);
