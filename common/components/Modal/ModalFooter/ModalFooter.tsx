import { useModal } from "@/common/components/Modal/ModalProvider";

import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ModalFooterProps = ComponentPropsWithoutRef<"div"> & {
  className?: string;
};

export const ModalFooter = ({
  children,
  className,
  ...props
}: PropsWithChildren<ModalFooterProps>) => {
  const { theme } = useModal();
  const { footer } = theme;

  return (
    <footer className={footer({ className })} {...props}>
      {children}
    </footer>
  );
};
