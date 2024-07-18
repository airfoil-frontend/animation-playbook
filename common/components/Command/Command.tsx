/**
 * ref:
 * - https://ui.shadcn.com/docs/components/command
 * - https://github.com/pacocoursey/cmdk
 * - https://github.com/shadcn-ui/ui/issues/173
 */
"use client";

import { CommandLoading, Command as CommandPrimitive } from "cmdk";
import { forwardRef, type ComponentPropsWithRef, type ElementRef } from "react";

import { commandTheme, type CommandVariants } from ".";

import { CommandEmpty } from "@/common/components/Command/CommandEmpty";
import { CommandGroup } from "@/common/components/Command/CommandGroup";
import { CommandInput } from "@/common/components/Command/CommandInput";
import { CommandItem } from "@/common/components/Command/CommandItem";
import { CommandList } from "@/common/components/Command/CommandList";
import CommandProvider, {
  useCommand,
} from "@/common/components/Command/CommandProvider";
import { CommandSeparator } from "@/common/components/Command/CommandSeparator";
import { CommandShortcut } from "@/common/components/Command/CommandShortcut";
import { Modal, type ModalProps } from "@/common/components/Modal";

interface CommandBaseProps
  extends ComponentPropsWithRef<typeof CommandPrimitive>,
    CommandVariants {}

const CommandRoot = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  CommandBaseProps
>(({ className, ...props }, ref) => {
  const { command } = useCommand();
  return (
    <CommandPrimitive
      ref={ref}
      className={command?.({ className })}
      {...props}
    />
  );
});

CommandRoot.displayName = CommandPrimitive.displayName;

export type CommandDialogProps = {
  as?: "dialog";
} & ModalProps;

export type CommandDefaultProps = {
  as?: "default";
} & CommandBaseProps;

export type CommandProps = CommandDialogProps | CommandDefaultProps;

export const CommandDialog = ({
  children,
  variant,
  ...props
}: CommandDialogProps) => {
  const { commandDialogContent } = commandTheme();
  return (
    <Modal variant="command" {...props}>
      <Modal.Content className={commandDialogContent()}>
        <CommandRoot>{children}</CommandRoot>
      </Modal.Content>
    </Modal>
  );
};

export const Command = (props: CommandProps) => {
  if (props?.as === "dialog") {
    // Remove unused 'as'
    const { as, ..._props } = props;
    return (
      <CommandProvider>
        <CommandDialog {..._props} />
      </CommandProvider>
    );
  } else {
    // Remove unused 'as'
    const { as, ..._props } = props as CommandDefaultProps;
    return (
      <CommandProvider {..._props}>
        <CommandRoot {..._props} />
      </CommandProvider>
    );
  }
};

Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Item = CommandItem;
Command.Shortcut = CommandShortcut;
Command.Separator = CommandSeparator;
Command.Loading = CommandLoading;
