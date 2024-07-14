import * as PrimitivePopover from "@radix-ui/react-popover";
import { forwardRef } from "react";

import {
  PopoverVariants,
  popoverTheme,
} from "@/common/components/Popover/Popover.theme";

export interface PopoverTriggerProps
  extends PrimitivePopover.PopoverTriggerProps,
    PopoverVariants {}

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, variant, ...props }, ref) => {
  const { trigger } = popoverTheme({ variant });

  return (
    <PrimitivePopover.Trigger
      asChild
      className={trigger()}
      {...props}
      ref={ref}
    >
      {children}
    </PrimitivePopover.Trigger>
  );
});

PopoverTrigger.displayName = "PopoverTrigger";
