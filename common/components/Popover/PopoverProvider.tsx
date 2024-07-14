"use client";
import { createContext, useContext } from "react";

import { PopoverVariants } from "./Popover.theme";

import type { PopoverProps } from ".";
import type { PropsWithChildren } from "react";

export interface PopoverProviderProps
  extends Partial<PopoverVariants>,
    PopoverProps {}

type PopoverProviderContext = ReturnType<typeof usePopoverValues>;

const PopoverContext = createContext<
  Partial<PopoverProviderContext> | undefined
>(undefined);

// For inferring return type
const usePopoverValues = (props: PopoverProviderProps) => {
  return props;
};

export const PopoverProvider = ({
  children,
  ...props
}: PropsWithChildren<PopoverProviderProps>): JSX.Element => {
  const values = usePopoverValues(props);

  return (
    <PopoverContext.Provider value={values}>{children}</PopoverContext.Provider>
  );
};

export const usePopover = () => {
  const context = useContext(PopoverContext);
  if (context === undefined) {
    throw new Error("usePopover was used outside of its Provider");
  }
  return context;
};

export default PopoverProvider;
