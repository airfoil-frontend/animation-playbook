import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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
  const controls = useAnimation();

  useEffect(() => {
    if (index !== currentIndex) {
      controls.stop();
      controls.start({ width: "0%", transition: { duration: 0 } });
      return;
    }

    if (animate) {
      controls
        .start({
          width: "100%",
          transition: { duration: 4, ease: "linear" },
        })
        .then(() => {
          if (index === currentIndex) {
            controls.set({ width: "100%" });
            onCompletedFn?.();
          }
        });
    }
  }, [controls, onCompletedFn, animate, index, currentIndex]);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="h-[2px] overflow-hidden rounded-full bg-grays-20-white/20">
        <motion.div
          animate={controls}
          className="h-full rounded-full bg-gradient-progress"
          initial={{ width: 0 }}
        />
      </div>
    </div>
  );
};
