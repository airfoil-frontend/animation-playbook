import { tv, type VariantProps } from 'tailwind-variants';

export const textAreaTheme = tv({
  base: [
    'flex',
    'transition-all',
    'min-h-[40px]',
    'max-h-fit',
    'w-full',
    'rounded-md',
    'border',
    'border-border-base',
    'px-3',
    'py-2',
    'shadow-sm',
    'outline-none',
    'placeholder:text-text-em-placeholder',
    'focus-visible:ring-1',
    'focus-visible:ring-element-primary',
    'disabled:cursor-not-allowed',
    'disabled:text-text-em-low',
  ],
  variants: {
    variant: {
      default: ['bg-transparent'],
      fill: ['bg-surface-elevated'],
    },
    size: {
      md: ['py-2 px-3 rounded-xl gap-2 text-base'],
      sm: ['px-2.5 py-1.5 rounded-md gap-1.5 text-sm'],
    },
    hasError: {
      true: ['border-error', 'focus-visible:border-border-base'],
    },
    unstyled: {
      true: [
        'border-none',
        'bg-transparent',
        'text-text-em-high',
        'w-fit',
        'p-0',
      ],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    unstyled: false,
  },
});

export type TextAreaVariants = VariantProps<typeof textAreaTheme>;
