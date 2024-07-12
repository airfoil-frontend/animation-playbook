import { Text } from "@/common/components/Text";

export const RenderHeaders = () => {
  const weights = ["font-normal", "font-medium", "font-semibold", "font-bold"];
  const size = [
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",

  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {weights.map((weight) => (
        <div key={weight} className="flex flex-col gap-2">
          {size.map((fontSize) => (
            <div key={`${weight}-${fontSize}`} className="flex gap-2">
              <Text className={`${weight} ${fontSize}`}>Example Text</Text>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
