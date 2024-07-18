import { CommandEmpty as PrimitiveCommandEmpty } from 'cmdk';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandEmptyProps
  extends ComponentPropsWithoutRef<typeof PrimitiveCommandEmpty> {}

export const CommandEmpty = forwardRef<
  ElementRef<typeof PrimitiveCommandEmpty>,
  CommandEmptyProps
>((props, ref) => {
  const { commandEmpty } = useCommand();
  return (
    <PrimitiveCommandEmpty ref={ref} className={commandEmpty?.()} {...props} />
  );
});

CommandEmpty.displayName = PrimitiveCommandEmpty.displayName;
