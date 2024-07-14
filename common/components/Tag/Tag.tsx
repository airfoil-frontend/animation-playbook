import { ComponentPropsWithoutRef } from "react";

import { TagVariants, tagTheme } from "@/common/components/Tag/Tag.theme";
import { cn } from "@/common/functions";

export interface TagProps extends ComponentPropsWithoutRef<"div">, TagVariants {
  label?: string;
}

export const Tag = ({
  label,
  variant,
  size,
  disabled,
  children,
  ...props
}: TagProps) => {
  const tagStyle = tagTheme({ variant, size, disabled });
  return (
    <div {...props} className={cn(tagStyle, props.className)}>
      {label ?? children}
    </div>
  );
};
