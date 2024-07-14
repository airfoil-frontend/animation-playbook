import { Button } from "@/common/components/Button";
import { Popover } from "@/common/components/Popover";
import { PopoverContentProps } from "@/common/components/Popover/PopoverContent";

export const RenderPopover = () => {
  const sides = ["top", "right", "bottom", "left"] as const;
  const aligns = ["start", "center", "end"] as const;

  const popover = (
    side: PopoverContentProps["side"],
    align: PopoverContentProps["align"],
  ) => {
    return (
      <Popover>
        <Popover.Trigger>
          <Button>
            {side}-{align}
          </Button>
        </Popover.Trigger>
        <Popover.Content align={align} side={side}>
          <div>Content</div>
        </Popover.Content>
      </Popover>
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {sides.map((side) => aligns.map((align) => popover(side, align)))}
    </div>
  );
};
