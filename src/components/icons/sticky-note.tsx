import type { SVGProps } from "react";

export function StickyNoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <rect x="5" y="5" width="90" height="90" fill="currentColor" rx="8" />
        <text x="50" y="35" fontFamily="monospace" fontSize="12" textAnchor="middle" fill="#333">
          - UI Design
        </text>
        <text x="50" y="55" fontFamily="monospace" fontSize="12" textAnchor="middle" fill="#333">
          - UX Design
        </text>
        <text x="50" y="75" fontFamily="monospace" fontSize="12" textAnchor="middle" fill="#333">
          - Branding
        </text>
      </g>
    </svg>
  );
}
