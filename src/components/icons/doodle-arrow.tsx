import type { SVGProps } from "react";

export function DoodleArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 74 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 35.8941C14.3333 30.7275 39.8 17.0941 72 2M72 2L62.8333 13.5M72 2L55 9.83333" />
    </svg>
  );
}
