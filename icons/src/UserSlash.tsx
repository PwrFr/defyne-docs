import * as React from "react";
import type { SVGProps } from "react";
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SvgUserSlash = ({
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
      <path d="m3 3 18 18m-5.66 0H5v-2c0-2.21 1.79-4 4-4h.34M16 7a4 4 0 0 1-5.18 3.82h-.01L8.18 8.19A3.999 3.999 0 0 1 12 3c2.21 0 4 1.79 4 4m3 12-4-4c2.21 0 4 1.79 4 4" />
    </svg>
  );
};
export default SvgUserSlash;
