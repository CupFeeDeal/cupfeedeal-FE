import * as React from "react";
import type { SVGProps } from "react";
const SvgLevelBannerBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 390 275"
    {...props}
  >
    <g clipPath="url(#LevelBanner_bg_svg__a)">
      <path fill="#EAF4FF" d="M0 0h390v275H0z" />
      <path
        fill="url(#LevelBanner_bg_svg__b)"
        fillRule="evenodd"
        d="M167.315 360.324c49.144 37.317 134.732 14.831 191.167-50.222 56.436-65.054 62.346-148.042 13.202-185.359-49.144-37.316-134.732-14.831-191.167 50.223-56.436 65.053-62.346 148.041-13.202 185.358m33.412-45.909c13.287-42.4 56.543-111.214 129.467-147.03 2.676-1.314 5.397 1.354 4.088 4.031-20.536 41.972-74.939 116.096-129.205 146.498-2.441 1.368-5.186-.829-4.35-3.499"
        clipRule="evenodd"
      />
      <path
        fill="url(#LevelBanner_bg_svg__c)"
        fillRule="evenodd"
        d="M-15.301 12.946c-20.175 31.501 2.09 78.688 49.73 105.394s102.614 22.82 122.789-8.681-2.089-78.688-49.729-105.394-102.615-22.82-122.79 8.681M16.196 27.91c29.042 3.466 79.93 22.578 110.279 62.811.764 1.013-.111 2.362-1.336 2.042-29.199-7.638-85.204-33.267-110.068-62.75a1.267 1.267 0 0 1 1.125-2.103"
        clipRule="evenodd"
        opacity={0.45}
      />
      <path
        fill="#AAD2FF"
        fillRule="evenodd"
        d="M338.078-8.834c7.221 11.275-.748 28.166-17.801 37.726s-36.731 8.168-43.953-3.108.748-28.166 17.801-37.726 36.731-8.168 43.953 3.108m-11.275 5.357c-10.396 1.24-28.611 8.081-39.475 22.483a.458.458 0 0 0 .479.73c10.452-2.733 30.499-11.907 39.399-22.46a.454.454 0 0 0-.403-.753"
        clipRule="evenodd"
        opacity={0.25}
      />
    </g>
    <defs>
      <linearGradient
        id="LevelBanner_bg_svg__b"
        x1={269.499}
        x2={269.499}
        y1={106.717}
        y2={378.35}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAD2FF" />
        <stop offset={1} stopColor="#AAD2FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="LevelBanner_bg_svg__c"
        x1={59.498}
        x2={61.094}
        y1={14.152}
        y2={199.771}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAD2FF" />
        <stop offset={1} stopColor="#AAD2FF" stopOpacity={0} />
      </linearGradient>
      <clipPath id="LevelBanner_bg_svg__a">
        <path fill="#fff" d="M0 0h390v275H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLevelBannerBg;
