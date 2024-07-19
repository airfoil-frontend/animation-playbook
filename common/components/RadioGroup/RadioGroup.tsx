import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

import { cn } from "@/common/functions";

import type { ComponentPropsWithoutRef, ElementRef } from "react";

const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-4", className)}
      {...props}
      ref={ref}
    />
  );
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { RadioGroup };
