import { createContext, useContext } from "react";

import { CommandProps } from "@/common/components/Command/Command";
import {
  CommandVariants,
  commandTheme,
} from "@/common/components/Command/Command.theme";

import type { PropsWithChildren } from "react";

export interface CommandProviderProps
  extends Partial<CommandVariants>,
    // @ts-expect-error - An interface can only extend an object type or intersection of object types with statically known members.
    CommandProps {}

interface CommandProviderContext extends ReturnType<typeof useCommandValues> {}

const CommandContext = createContext<
  Partial<CommandProviderContext> | undefined
>(undefined);

// For inferring return type
const useCommandValues = (props: CommandProviderProps) => {
  const theme = commandTheme({ variant: props.variant });
  return {
    ...theme,
    ...props,
  };
};

export const CommandProvider = ({
  children,
  ...props
}: PropsWithChildren<CommandProviderProps>): JSX.Element => {
  const values = useCommandValues(props);

  return (
    <CommandContext.Provider value={values}>{children}</CommandContext.Provider>
  );
};

export const useCommand = () => {
  const context = useContext(CommandContext);
  if (context === undefined) {
    throw new Error("useCommand was used outside of its Provider");
  }
  return context;
};

export default CommandProvider;
