import * as React from "react";
import type { SVGProps } from "react";
const SvgCup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 51 32"
    width="3rem"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.5}
      d="M41.49.031H2.455A1.774 1.774 0 0 0 .681 1.806V12.45a21.36 21.36 0 0 0 7.217 15.97H2.455a1.774 1.774 0 0 0 0 3.548H41.49a1.774 1.774 0 0 0 0-3.549h-5.443a21.4 21.4 0 0 0 5.988-8.891 8.87 8.87 0 0 0 8.326-8.852V8.903A8.87 8.87 0 0 0 41.49.03m5.323 10.646a5.32 5.32 0 0 1-3.815 5.101c.176-1.1.265-2.212.266-3.327V3.886a5.32 5.32 0 0 1 3.549 5.017z"
    />
  </svg>
);
export default SvgCup;
