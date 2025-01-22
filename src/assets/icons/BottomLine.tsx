import * as React from "react";
import type { SVGProps } from "react";
const SvgBottomLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 4"
    {...props}
  >
    <path stroke="#D1D6DB" strokeLinecap="round" strokeWidth={4} d="M2 2h30" />
  </svg>
);
export default SvgBottomLine;
