import * as PrimitivePopover from "@radix-ui/react-popover";

import { PopoverVariants } from "@/common/components/Popover/Popover.theme";
import { PopoverContent } from "@/common/components/Popover/PopoverContent";
import PopoverProvider from "@/common/components/Popover/PopoverProvider";
import { PopoverTrigger } from "@/common/components/Popover/PopoverTrigger";

export type PopoverProps = {
  showClose?: boolean;
} & PrimitivePopover.PopoverProps &
  PopoverVariants;

export const Popover = ({
  showClose = false,
  variant,
  children,
  defaultOpen = false,
  ...props
}: PopoverProps) => {
  return (
    <PopoverProvider showClose={showClose} variant={variant} {...props}>
      <PrimitivePopover.Root defaultOpen={defaultOpen} {...props}>
        {children}
      </PrimitivePopover.Root>
    </PopoverProvider>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Close = PrimitivePopover.Close;
