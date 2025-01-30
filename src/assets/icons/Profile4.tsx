import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 53 53"
    width="3rem"
    {...props}
  >
    <circle cx={26.5} cy={26.5} r={26} fill="#6EAAE8" stroke="#fff" />
    <mask
      id="Profile4_svg__a"
      width={51}
      height={51}
      x={1}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={26.5} cy={26.5} r={25.5} fill="#6EAAE8" />
    </mask>
    <g fill="#fff" mask="url(#Profile4_svg__a)">
      <circle cx={26.5} cy={19.5} r={9.5} />
      <circle cx={26.5} cy={52.5} r={20.5} />
    </g>
  </svg>
);
export default SvgProfile4;
