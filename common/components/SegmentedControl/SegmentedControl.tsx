import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button, ButtonProps } from "@/common/components/Button";
import { segmentedControlTheme } from "@/common/components/SegmentedControl/SegmentedControl.theme";

interface Option extends ButtonProps {
  value: string;
  label: string;
}

/**
 * Props for the SegmentedControl component.
 *
 * @interface SegmentedControlProps
 * @extends ComponentPropsWithoutRef<'div'>
 */
export interface SegmentedControlProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * An array of options to be displayed in the segmented control.
   *
   * @type {Option[]}
   * @memberof SegmentedControlProps
   */
  options: Option[];

  /**
   * The current selected value in the segmented control.
   *
   * @type {string}
   * @memberof SegmentedControlProps
   */
  value: string;

  /**
   * Callback function that is called when the value changes.
   *
   * @param {string} value - The new value selected in the segmented control.
   * @memberof SegmentedControlProps
   */
  onValueChange: (value: string) => void;

  /**
   * Use children to pass ReactNode into the same wrapper.
   *
   * @type {ReactNode}
   * @memberof SegmentedControlProps
   */
  children?: ReactNode;
}

export const SegmentedControl = ({
  children,
  options,
  value,
  onValueChange,
  className,
}: SegmentedControlProps) => {
  const base = segmentedControlTheme({
    className,
  });

  return (
    <div className={base}>
      {options.map((option) => (
        <Button
          key={option.value}
          size="sm"
          variant={value === option.value ? "tertiary" : "ghost"}
          {...option}
          onClick={() => onValueChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
      {children}
    </div>
  );
};
