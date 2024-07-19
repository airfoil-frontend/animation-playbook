import { tv, type VariantProps } from "tailwind-variants";

export const radioTheme = tv({
  slots: {
    wrapper: ["flex", "items-center", "space-x-2"],
    container: [
      "h-5 w-5 rounded-full border border-neutrals-400 bg-transparent group",
      "flex-center appearance-none",
      "data-[state=checked]:border-primary",
      "data-[state=checked]:hover:border-primary",
      "data-[state=checked]:disabled:bg-disabled data-[state=checked]:disabled:border-disabled",
      "hover:border-primary",
      "disabled:cursor-not-allowed disabled:border-disabled",
      "disabled:hover:border-disabled",
      "focus-visible:ring-2",
      "focus-visible:ring-offset-2",
      "focus-visible:ring-offset-black",
      "focus-visible:ring-primary-300",
      "focus-visible:outline-none",
    ],
    indicator: [
      "flex items-center justify-center w-full h-full relative",
      "group-hover:data-[disabled]:after:bg-disabled",
      "data-[disabled]:after:bg-disabled",
      "after:content-[''] after:block after:w-3.5 after:h-3.5 after:rounded-full after:bg-element-primary",
    ],
    label: ["text-text-em-high"],
  },
});

export type RadioTheme = VariantProps<typeof radioTheme>;
