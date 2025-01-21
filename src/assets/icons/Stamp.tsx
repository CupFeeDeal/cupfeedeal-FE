import * as React from "react";
import type { SVGProps } from "react";
const SvgStamp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 249 249"
    width="11.25rem"
    {...props}
  >
    <g opacity={0.49}>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={8.906}
        d="m154.881 106.795-20.302-38.748c-.969-1.85-3.617-1.85-4.586 0l-18.23 34.791c-.923 1.762-3.405 1.868-4.475.191L84.774 67.734c-1.11-1.74-3.71-1.545-4.548.341l-17.2 38.72c-9.006 25.196-12.28 75.782 46.664 76.557 73.682.969 52.069-64.444 70.244-76.557 18.174-12.114 35.367 12.598 20.63 28.103"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M96.945 159.176c6.821 5.535 18.699 2.2 26.531-7.45s8.653-21.961 1.832-27.496c-6.82-5.536-18.698-2.2-26.53 7.45s-8.653 21.96-1.833 27.496m4.531-6.435c1.73-6.325 7.892-17.014 18.441-22.375.241-.123.5.114.391.362-2.726 6.218-10.618 17.839-18.422 22.332a.279.279 0 0 1-.41-.319"
        clipRule="evenodd"
      />
      <circle cx={124.5} cy={124.5} r={119.5} stroke="#fff" strokeWidth={10} />
    </g>
  </svg>
);
export default SvgStamp;
