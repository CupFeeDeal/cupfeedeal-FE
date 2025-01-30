import * as React from "react";
import type { SVGProps } from "react";
const SvgProfile3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <g clipPath="url(#Profile3_svg__a)">
      <circle
        cx={45}
        cy={45}
        r={43.843}
        fill="#1B7BE8"
        stroke="#E3E8F5"
        strokeWidth={1.686}
      />
      <mask
        id="Profile3_svg__b"
        width={86}
        height={86}
        x={2}
        y={2}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <circle cx={45} cy={45} r={43} fill="#6EAAE8" />
      </mask>
      <g fill="#fff" mask="url(#Profile3_svg__b)">
        <circle cx={45} cy={33.196} r={16.02} />
        <circle cx={45.001} cy={88.843} r={34.569} />
      </g>
    </g>
    <defs>
      <clipPath id="Profile3_svg__a">
        <path fill="#fff" d="M0 0h90v90H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProfile3;
