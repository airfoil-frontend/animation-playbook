import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface ProgressBarProps {
  onCompletedFn?: () => void;
  animate?: boolean;
  index?: number;
  currentIndex?: number;
}

export const ProgressBar = ({
  onCompletedFn,
  animate = true,
  currentIndex = 0,
  index = 0,
}: ProgressBarProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (index !== currentIndex) {
      return gsap.to(progressBarRef.current, { width: "0%", duration: 0 });
    }

    if (animate) {
      return gsap.to(progressBarRef.current, {
        width: "100%",
        duration: 4,
        ease: "linear",
        onComplete: () => {
          if (index === currentIndex) {
            gsap.set(progressBarRef.current, { width: "100%" });
            onCompletedFn?.();
          }
        },
      });
    }
  }, [onCompletedFn, animate, index, currentIndex]);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="h-[2px] overflow-hidden rounded-full bg-grays-20-white/20">
        <div
          ref={progressBarRef}
          className="h-full rounded-full bg-gradient-progress"
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
};
