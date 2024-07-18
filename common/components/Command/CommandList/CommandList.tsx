import { CommandList as PrimitiveCommandList } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandListProps
  extends ComponentPropsWithoutRef<typeof PrimitiveCommandList> {}

export const CommandList = forwardRef<
  ElementRef<typeof PrimitiveCommandList>,
  CommandListProps
>(({ className, ...props }, ref) => {
  const { commandList } = useCommand();
  return (
    <PrimitiveCommandList
      ref={ref}
      className={commandList?.({ className })}
      {...props}
    />
  );
});
CommandList.displayName = PrimitiveCommandList.displayName;
