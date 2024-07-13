import {
  Description,
  Title,
  type DialogDescriptionProps,
} from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

import { useModal } from "@/common/components/Modal/ModalProvider";
import { Text } from "@/common/components/Text";

type ModalHeaderProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
  description?: string | React.ReactNode;
  descriptionProps?: DialogDescriptionProps;
  textProps?: ComponentPropsWithoutRef<"h2">;
};

export const ModalHeader = ({
  children,
  description,
  className,
  descriptionProps,
  textProps,
  ...props
}: PropsWithChildren<ModalHeaderProps>) => {
  const { theme } = useModal();
  const { header, headerDescription, headerTitle } = theme;

  return (
    <div
      className={header({
        className,
      })}
      {...props}
    >
      <Title asChild>
        <Text
          {...textProps}
          className={headerTitle({ className: textProps?.className })}
        >
          {children}
        </Text>
      </Title>
      {description && (
        <Description
          {...descriptionProps}
          className={headerDescription({
            className: descriptionProps?.className,
          })}
        >
          {description}
        </Description>
      )}
    </div>
  );
};
