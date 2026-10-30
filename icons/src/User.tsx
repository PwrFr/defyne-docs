import * as React from "react";
import type { SVGProps } from "react";
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SvgUser = ({ size = 24, width, height, ...restProps }: IconProps) => {
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
      <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3 14v-2c0-2.21-1.79-4-4-4H9c-2.21 0-4 1.79-4 4v2z" />
    </svg>
  );
};
export default SvgUser;
