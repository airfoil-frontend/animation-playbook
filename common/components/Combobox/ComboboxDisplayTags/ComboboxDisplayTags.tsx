import { Icon } from "@iconify-icon/react";
import { isEmpty } from "lodash";
import { ComponentPropsWithoutRef, forwardRef, useMemo } from "react";

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
import { Tag, TagProps } from "@/common/components/Tag";
import { cn } from "@/common/functions";

/**
 * Props for the ComboboxDisplayText component.
 *
 * @typedef {Object} ComboboxDisplayTextProps
 * @property {string} [emptyLabel] - Text to display when there are no items.
 * @property {ButtonProps & ButtonBaseProps} [buttonProps] - Props for customizing the button element.
 * @property {Partial<ComboboxDisplayProps>} - Props passed to this component from parent cloneElement
 */
export type ComboboxDisplayTagsProps = {
  emptyLabel?: string;
  buttonProps?: ButtonProps & ButtonBaseProps;
  tagProps?: TagProps;
  tagContainerProps?: ComponentPropsWithoutRef<"div">;
} & Partial<ComboboxDisplayProps>;

export const ComboboxDisplayTags = forwardRef<
  HTMLButtonElement,
  ComboboxDisplayTagsProps
>(
  (
    {
      buttonProps,
      comboboxVariant,
      items,
      emptyLabel = "Select",
      loading = false,
      tagProps,
      tagContainerProps,
      parentButtonProps,
      ...props
    },
    ref,
  ) => {
    const renderTags = useMemo(() => {
      if (isEmpty(props.value)) return emptyLabel;
      switch (comboboxVariant) {
        case "single": {
          const { value } = props as ComboboxSingleProps;
          return <Tag label={value} {...tagProps} />;
        }
        case "multiple": {
          const { value } = props as ComboboxMultipleProps;

          return items
            ?.filter((item) => value.includes(item.value))
            ?.map((item) => (
              <Tag key={item.value} label={item.label} {...tagProps} />
            ));
        }
      }
    }, [props.value, items]);

    return (
      <Button
        ref={ref}
        fullWidth
        aria-label={emptyLabel}
        iconRight={<Icon icon="lucide:chevron-down" />}
        role="combobox"
        variant="input"
        {...parentButtonProps}
        {...buttonProps}
        {...props}
        className={cn(
          "min-h-[46px] justify-between leading-7",
          { "text-text-em-placeholder": renderTags === emptyLabel },
          parentButtonProps?.className,
          buttonProps?.className,
        )}
        loading={loading}
      >
        <div
          {...tagContainerProps}
          className={cn("flex flex-wrap gap-2", tagContainerProps?.className)}
        >
          {renderTags}
        </div>
      </Button>
    );
  },
);

ComboboxDisplayTags.displayName = "ComboboxDisplayTags";
