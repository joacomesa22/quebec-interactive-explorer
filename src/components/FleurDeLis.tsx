
import { SVGProps } from "react";

export function FleurDeLis(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Central stem */}
      <path d="M50,5 C50,5 45,25 45,35 S50,50 50,50 C50,50 55,45 55,35 S50,5 50,5 Z" />
      
      {/* Top flourish */}
      <path d="M30,40 C30,40 40,35 50,35 C60,35 70,40 70,40 C70,40 65,25 50,25 C35,25 30,40 30,40 Z" />
      
      {/* Left leaf */}
      <path d="M30,40 C30,40 25,55 25,65 C25,75 30,75 30,75 C30,75 35,85 45,85 C55,85 55,75 55,75 L45,45 H30 Z" />
      
      {/* Right leaf */}
      <path d="M70,40 C70,40 75,55 75,65 C75,75 70,75 70,75 C70,75 65,85 55,85 C45,85 45,75 45,75 L55,45 H70 Z" />
      
      {/* Bottom flourish */}
      <path d="M45,75 C45,75 50,85 50,90 C50,85 55,75 55,75" strokeWidth="2" fill="none" stroke="currentColor" />
      
      {/* Additional details */}
      <path d="M35,75 C35,75 40,80 50,80 C60,80 65,75 65,75" strokeWidth="1.5" fill="none" stroke="currentColor" />
    </svg>
  );
}
