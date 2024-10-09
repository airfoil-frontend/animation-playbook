"use client";
import { useState } from "react";

import { useTypewriter } from "@/common/hooks/useTypewriter";

export default function Home() {
  const [typeText, setTypeText] = useState("");
  const { renderText, handleStartTyping } = useTypewriter({
    text: typeText,
    speed: 70,
  });

  return (
    <main className="mx-auto flex min-h-screen max-w-screen-xl flex-col items-center px-24 py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Manual Storybook</h1>
        <p className="mt-4 text-center text-lg text-gray-500">
          Get started by editing{" "}
          <code className="ml-1 rounded-md bg-gray-100 p-1 font-mono text-sm text-gray-700">
            app/page.tsx
          </code>
        </p>
      </div>

      <div className="h my-10 w-full border border-gray-200/30" />

      <div className="flex flex-col gap-4">
        <input
          className="rounded-md bg-gray-100 px-4 py-2 text-black"
          id="typewriter-input"
          type="text"
          value={typeText}
          onChange={(e) => setTypeText(e.target.value)}
        />
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
          onClick={handleStartTyping}
        >
          Start Typing
        </button>
        {renderText}
      </div>
    </main>
  );
}
