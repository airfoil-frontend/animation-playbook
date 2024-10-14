import { useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ReactNode } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export const Providers = ({ children }: { children: ReactNode }) => {
  return children
}