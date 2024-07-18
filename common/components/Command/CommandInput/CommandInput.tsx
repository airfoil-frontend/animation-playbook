import { Icon } from '@iconify-icon/react';
import { CommandInput as PrimitiveCommandInput } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandInputProps
  extends ComponentPropsWithoutRef<typeof PrimitiveCommandInput> {}

export const CommandInput = forwardRef<
  ElementRef<typeof PrimitiveCommandInput>,
  CommandInputProps
>(({ className, ...props }, ref) => {
  const { commandInputWrapper, commandInputIcon, commandInput } = useCommand();
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className={commandInputWrapper?.()} cmdk-input-wrapper="">
      <Icon className={commandInputIcon?.()} icon="lucide:search" />
      <PrimitiveCommandInput
        ref={ref}
        className={commandInput?.({ className })}
        {...props}
      />
    </div>
  );
});

CommandInput.displayName = 'CommandInput';
