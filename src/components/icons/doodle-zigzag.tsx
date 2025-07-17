import type { SVGProps } from "react";

export function DoodleZigzag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      {...props}
    >
      <path d="M2 2.5 C 10 0, 15 5, 25 2.5 S 40 5, 50 2.5 S 65 5, 75 2.5 S 90 0, 98 2.5" />
    </svg>
  );
}
