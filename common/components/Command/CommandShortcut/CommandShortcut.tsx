import { ComponentPropsWithoutRef } from 'react';

import { useCommand } from '@/common/components/Command/CommandProvider';

export interface CommandShortcutProps
  extends ComponentPropsWithoutRef<'span'> {}

export const CommandShortcut = ({
  className,
  ...props
}: CommandShortcutProps) => {
  const { commandShortcut } = useCommand();
  return <span className={commandShortcut?.({ className })} {...props} />;
};
