import * as React from "react";
import type { SVGProps } from "react";
const SvgBannerBasic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 390 205"
    {...props}
  >
    <g clipPath="url(#BannerBasic_svg__a)">
      <path fill="#EAF4FF" d="M0 0h390v205H0z" />
      <path
        fill="url(#BannerBasic_svg__b)"
        fillRule="evenodd"
        d="M147.315 353.071c49.143 39.886 134.732 15.852 191.167-53.681s62.346-158.236 13.202-198.122-134.733-15.853-191.168 53.68c-56.435 69.534-62.345 158.236-13.201 198.123m33.315-48.74c13.177-45.307 56.491-119.159 129.639-157.524 2.642-1.386 5.441 1.209 4.205 3.925-20.385 44.785-74.96 124.411-129.397 157.009-2.416 1.447-5.233-.705-4.447-3.41"
        clipRule="evenodd"
      />
      <path
        fill="url(#BannerBasic_svg__c)"
        fillOpacity={0.7}
        fillRule="evenodd"
        d="M-6.61 12.15c-18.311 30.56 1.896 76.335 45.134 102.243s93.133 22.137 111.444-8.422-1.896-76.335-45.134-102.243S11.7-18.409-6.611 12.15m28.526 14.51c26.383 3.345 72.705 21.928 100.259 61.094.655.932-.175 2.147-1.273 1.84C94.368 82.19 43.357 57.24 20.836 28.556a1.17 1.17 0 0 1 1.08-1.896"
        clipRule="evenodd"
        opacity={0.45}
      />
      <path
        fill="#AAD2FF"
        fillRule="evenodd"
        d="M348.078-13.719c7.221 12.053-.748 30.106-17.801 40.324s-36.731 8.731-43.953-3.321c-7.222-12.053.748-30.106 17.801-40.324s36.731-8.731 43.953 3.321m-11.251 5.723C326.422-6.676 308.152.653 297.286 16.1a.465.465 0 0 0 .501.726c10.465-2.92 30.584-12.76 39.466-24.073a.462.462 0 0 0-.426-.748"
        clipRule="evenodd"
        opacity={0.25}
      />
    </g>
    <defs>
      <linearGradient
        id="BannerBasic_svg__b"
        x1={249.499}
        x2={249.499}
        y1={82}
        y2={372.339}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAD2FF" />
        <stop offset={1} stopColor="#AAD2FF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="BannerBasic_svg__c"
        x1={60.888}
        x2={60.888}
        y1={13.5}
        y2={192.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AAD2FF" />
        <stop offset={1} stopColor="#AAD2FF" stopOpacity={0} />
      </linearGradient>
      <clipPath id="BannerBasic_svg__a">
        <path fill="#fff" d="M0 0h390v205H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBannerBasic;
