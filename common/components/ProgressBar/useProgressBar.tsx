import { useState } from "react";

type UseProgressBarProps = {
  initialValue?: number;
  onCompletedFn?: () => void;
  maxValue?: number;
};

export const useProgressBar = ({
  initialValue = 0,
  onCompletedFn,
  maxValue = 3,
}: UseProgressBarProps) => {
  const [currentProgressBar, setCurrentProgressBar] = useState(initialValue);

  const handleProgressBarCompleted = () => {
    onCompletedFn?.();
    setCurrentProgressBar((prev) => (prev + 1) % maxValue);
  };

  return {
    currentProgressBar,
    handleProgressBarCompleted,
  };
};
