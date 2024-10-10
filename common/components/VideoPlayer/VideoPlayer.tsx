import { useEffect, useRef, useState } from "react";

import { PauseButton, PlayButton, Waveform } from "./";

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="border-grays-5 bg-grays-3 my-10 max-w-[300px] rounded-lg border p-3">
      <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full cursor-pointer"
          onClick={handleVideoClick}
        >
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isPlaying ? (
            <PauseButton onClick={handleVideoClick} />
          ) : (
            <PlayButton onClick={handleVideoClick} />
          )}
        </div>
      </div>

      {/* Video description and waveform */}
      <div className="mt-2 flex items-center justify-between px-2 text-sm text-gray-500">
        <div>
          <span className="text-grays-20-white font-medium">Sarah</span>{" "}
          <span className="text-grays-16">Bright, happy female vocal</span>
        </div>
        <Waveform isPlaying={isPlaying} />
      </div>
    </div>
  );
};
