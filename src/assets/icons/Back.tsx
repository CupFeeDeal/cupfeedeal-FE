import * as React from "react";
import type { SVGProps } from "react";
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5rem"
    xmlns="http://www.w3.org/2000/svg"
    fill="#4E5968"
    viewBox="0 0 24 24"
    cursor="pointer"
    {...props}
  >
    <path d="m6.704 11.204 7.5-7.5a1.127 1.127 0 0 1 1.594 1.594L9.094 12l6.702 6.704a1.13 1.13 0 0 1 0 1.594 1.13 1.13 0 0 1-1.594 0l-7.5-7.5a1.126 1.126 0 0 1 .002-1.594" />
  </svg>
);
export default SvgBack;
