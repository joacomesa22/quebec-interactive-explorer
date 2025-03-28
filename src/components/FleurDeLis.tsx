
import { SVGProps } from "react";

export function FleurDeLis(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M50,5c0,0-10,15-10,25s10,15,10,15s10-5,10-15S50,5,50,5z" />
      <path d="M30,45c0,0,10-5,20-5s20,5,20,5c0,0-5-15-20-15S30,45,30,45z" />
      <path d="M30,45c0,0,5,10,5,20s-5,10-5,10s5,10,15,10s15-10,15-10l-10-30H30z" />
      <path d="M70,45c0,0-5,10-5,20s5,10,5,10s-5,10-15,10s-15-10-15-10l10-30H70z" />
    </svg>
  );
}
