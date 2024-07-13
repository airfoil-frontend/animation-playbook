import { RenderButtons } from "@/common/components/render/renderButtons";
import { RenderHeaders } from "@/common/components/render/renderHeaders";
import { RenderInput } from "@/common/components/render/renderInput";
import { RenderModal } from "@/common/components/render/renderModal";
import { RenderTextarea } from "@/common/components/render/renderTextarea";
import { Text } from "@/common/components/Text";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center px-24 py-10">
      <div className="flex flex-col items-center gap-4">
        <Text as="h1" className="text-4xl font-bold">
          Manual Storybook
        </Text>
        <Text as="p" className="mt-4 text-center text-lg text-gray-500">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-1 font-mono text-sm">
            app/page.tsx
          </code>
        </Text>
      </div>

      <div className="h my-10 w-full border border-gray-200/30" />
      <RenderHeaders />

      <div className="h my-10 w-full border border-gray-200/30" />
      <RenderButtons />

      <div className="h my-10 w-full border border-gray-200/30" />
      <RenderTextarea />

      <div className="h my-10 w-full border border-gray-200/30" />
      <RenderInput />

      <div className="h my-10 w-full border border-gray-200/30" />
      <RenderModal />
    </main>
  );
}
