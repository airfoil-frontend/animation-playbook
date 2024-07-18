import { CommandGroup as PrimitiveCommandGroup } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandGroupProps
  extends ComponentPropsWithoutRef<typeof PrimitiveCommandGroup> {}

export const CommandGroup = forwardRef<
  ElementRef<typeof PrimitiveCommandGroup>,
  CommandGroupProps
>(({ className, ...props }, ref) => {
  const { commandGroup } = useCommand();
  return (
    <PrimitiveCommandGroup
      ref={ref}
      className={commandGroup?.({ className })}
      {...props}
    />
  );
});

CommandGroup.displayName = PrimitiveCommandGroup.displayName;
