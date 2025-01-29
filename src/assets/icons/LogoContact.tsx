import * as React from "react";
import type { SVGProps } from "react";
const SvgLogoContact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <rect width={48} height={48} x={1} y={1} fill="#fff" rx={24} />
    <rect width={48} height={48} x={1} y={1} stroke="#AAD2FF" rx={24} />
    <path
      stroke="#1B7BE8"
      strokeLinecap="round"
      strokeWidth={2.301}
      d="m29.849 21.737-4.151-7.922a.611.611 0 0 0-1.083 0l-3.661 6.988a.611.611 0 0 1-1.057.045l-4.533-7.107a.611.611 0 0 0-1.074.08l-3.516 7.916c-1.87 5.232-2.55 15.737 9.69 15.898 15.301.201 10.813-13.382 14.587-15.898s7.344 2.616 4.284 5.836"
    />
    <path
      fill="#1B7BE8"
      fillRule="evenodd"
      d="M17.817 32.615c1.416 1.15 3.883.456 5.509-1.548s1.797-4.56.38-5.71c-1.416-1.149-3.883-.456-5.509 1.548s-1.797 4.56-.38 5.71m.945-1.354c.365-1.311 1.636-3.507 3.805-4.619a.066.066 0 0 1 .092.085c-.572 1.292-2.193 3.674-3.8 4.609a.065.065 0 0 1-.097-.075"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgLogoContact;
