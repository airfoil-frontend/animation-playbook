import { tv, type VariantProps } from 'tailwind-variants';

export const segmentedControlTheme = tv({
  base: ['flex', 'gap-1'],
});

export type SegmentedControlVariants = VariantProps<
  typeof segmentedControlTheme
>;
