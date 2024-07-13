import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

import { TextAreaVariants, textAreaTheme } from "./Textarea.theme";

import { Field, FieldFullProps, FieldProps } from "@/common/components/Field";

export interface TextareaContentProps extends FieldProps {
  // contentProps => wraps the input, left and right contents
  contentProps?: ComponentPropsWithoutRef<"div">;
  id: string;
  placeholder?: string;
  fieldProps?: FieldFullProps;
}

export interface TextareaProps
  extends Omit<ComponentPropsWithoutRef<"textarea">, "id" | "size">,
    Omit<TextAreaVariants, "hasError">,
    TextareaContentProps {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      fieldProps,
      placeholder,
      id,
      size,
      label,
      error,
      message,
      unstyled,
      variant,
      ...props
    },
    ref,
  ) => {
    const textarea = textAreaTheme({
      className,
      hasError: error,
      size,
      unstyled,
      variant,
    });

    return (
      <Field
        {...fieldProps}
        error={error}
        htmlFor={id}
        label={label}
        message={message}
        size={size}
      >
        <textarea
          ref={ref}
          autoComplete="off"
          className={textarea}
          id={id}
          placeholder={placeholder}
          {...props}
        />
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";
