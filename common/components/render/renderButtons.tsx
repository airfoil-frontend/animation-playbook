import { Button } from "@/common/components/Button";
import { Icon } from "@/common/components/CustomIcon";

export const RenderButtons = () => {
  const sizes = ["md", "sm", "xs"] as const;
  const variants = [
    "primary",
    "secondary",
    "tertiary",
    "ghost",
    "success",
    "error",
  ] as const;

  return (
    <div className="flex gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex w-fit flex-col items-center gap-4">
          {variants.map((variant) => (
            <Button
              key={`${size}-${variant}`}
              iconLeft={<Icon icon="lucide:plus" />}
              iconRight={<Icon icon="lucide:plus" />}
              size={size}
              variant={variant}
            >
              Button
            </Button>
          ))}
          <Button
            disabled
            iconLeft={<Icon icon="lucide:plus" />}
            iconRight={<Icon icon="lucide:plus" />}
            size={size}
          >
            Button
          </Button>
        </div>
      ))}
    </div>
  );
};
