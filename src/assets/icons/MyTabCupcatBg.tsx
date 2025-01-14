import * as React from "react";
import type { SVGProps } from "react";
const SvgMyTabCupcatBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 169 120"
    {...props}
  >
    <g clipPath="url(#MyTabCupcat_bg_svg__a)">
      <rect width={169} height={120} fill="#EAF4FF" rx={10} />
      <g filter="url(#MyTabCupcat_bg_svg__b)" opacity={0.25}>
        <circle cx={130.5} cy={112.5} r={102.5} fill="#AAD2FF" />
      </g>
      <g opacity={0.75}>
        <rect width={92} height={123} x={66} y={45} fill="#AAD2FF" rx={6.032} />
        <rect
          width={73.902}
          height={30.75}
          x={75.047}
          y={53.999}
          fill="#1B7BE8"
          rx={3.016}
        />
        <rect
          width={7}
          height={29.218}
          x={87}
          y={56.087}
          fill="#5DA9FF"
          rx={1.5}
          transform="rotate(-8.934 87 56.087)"
        />
        <rect
          width={7}
          height={29.218}
          x={79.385}
          y={55.594}
          fill="#5DA9FF"
          opacity={0.8}
          rx={1.5}
          transform="rotate(-3.324 79.385 55.594)"
        />
        <rect
          width={7}
          height={29.218}
          x={125.639}
          y={59}
          fill="#5DA9FF"
          opacity={0.7}
          rx={1.5}
          transform="rotate(42.233 125.639 59)"
        />
        <rect
          width={7}
          height={29.218}
          x={147.209}
          y={77}
          fill="#5DA9FF"
          opacity={0.5}
          rx={1.5}
          transform="rotate(88.624 147.209 77)"
        />
        <rect
          width={73.902}
          height={31.5}
          x={75.047}
          y={90.75}
          fill="#1B7BE8"
          rx={3.016}
        />
      </g>
    </g>
    <defs>
      <clipPath id="MyTabCupcat_bg_svg__a">
        <rect width={169} height={120} fill="#fff" rx={10} />
      </clipPath>
      <filter
        id="MyTabCupcat_bg_svg__b"
        width={213}
        height={213}
        x={24}
        y={6}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_1729_16456"
          stdDeviation={2}
        />
      </filter>
    </defs>
  </svg>
);
export default SvgMyTabCupcatBg;
