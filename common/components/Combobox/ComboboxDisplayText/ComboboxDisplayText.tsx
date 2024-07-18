import { isEmpty } from "lodash";
import pluralize from "pluralize";
import { forwardRef, useMemo } from "react";

import {
  Button,
  ButtonBaseProps,
  ButtonProps,
} from "@/common/components/Button";
import {
  ComboboxDisplayProps,
  ComboboxMultipleProps,
  ComboboxSingleProps,
} from "@/common/components/Combobox";
import { Icon } from "@/common/components/CustomIcon";
import { cn } from "@/common/functions";

/**
 * Props for the count display mode of the ComboboxDisplayText component.
 *
 * @interface ComboboxDisplayTextCountProps
 * @property {'count'} [variant] - Specifies that the display mode is 'count'.
 * @property {string} unit - The unit to be displayed alongside the count.
 */
export interface ComboboxDisplayTextCountProps {
  variant?: "count";
  unit: string;
}

/**
 * Props for the list display mode of the ComboboxDisplayText component.
 *
 * @interface ComboboxDisplayTextListProps
 * @property {'list'} [variant] - Specifies that the display mode is 'list'.
 * @property {string} [delimiter] - The delimiter to use between items in the list.
 */
export interface ComboboxDisplayTextListProps {
  variant?: "list";
  delimiter?: string;
}

/**
 * Props for the ComboboxDisplayText component.
 *
 * @typedef {Object} ComboboxDisplayTextProps
 * @property {string} [emptyLabel] - Text to display when there are no items.
 * @property {ButtonProps & ButtonBaseProps} [buttonProps] - Props for customizing the button element.
 * @property {Partial<ComboboxDisplayProps>} - Props passed to this component from parent cloneElement
 * @property {ComboboxDisplayTextCountProps | ComboboxDisplayTextListProps} - Props for either count display or list display mode.
 */
export type ComboboxDisplayTextProps = {
  emptyLabel?: string;
  buttonProps?: ButtonProps & ButtonBaseProps;
} & Partial<ComboboxDisplayProps> &
  (ComboboxDisplayTextCountProps | ComboboxDisplayTextListProps);

export const ComboboxDisplayText = forwardRef<
  HTMLButtonElement,
  ComboboxDisplayTextProps
>(
  (
    {
      buttonProps,
      comboboxVariant,
      items,
      emptyLabel = "Select",
      loading = false,
      parentButtonProps,
      ...props
    },
    ref,
  ) => {
    const content = useMemo(() => {
      // For single combobox selection
      if (comboboxVariant === "single") {
        const { value: _value } = props as ComboboxSingleProps;
        const label = items?.find((item) => item.value === _value)?.label;
        return isEmpty(_value) ? emptyLabel : label;
      }
      // For multiple combobox items only
      switch (props.variant) {
        case "count": {
          const { value: _value } = props as ComboboxMultipleProps;
          const count = _value?.length;
          const pluralizedUnit = pluralize(props.unit, count);
          const _emptyLabel = emptyLabel ?? `Filter ${pluralizedUnit}`;
          return !count ? _emptyLabel : `Show ${count} ${pluralizedUnit}`;
        }

        case "list":
        default: {
          const { value: _value } = props as ComboboxMultipleProps;
          const { delimiter = ", " } = props as ComboboxDisplayTextListProps;

          const selectedItems = items
            ?.filter((item) => _value.includes(item.value))
            .map((item) => item.label);

          const _emptyLabel = emptyLabel ?? "Select";
          return selectedItems?.length === 0
            ? _emptyLabel
            : selectedItems?.join(delimiter);
        }
      }
    }, [props]);

    const { variant, unit, ..._props } =
      props as ComboboxDisplayTextCountProps & ComboboxDisplayTextListProps;

    return (
      <Button
        ref={ref}
        aria-label={content ?? emptyLabel}
        iconRight={<Icon icon="lucide:chevron-down" />}
        loading={loading}
        role="combobox"
        variant="input"
        {..._props}
        {...parentButtonProps}
        {...buttonProps}
        className={cn(
          "justify-between",
          // Only show this state for default button variant="link"
          !buttonProps?.variant && {
            "text-text-em-placeholder": content === emptyLabel,
          },
          parentButtonProps?.className,
          buttonProps?.className,
        )}
      >
        {content}
      </Button>
    );
  },
);

ComboboxDisplayText.displayName = "ComboboxDisplayText";
