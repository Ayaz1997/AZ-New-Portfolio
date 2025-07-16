import type { SVGProps } from "react";

export function DoodleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 106 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2.20312 69.5C2.20312 69.5 56.7031 62 103.703 2.5" />
      <path d="M103.703 2.5L88.7031 16.5" />
      <path d="M103.703 2.5L92.7031 22" />
    </svg>
  );
}
