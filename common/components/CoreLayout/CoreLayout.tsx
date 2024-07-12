import { PropsWithChildren } from "react";

export const CoreLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen-safe relative mx-auto">
      <main>{children}</main>
    </div>
  );
};
