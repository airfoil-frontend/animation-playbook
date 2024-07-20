"use client";
import { useState } from "react";

import { SegmentedControl } from "@/common/components/SegmentedControl";

export const RenderSegmentedControl = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  const OPTIONS = [
    {
      label: "Tab 1",
      value: "tab-1",
    },
    {
      label: "Tab 2",
      value: "tab-2",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <SegmentedControl
        className="flex-wrap gap-4"
        options={OPTIONS}
        value={selectedTab}
        onValueChange={setSelectedTab}
      />
      <SegmentedControl
        className="flex-wrap gap-4"
        options={OPTIONS}
        style="connected"
        value={selectedTab}
        onValueChange={setSelectedTab}
      />
    </div>
  );
};
