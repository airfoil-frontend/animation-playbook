import { tv, type VariantProps } from "tailwind-variants";

export const tagTheme = tv(
  {
    base: [
      "flex justify-center gap-1 items-center rounded-md font-semibold w-fit",
    ],
    variants: {
      variant: {
        primary: ["bg-element-primary", "text-text-em-high"],
        secondary: ["bg-element-secondary", "text-text-em-high"],
        tertiary: ["bg-element-tertiary", "text-text-on-tertiary"],
        info: ["bg-element-primary", "text-text-em-high"],
        warning: ["bg-element-warning", "text-text-on-warning"],
        success: ["bg-element-success", "text-text-on-success"],
        error: ["bg-element-error", "text-text-on-error"],
      },
      disabled: {
        true: ["bg-element-tertiary", "text-text-em-low"],
      },
      size: {
        md: ["py-1", "px-2", "text-sm"],
        sm: ["py-1", "px-2", "text-xs"],
      },
    },
    defaultVariants: {
      variant: "tertiary",
      size: "md",
    },
  },
  { responsiveVariants: ["sm"] },
);

export type TagVariants = VariantProps<typeof tagTheme>;
