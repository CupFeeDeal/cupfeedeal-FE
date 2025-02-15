import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 103 113"
    {...props}
  >
    <g filter="url(#MapPin_svg__a)">
      <mask id="MapPin_svg__b" fill="#fff">
        <path
          fillRule="evenodd"
          d="M57.47 83.126a1.7 1.7 0 0 1 1.09-.794c13.87-3.215 24.208-15.649 24.208-30.497 0-17.289-14.016-31.304-31.305-31.304S20.16 34.546 20.16 51.835c0 14.521 9.887 26.734 23.297 30.271a1.7 1.7 0 0 1 1.04.782l5.132 8.829a1.648 1.648 0 0 0 2.849 0z"
          clipRule="evenodd"
        />
      </mask>
      <path
        fill="#F2F4F6"
        fillRule="evenodd"
        d="M57.47 83.126a1.7 1.7 0 0 1 1.09-.794c13.87-3.215 24.208-15.649 24.208-30.497 0-17.289-14.016-31.304-31.305-31.304S20.16 34.546 20.16 51.835c0 14.521 9.887 26.734 23.297 30.271a1.7 1.7 0 0 1 1.04.782l5.132 8.829a1.648 1.648 0 0 0 2.849 0z"
        clipRule="evenodd"
      />
      <path
        fill="#1B7BE8"
        d="m49.628 91.717 1.559-.907zm2.849 0-1.56-.907zm-9.02-9.61.46-1.745zm1.039.781-1.56.907zm14.064-.556-.407-1.757zm-1.09.794-1.559-.907zm23.494-31.29c0 13.99-9.74 25.709-22.81 28.739l.813 3.513c14.67-3.4 25.604-16.547 25.604-32.253zm-29.5-29.502c16.292 0 29.5 13.208 29.5 29.501h3.607c0-18.285-14.823-33.108-33.108-33.108zM21.961 51.835c0-16.293 13.208-29.5 29.501-29.5v-3.608c-18.285 0-33.107 14.823-33.107 33.108zm21.954 28.527C31.28 77.028 21.962 65.517 21.962 51.835h-3.607c0 15.36 10.46 28.274 24.641 32.015zm7.27 10.448-5.131-8.828-3.118 1.813 5.132 8.828zm4.725-8.59-4.994 8.59 3.119 1.813 4.994-8.591zM48.07 92.622c1.33 2.289 4.636 2.289 5.967 0l-3.119-1.813a.18.18 0 0 1 .135-.077q.028-.002.072.02a.2.2 0 0 1 .063.057zm-5.073-8.773c-.005-.001-.034-.011-.06-.055l3.119-1.813a3.5 3.5 0 0 0-2.139-1.62zm15.157-3.275a3.5 3.5 0 0 0-2.242 1.644l3.119 1.813c-.027.046-.057.055-.062.056z"
        mask="url(#MapPin_svg__b)"
      />
    </g>
    <path
      fill="#1B7BE8"
      d="M44.956 60.64a14 14 0 0 1-4.345 1.175.51.51 0 0 1-.5-.256c-1.113-1.962-1.479-4.403-1.027-7.081.577-3.457 2.451-6.917 5.28-9.746 2.828-2.828 6.291-4.703 9.745-5.28 2.926-.486 5.569 0 7.613 1.362a.514.514 0 0 1-.16.928c-.963.23-1.901.55-2.802.958-2.796 1.27-6.369 3.988-7.514 9.72-.785 3.887-2.9 6.653-6.29 8.22M64.38 43.68a.51.51 0 0 0-.498-.257c-1.503.153-2.971.55-4.347 1.176-3.39 1.566-5.505 4.332-6.283 8.217-1.147 5.732-4.719 8.449-7.514 9.72-.901.407-1.84.728-2.802.958a.514.514 0 0 0-.158.937c1.524 1.017 3.38 1.54 5.438 1.54a13.3 13.3 0 0 0 2.172-.184c3.456-.577 6.917-2.451 9.746-5.28 2.828-2.828 4.703-6.291 5.28-9.745.441-2.679.079-5.12-1.034-7.083"
    />
    <defs>
      <filter
        id="MapPin_svg__a"
        width={102.365}
        height={111.762}
        x={0.281}
        y={0.653}
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
        <feGaussianBlur stdDeviation={9.939} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.687683 0 0 0 0 0.69147 0 0 0 0 0.733122 0 0 0 0.31 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_353" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_6_353"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgMapPin;
