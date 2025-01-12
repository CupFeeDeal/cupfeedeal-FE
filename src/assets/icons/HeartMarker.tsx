import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <g filter="url(#HeartMarker_svg__a)">
      <circle cx={28} cy={28} r={15} fill="#fff" />
      <circle cx={28} cy={28} r={14.5} stroke="#AAD2FF" />
    </g>
    <path
      fill="#1B7BE8"
      d="M35.875 26.172c0 4.922-7.298 8.906-7.608 9.07a.56.56 0 0 1-.534 0c-.31-.164-7.608-4.148-7.608-9.07a4.364 4.364 0 0 1 4.36-4.36c1.451 0 2.723.625 3.515 1.68.792-1.055 2.064-1.68 3.516-1.68a4.364 4.364 0 0 1 4.359 4.36"
    />
    <defs>
      <filter
        id="HeartMarker_svg__a"
        width={55.4}
        height={55.4}
        x={0.3}
        y={0.3}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6.35} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.687683 0 0 0 0 0.69147 0 0 0 0 0.733122 0 0 0 0.31 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1219_15727"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1219_15727"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgHeartMarker;
