import { useKeenSlider } from "keen-slider/react";

import { ProgressBar, useProgressBar } from "@/common/components/ProgressBar";

export const HowItWorksSection = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      origin: "center",
      spacing: 32,
      perView: 1,
    },
  });

  const segmentedOptions = [
    {
      title: "Create an avatar",
      description:
        "Either upload an image and stylise, or generate from a prompt",
    },
    {
      title: "Add your audio",
      description:
        "Type in your dialogue for text-to-speech or directly upload audio",
    },
    {
      title: "Choose your voice",
      description: "Choose from a preset voice or start by using your own",
    },
  ];

  const onProgressBarCompletedFn = () => {
    const nextIndex = (currentProgressBar + 1) % 3;
    instanceRef?.current?.moveToIdx(nextIndex);
  };

  const { currentProgressBar, handleProgressBarCompleted } = useProgressBar({
    initialValue: 0,
    onCompletedFn: onProgressBarCompletedFn,
  });

  return (
    <section className="relative flex flex-col items-center">
      <div className="mb-20 flex flex-col items-center gap-8">
        <span className="w-fit rounded-full border px-4 py-1.5 text-xs">
          HOW IT WORKS
        </span>
        <h1 className="max-w-[680px] text-center text-5xl">
          Generate videos in minutes from any text, image, or voice.
        </h1>
      </div>
      <div className="flex flex-col items-center gap-12">
        {/* selectos */}
        <div className="flex gap-6">
          {segmentedOptions.map((option, idx) => (
            <button
              key={idx}
              className="flex flex-col gap-10 rounded-xl text-white hover:bg-white/10"
              onClick={handleProgressBarCompleted}
            >
              <div className="flex items-start gap-5">
                <div className="w-fit rounded-full bg-white px-3 py-0.5 text-black">
                  {`0${idx + 1}`}
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold">{option.title}</span>
                  <span className="text-left">{option.description}</span>
                </div>
              </div>
              <ProgressBar
                animate={currentProgressBar === idx}
                onCompletedFn={handleProgressBarCompleted}
              />
            </button>
          ))}
        </div>
        <div
          ref={sliderRef}
          className="keen-slider max-w-screen-lg xl:max-w-screen-xl"
        >
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="keen-slider__slide grid h-[480px] w-full min-w-[480x] max-w-screen-xl place-content-center rounded-md border border-slate-700 bg-slate-900 p-10 md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]"
            >
              Slide {idx + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
