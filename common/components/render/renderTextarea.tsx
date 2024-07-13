"use client";
import { useState } from "react";

import { Textarea } from "@/common/components/Textarea";

export const RenderTextarea = () => {
  const [value, setValue] = useState("");

  const variants = ["default", "fill"] as const;
  const error = [false, true];
  const sizes = ["md", "sm"] as const;

  return (
    <div className="flex w-full flex-wrap justify-center gap-10">
      {variants.map((variant) =>
        sizes.map((size) =>
          error.map((hasError) => (
            <Textarea
              key={`${variant}-${size}-${hasError}`}
              error={hasError}
              fieldProps={{
                className: "w-1/3",
              }}
              id={`${variant}-${size}-${hasError}`}
              label={`This is a ${size} label`}
              message="This is the message"
              placeholder="Type something here..."
              size={size}
              value={value}
              variant={variant}
              onChange={(e) => setValue(e.target.value)}
            />
          )),
        ),
      )}
    </div>
  );
};
