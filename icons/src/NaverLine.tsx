import * as React from "react";
import type { SVGProps } from "react";
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SvgNaverLine = ({
  size = 24,
  width,
  height,
  ...restProps
}: IconProps) => {
  const props = {
    ...restProps,
    width: width ?? size,
    height: height ?? size,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m12 9c0-2.76-2.69-5-6-5s-6 2.24-6 5 2.69 5 6 5v2s6-3 6-7" />
    </svg>
  );
};
export default SvgNaverLine;
