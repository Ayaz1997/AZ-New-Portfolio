import type { SVGProps } from "react";

export function QuoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M10 12.0001L12.5 9.50012V7.50012H8.5V13.5001H12.5V10.5001L10 13.0001V12.0001Z" fill="currentColor"/>
      <path d="M16.5 12.0001L19 9.50012V7.50012H15V13.5001H19V10.5001L16.5 13.0001V12.0001Z" fill="currentColor"/>
    </svg>
  );
}
