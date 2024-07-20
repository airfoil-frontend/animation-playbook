import { Button } from "../Button";
import { Tooltip } from "../Tooltip";

export const RenderTooltip = () => {
  const sides = ["top", "right", "bottom", "left"] as const;

  return (
    <div className="flex items-center gap-4">
      {sides.map((side) => (
        <Tooltip
          key={side}
          content="Tooltip Content"
          contentProps={{
            side,
          }}
        >
          <Button>Tooltip {side}</Button>
        </Tooltip>
      ))}
    </div>
  );
};
