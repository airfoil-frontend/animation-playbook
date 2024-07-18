import { CommandItem as PrimitiveCommandItem } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandItemProps
  extends ComponentPropsWithoutRef<typeof PrimitiveCommandItem> {}

export const CommandItem = forwardRef<
  ElementRef<typeof PrimitiveCommandItem>,
  CommandItemProps
>(({ className, ...props }, ref) => {
  const { commandItem } = useCommand();
  return (
    <PrimitiveCommandItem
      ref={ref}
      className={commandItem?.({ className })}
      {...props}
    />
  );
});

CommandItem.displayName = PrimitiveCommandItem.displayName;
