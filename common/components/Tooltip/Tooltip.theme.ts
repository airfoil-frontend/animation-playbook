import { tv } from "tailwind-variants";

export const tooltipTheme = tv({
  slots: {
    content: [
      "z-tooltip",
      "rounded-xl",
      "bg-surface-elevated",
      "px-3",
      "py-2",
      "text-text-em-high",
      "shadow-sm",
    ],
    arrow: ["fill-surface-elevated"],
  },
});
