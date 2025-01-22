import * as React from "react";
import type { SVGProps } from "react";
const SvgMyBannerBg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 390 334"
    {...props}
  >
    <g clipPath="url(#MyBanner_bg_svg__a)">
      <path fill="#EAF4FF" d="M0 0h390v334H0z" />
      <path
        fill="url(#MyBanner_bg_svg__b)"
        fillRule="evenodd"
        d="M137.314 330.324c49.144 37.317 134.733 14.831 191.168-50.222 56.435-65.054 62.346-148.042 13.202-185.358s-134.733-14.832-191.168 50.222c-56.435 65.053-62.345 148.041-13.202 185.358m33.413-45.909c13.287-42.4 56.542-111.214 129.467-147.03 2.675-1.314 5.397 1.354 4.087 4.031-20.535 41.972-74.938 116.096-129.204 146.498-2.441 1.368-5.187-.829-4.35-3.499"
        clipRule="evenodd"
      />
      <path
        fill="url(#MyBanner_bg_svg__c)"
        fillRule="evenodd"
        d="M-16.61 11.367c-18.312 28.59 1.896 71.417 45.134 95.656s93.133 20.711 111.444-7.88-1.896-71.416-45.134-95.655S1.7-17.223-16.611 11.368M11.975 24.95c26.36 3.145 72.545 20.491 100.09 57.007.693.919-.101 2.144-1.213 1.853-26.501-6.932-77.332-30.193-99.898-56.952a1.15 1.15 0 0 1 1.021-1.908"
        clipRule="evenodd"
        opacity={0.45}
      />
      <path
        fill="#AAD2FF"
        fillRule="evenodd"
        d="M338.078-12.834c7.221 11.275-.748 28.166-17.801 37.726s-36.731 8.168-43.953-3.108.748-28.166 17.801-37.726 36.731-8.168 43.953 3.108m-11.275 5.357c-10.396 1.24-28.611 8.081-39.475 22.483a.458.458 0 0 0 .479.73c10.452-2.733 30.499-11.907 39.399-22.46a.454.454 0 0 0-.403-.753"
        clipRule="evenodd"
        opacity={0.25}
      />
    </g>
    <defs>
      <linearGradient
        id="MyBanner_bg_svg__b"
        x1={239.499}
        x2={239.499}
        y1={76.717}
        y2={348.35}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAD2FF" />
        <stop offset={1} stopColor="#AAD2FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="MyBanner_bg_svg__c"
        x1={51.277}
        x2={52.726}
        y1={12.461}
        y2={180.93}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAD2FF" />
        <stop offset={1} stopColor="#AAD2FF" stopOpacity={0} />
      </linearGradient>
      <clipPath id="MyBanner_bg_svg__a">
        <path fill="#fff" d="M0 0h390v334H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMyBannerBg;
