"use client";
import { useMemo, useState } from "react";

import { Combobox } from "@/common/components/Combobox";

export const RenderCombobox = () => {
  const [singleValue, setSingleValue] = useState("");
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  const OPTIONS = useMemo(
    () => [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    [],
  );

  const renderSingle = useMemo(() => {
    return (
      <Combobox
        items={OPTIONS}
        value={singleValue}
        variant="single"
        onSelectChange={setSingleValue}
      >
        <Combobox.DisplayText buttonProps={{ className: "min-w-[320px]" }} />
      </Combobox>
    );
  }, [OPTIONS, singleValue]);

  const renderMultiple = useMemo(() => {
    return (
      <Combobox
        commandProps={{ value: multipleValue[0] }}
        items={OPTIONS}
        value={multipleValue}
        variant="multiple"
        onSelectChange={setMultipleValue}
      >
        <Combobox.DisplayTags buttonProps={{ className: "min-w-[320px]" }} />
      </Combobox>
    );
  }, [OPTIONS, multipleValue]);

  return (
    <div className="flex gap-4">
      {renderSingle}
      {renderMultiple}
    </div>
  );
};
