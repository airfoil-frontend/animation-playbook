import { useState } from "react";

type UseProgressBarProps = {
  initialValue?: number;
  onCompletedFn?: () => void;
  maxValue?: number;
};

export const useProgressBar = ({ initialValue = 0 }: UseProgressBarProps) => {
  const [currentProgressBar, setCurrentProgressBar] = useState(initialValue);

  return {
    currentProgressBar,
    setCurrentProgressBar,
  };
};
