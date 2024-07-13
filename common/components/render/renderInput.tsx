"use client";
import { useState } from "react";

import { Icon } from "@/common/components/CustomIcon";
import { Input } from "@/common/components/Input";

export const RenderInput = () => {
  const [value, setValue] = useState("");

  const variants = ["default", "fill"] as const;
  const error = [false, true];
  const sizes = ["md", "sm"] as const;

  return (
    <div className="flex w-full flex-wrap justify-center gap-10">
      {variants.map((variant) =>
        sizes.map((size) =>
          error.map((hasError) => (
            <Input
              key={`${variant}-${size}-${hasError}`}
              error={hasError}
              id={`${variant}-${size}-${hasError}`}
              label={`This is a ${size} label`}
              leftContent={<Icon icon="lucide:search" />}
              message={`This is the ${variant} message`}
              placeholder="Type something here..."
              rightContent={<Icon icon="lucide:x" />}
              size={size}
              value={value}
              variant={variant}
              wrapperProps={{
                className: "w-1/3",
              }}
              onChange={(e) => setValue(e.target.value)}
            />
          )),
        ),
      )}
    </div>
  );
};
