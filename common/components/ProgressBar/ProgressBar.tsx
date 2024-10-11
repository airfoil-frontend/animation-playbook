import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ProgressBarProps {
  onCompletedFn?: () => void;
  animate?: boolean;
}

export const ProgressBar = ({
  onCompletedFn,
  animate = true,
}: ProgressBarProps) => {
  const controls = useAnimation();

  useEffect(() => {
    if (animate) {
      controls
        .start({
          width: "100%",
          transition: { duration: 4, ease: "linear" },
        })
        .then(() => {
          controls.set({ width: "100%" });
          if (onCompletedFn) {
            onCompletedFn();
          }
        });
    }
  }, [controls, onCompletedFn, animate]);

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="h-[2px] overflow-hidden rounded-full bg-grays-20-white/20">
        <motion.div
          animate={controls}
          className="bg-gradient-progress h-full rounded-full"
          initial={{ width: 0 }}
        />
      </div>
    </div>
  );
};
