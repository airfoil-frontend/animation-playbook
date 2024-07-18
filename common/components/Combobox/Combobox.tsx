"use client";
import React, {
  PropsWithChildren,
  ReactElement,
  useMemo,
  useState,
} from "react";

import { ButtonBaseProps, ButtonProps } from "@/common/components/Button";
import { ComboboxDisplayTags } from "@/common/components/Combobox/ComboboxDisplayTags";
import { ComboboxDisplayText } from "@/common/components/Combobox/ComboboxDisplayText";
import { Command, CommandDefaultProps } from "@/common/components/Command";
import { Icon } from "@/common/components/CustomIcon";
import { Popover, PopoverProps } from "@/common/components/Popover";
import { PopoverContentProps } from "@/common/components/Popover/PopoverContent";
import { cn } from "@/common/functions";

export type ComboboxBaseProps = {
  children?: ReactElement;
  items: { label: string; value: string }[];
  searchPlaceholder?: string;
  buttonProps?: ButtonProps & ButtonBaseProps;
  popoverProps?: PopoverProps;
  popoverContentProps?: PopoverContentProps;
  commandProps?: CommandDefaultProps;
  loading?: boolean;
};

export type ComboboxSingleProps = {
  variant?: "single";
  value: string;
  onSelectChange?: (selectedValue: string) => void;
};

export type ComboboxMultipleProps = {
  variant?: "multiple";
  value: string[];
  onSelectChange?: (selectedValue: string[]) => void;
};

export type ComboboxProps = (ComboboxSingleProps | ComboboxMultipleProps) &
  ComboboxBaseProps;

export type ComboboxDisplayProps = {
  value: ComboboxProps["value"];
  items: ComboboxProps["items"];
  comboboxVariant: ComboboxProps["variant"];
  loading: ComboboxProps["loading"];
  parentButtonProps: ComboboxProps["buttonProps"];
};

export const Combobox = ({
  children,
  items,
  searchPlaceholder,
  buttonProps,
  popoverProps,
  popoverContentProps,
  commandProps,
  loading,
  ...props
}: PropsWithChildren<ComboboxProps>) => {
  const [open, setOpen] = useState(false);

  const listItems = useMemo(() => {
    if (props.variant === "multiple") {
      const _value = props.value;
      return items?.map((item, index) => (
        <Command.Item
          key={`${item.value}-${index}`}
          data-active={_value?.includes(item.value) ? "" : undefined}
          value={item.value}
          onSelect={(selectedValue) => {
            if (_value.includes(selectedValue)) {
              props.onSelectChange?.(_value.filter((v) => v !== selectedValue));
            } else {
              props.onSelectChange?.([..._value, selectedValue]);
            }
          }}
        >
          {item.label}
          <Icon
            className={cn(
              "text-base",
              _value?.includes(item.value) ? "visible" : "invisible",
            )}
            icon="lucide:check"
          />
        </Command.Item>
      ));
    } else {
      const _props = {
        onSelectChange: props.onSelectChange,
      } as ComboboxSingleProps;

      return items?.map((item, index) => (
        <Command.Item
          key={`${item.value}-${index}`}
          data-active={item.value === props.value ? "" : undefined}
          value={item.value}
          onSelect={(selectedValue) => {
            setOpen(false);
            _props?.onSelectChange?.(
              selectedValue === props.value ? "" : selectedValue,
            );
          }}
        >
          {item.label}
          <Icon
            className={cn(
              "text-base",
              props.value === item.value ? "visible" : "invisible",
            )}
            icon="lucide:check"
          />
        </Command.Item>
      ));
    }
  }, [items, props.value]);

  // Passing props to single child component w/o using Context
  // Defaults to ComboboxDisplayText
  const childWithProps = React.cloneElement(
    React.Children.only((children as ReactElement) ?? <ComboboxDisplayText />),
    {
      value: props.value,
      items,
      comboboxVariant: props.variant,
      loading,
      parentButtonProps: buttonProps,
    },
  );

  return (
    <Popover {...popoverProps} open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{childWithProps}</Popover.Trigger>
      <Popover.Content
        align="start"
        avoidCollisions={false} // Prevent jumping around on mobile when kb is toggled
        {...popoverContentProps}
        className={cn(
          "w-[var(--radix-popover-trigger-width)] min-w-[240px] p-0",
          popoverContentProps?.className,
        )}
      >
        <Command as="default" variant="combobox" {...commandProps}>
          <Command.Input placeholder={searchPlaceholder ?? "Search..."} />
          <Command.Separator />
          {loading && <Command.Loading>Hang on…</Command.Loading>}
          <Command.Empty>No results</Command.Empty>
          <Command.List>{listItems}</Command.List>
        </Command>
      </Popover.Content>
    </Popover>
  );
};

Combobox.DisplayText = ComboboxDisplayText;
Combobox.DisplayTags = ComboboxDisplayTags;
