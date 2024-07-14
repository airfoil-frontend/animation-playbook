import { tv, type VariantProps } from "tailwind-variants";

export const popoverTheme = tv({
  slots: {
    root: [""],
    trigger: [""],
    content: [
      "z-popover",
      "rounded-xl",
      "py-4",
      "[&>*:not(.ignore)]:px-4",
      "w-[260px]",
      "bg-surface-elevated",
      "border",
      "border-border-base",
      "focus-ring",
      "overflow-hidden",
      "will-change-[transform,opacity]",
      "shadow-md",
      "data-[state=open]:data-[side=top]:animate-slideDownAndFade",
      "data-[state=open]:data-[side=right]:animate-slideLeftAndFade",
      "data-[state=open]:data-[side=bottom]:animate-slideUpAndFade",
      "data-[state=open]:data-[side=left]:animate-slideRightAndFade",
    ],
    close: [
      "rounded-full",
      "h-[25px]",
      "w-[25px]",
      "inline-flex",
      "items-center",
      "justify-center",
      "text-text-placeholder",
      "absolute",
      "top-3",
      "right-3",
      "hover:bg-white/5",
      "outline-none",
    ],
    arrow: ["fill-surface-elevated"],
  },
  variants: {
    variant: {
      menu: {
        content: ["py-2", "[&>*:not(.ignore)]:px-2"],
      },
    },
  },
});

export type PopoverVariants = VariantProps<typeof popoverTheme>;
