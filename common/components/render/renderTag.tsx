import { Tag } from "@/common/components/Tag";

export const RenderTag = () => {
  const variants = [
    "primary",
    "secondary",
    "tertiary",
    "info",
    "warning",
    "success",
    "error",
  ] as const;

  const sizes = ["md", "sm"] as const;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex gap-4">
            {sizes.map((size) => (
              <Tag key={`${variant}-${size}`} size={size} variant={variant}>
                {variant}
              </Tag>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
