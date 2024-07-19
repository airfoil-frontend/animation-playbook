import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

import { radioTheme } from "../RadioGroup.theme";

import type { ComponentPropsWithoutRef, ElementRef } from "react";

interface RadioItemProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: string;
}

const RadioItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioItemProps
>(({ label, className, value, ...props }, ref) => {
  const {
    wrapper: wrapperCls,
    container: containerCls,
    indicator: indicatorCls,
    label: labelCls,
  } = radioTheme({
    className,
  });
  return (
    <div className={wrapperCls()}>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={containerCls()}
        id={value}
        value={value}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className={indicatorCls()} />
      </RadioGroupPrimitive.Item>
      {label && (
        <label className={labelCls()} htmlFor={value}>
          {label}
        </label>
      )}
    </div>
  );
});
RadioItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioItem };
