"use client";
import { ReactLenis } from "lenis/react";
import { ChildrenProps } from "@/definitions/types";

export function LenisProvider({ children }: ChildrenProps) {
  return (
    <ReactLenis
      options={{
        duration: 1,
        easing: (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)),
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}
