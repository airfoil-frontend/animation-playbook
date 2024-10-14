
"use client";

import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ReactLenis } from 'lenis/react';
import { PropsWithChildren } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}