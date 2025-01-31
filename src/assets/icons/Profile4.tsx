import * as React from "react";
import type { SVGProps } from "react";

const SvgProfile4 = ({
  selected = false,
  ...props
}: SVGProps<SVGSVGElement> & { selected?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 90 90"
    {...props}
  >
    <g clipPath="url(#Profile4_svg__a)">
      <circle
        cx={45}
        cy={45}
        r={43.843}
        fill="#0E4E97"
        stroke={selected ? "#5DA9FF" : "#E3E8F5"}
        strokeWidth={1.686}
      />
      <mask
        id="Profile4_svg__b"
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
      <g fill="#fff" mask="url(#Profile4_svg__b)">
        <circle cx={45} cy={33.196} r={16.02} />
        <circle cx={45.001} cy={88.843} r={34.569} />
      </g>
    </g>
    <defs>
      <clipPath id="Profile4_svg__a">
        <path fill="#fff" d="M0 0h90v90H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProfile4;
