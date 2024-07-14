"use client";
import * as PrimitivePopover from "@radix-ui/react-popover";

import { Icon } from "@/common/components/CustomIcon";
import { popoverTheme } from "@/common/components/Popover/Popover.theme";
import { usePopover } from "@/common/components/Popover/PopoverProvider";

export interface PopoverContentProps
  extends PrimitivePopover.PopoverContentProps {}

export const PopoverContent = ({ children, ...props }: PopoverContentProps) => {
  const { variant, showClose } = usePopover();
  const { close, arrow, content } = popoverTheme({ variant });

  return (
    <PrimitivePopover.Portal>
      <PrimitivePopover.Content
        align="end"
        sideOffset={6}
        {...props}
        className={content({ className: props?.className })}
      >
        {children}
        {showClose && (
          <PrimitivePopover.Close aria-label="Close" className={close()}>
            <Icon icon="ph:x-bold" />
          </PrimitivePopover.Close>
        )}
        <PrimitivePopover.Arrow className={arrow()} />
      </PrimitivePopover.Content>
    </PrimitivePopover.Portal>
  );
};
