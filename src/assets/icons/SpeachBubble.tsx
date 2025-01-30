import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeachBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 77"
    width="12.5rem"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M1.09 5.46C0 7.6 0 10.4 0 16v31c0 5.6 0 8.4 1.09 10.54a10 10 0 0 0 4.37 4.37C7.6 63 10.4 63 16 63h75.262l7.506 13c.77 1.333 2.694 1.333 3.464 0l7.506-13H184c5.601 0 8.401 0 10.54-1.09a10 10 0 0 0 4.37-4.37C200 55.4 200 52.6 200 47V16c0-5.6 0-8.4-1.09-10.54a10 10 0 0 0-4.37-4.37C192.401 0 189.601 0 184 0H16C10.4 0 7.6 0 5.46 1.09a10 10 0 0 0-4.37 4.37"
      clipRule="evenodd"
    />
    <foreignObject x="0" y="0" width="100%" height="100%">
      <div className="h-16 grid place-content-center">
        <p className="Caption_med text-center">
          간편하게 로그인하고
          <br />
          오늘부터 커피값을 아껴봐요
        </p>
      </div>
    </foreignObject>
  </svg>
);
export default SvgSpeachBubble;
