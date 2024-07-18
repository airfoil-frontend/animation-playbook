import { CommandSeparator as PrimitiveCommandSeparator } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandSeparatorProps
  extends ComponentPropsWithoutRef<typeof PrimitiveCommandSeparator> {}

export const CommandSeparator = forwardRef<
  ElementRef<typeof PrimitiveCommandSeparator>,
  CommandSeparatorProps
>(({ className, ...props }, ref) => {
  const { commandSeparator } = useCommand();
  return (
    <PrimitiveCommandSeparator
      ref={ref}
      className={commandSeparator?.({ className })}
      {...props}
    />
  );
});

CommandSeparator.displayName = PrimitiveCommandSeparator.displayName;
