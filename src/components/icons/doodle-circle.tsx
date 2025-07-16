import type { SVGProps } from "react";

export function DoodleCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 101 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M99 19.4686C99 29.8375 72.8366 39.9999 49.5 39.9999C26.1634 39.9999 2 29.8375 2 19.4686C2 9.09961 26.1634 2 49.5 2C72.8366 2 99 9.09961 99 19.4686Z" transform="rotate(-3.94958 49.5 19.4686)" />
    </svg>
  );
}
