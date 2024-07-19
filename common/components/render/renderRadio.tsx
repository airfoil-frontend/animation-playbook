"use client";
import { useState } from "react";

import { Field } from "@/common/components/Field";
import { RadioGroup, RadioItem } from "@/common/components/RadioGroup";

export const RenderRadio = () => {
  const OPTIONS = ["Option 1", "Option 2", "Option 3"];

  const formattedOptions = OPTIONS.map((option) => ({
    label: option,
    value: option,
  }));

  const [value, setValue] = useState(OPTIONS[0]);
  return (
    <Field label="This is radio input" labelProps={{ className: "pl-0" }}>
      <RadioGroup
        defaultValue={OPTIONS[0]}
        value={value}
        onValueChange={setValue}
      >
        {formattedOptions.map((option) => (
          <RadioItem
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </RadioGroup>
    </Field>
  );
};
