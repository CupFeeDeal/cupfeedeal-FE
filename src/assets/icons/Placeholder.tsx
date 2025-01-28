import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaceholder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 120 120"
    {...props}
  >
    <rect width={120} height={120} fill="#D1D6DB" rx={8} />
  </svg>
);
export default SvgPlaceholder;
