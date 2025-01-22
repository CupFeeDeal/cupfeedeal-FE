import * as React from "react";
import type { SVGProps } from "react";
const SvgMyTabHistoryBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 169 120"
    {...props}
  >
    <g clipPath="url(#MyTabHistory_bg_svg__a)">
      <rect width={169} height={120} fill="#EAF4FF" rx={10} />
      <g filter="url(#MyTabHistory_bg_svg__b)" opacity={0.25}>
        <circle cx={130.5} cy={112.5} r={102.5} fill="#AAD2FF" />
      </g>
      <path
        fill="#fff"
        d="M76.5 86c16.419-9.948 24.057-22.065 36-51 15.26 13.777 29 10.5 44 10.5-.752 27.043-6.292 44.43-34 69-13-5.5-30.147-8.339-46-28.5"
      />
      <circle
        cx={68.958}
        cy={43.703}
        r={2.953}
        fill="#1B7BE8"
        transform="rotate(-41.71 68.958 43.703)"
      />
      <circle
        cx={54.252}
        cy={68.912}
        r={1.243}
        fill="#0E4E97"
        transform="rotate(-41.71 54.252 68.912)"
      />
      <path
        stroke="#AAD2FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.806}
        d="M59.612 61.234s1.404-3.172 4.308-2.776 2.887 4.079 2.887 4.079 1.674-3.5 5.592-2.872c3.265.523 3.528 4.03 3.528 4.03s1.742-2.583 5.042-1.602c2.03.603 2.842 3.472 2.842 3.472"
      />
      <path
        stroke="#AAD2FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.669}
        d="M112 56.335s2.131-2.826 5.865-2.26c3.733.566 3.351 3.958 3.351 3.958s2.514-3.109 7.541-2.26c4.189.708 4.189 3.959 4.189 3.959s2.513-2.26 6.703-1.129C142.227 59.3 143 62 143 62M109 64.335s2.131-2.826 5.865-2.26c3.733.566 3.351 3.959 3.351 3.959s2.514-3.11 7.541-2.26c4.189.707 4.189 3.958 4.189 3.958s2.513-2.26 6.703-1.129C139.227 67.3 140 70 140 70M104 73.335s2.131-2.826 5.865-2.26c3.733.566 3.351 3.959 3.351 3.959s2.514-3.11 7.541-2.26c4.189.707 4.189 3.958 4.189 3.958s2.513-2.26 6.703-1.129C134.227 76.3 135 79 135 79"
        opacity={0.5}
      />
      <path
        stroke="#5DA9FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.806}
        d="M97.698 58.519c-1.71-3.376-.086-15.512 7.227-19.219"
      />
      <circle
        cx={111.491}
        cy={41.942}
        r={1.774}
        fill="#AAD2FF"
        transform="rotate(-26.881 111.491 41.942)"
      />
      <path
        stroke="#5DA9FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.227}
        d="M56.02 79.926s1.606-3.603 4.903-4.643c2.778-.877 5.603-.62 6.721 1.557.509.99.033 3.02-1.72 2.858-1.754-.162-2.436-1.786-2.209-3.117.32-1.875 2.013-3.767 4.124-4.092 2.532-.39 3.929.259 3.929.259"
      />
      <g clipPath="url(#MyTabHistory_bg_svg__c)">
        <path
          fill="#1B7BE8"
          d="M112.59 63.637 77.729 75.192a1.67 1.67 0 0 0-1.06 2.11l3.152 9.508a20.1 20.1 0 0 0 11.173 12.125l-4.86 1.611a1.668 1.668 0 0 0-.225 3.077 1.67 1.67 0 0 0 1.275.092l34.861-11.555a1.667 1.667 0 0 0 1.059-2.11 1.67 1.67 0 0 0-2.11-1.06l-4.86 1.612a20.16 20.16 0 0 0 2.715-9.714 8.349 8.349 0 0 0 4.816-10.37l-.526-1.585a8.345 8.345 0 0 0-10.549-5.296m7.906 7.932a5.01 5.01 0 0 1-1.897 5.685 20 20 0 0 0-.747-3.05l-2.536-7.65a5.01 5.01 0 0 1 4.654 3.43z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="MyTabHistory_bg_svg__a">
        <rect width={169} height={120} fill="#fff" rx={10} />
      </clipPath>
      <clipPath id="MyTabHistory_bg_svg__c">
        <path
          fill="#fff"
          d="m66.138 61.447 50.707-16.808 16.808 50.707-50.707 16.808z"
        />
      </clipPath>
      <filter
        id="MyTabHistory_bg_svg__b"
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
          result="effect1_foregroundBlur_1729_16467"
          stdDeviation={2}
        />
      </filter>
    </defs>
  </svg>
);
export default SvgMyTabHistoryBg;
