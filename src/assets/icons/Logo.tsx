import * as React from "react";
import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 44 44"
    {...props}
  >
    <path fill="#fff" d="M0 0h44v44H0z" />
    <path
      stroke="#333D4B"
      strokeLinecap="round"
      strokeWidth={2.469}
      d="m27.084 18.773-4.453-8.498a.656.656 0 0 0-1.161 0l-3.928 7.496a.656.656 0 0 1-1.133.048l-4.863-7.623a.656.656 0 0 0-1.152.086l-3.772 8.49c-2.006 5.614-2.735 16.882 10.395 17.055 16.413.215 11.599-14.356 15.647-17.054 4.05-2.698 7.879 2.806 4.596 6.26"
    />
    <path
      fill="#333D4B"
      fillRule="evenodd"
      d="M14.179 30.44c1.519 1.233 4.165.49 5.91-1.66 1.744-2.15 1.927-4.891.408-6.124s-4.166-.49-5.91 1.66c-1.745 2.149-1.928 4.89-.409 6.124m1.014-1.452c.391-1.407 1.755-3.762 4.082-4.955a.07.07 0 0 1 .098.091c-.613 1.386-2.352 3.94-4.076 4.944a.07.07 0 0 1-.104-.08"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLogo;
