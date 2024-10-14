import { useInView } from "framer-motion";
import * as motion from "framer-motion/client";
import { useRef } from "react";

const images = [
  {
    src: "/pop-in-animation/image-1.png",
    position: { x: -320, y: -320 },
    width: 333.3333,
    height: 200,
  },
  {
    src: "/pop-in-animation/image-2.png",
    position: { x: 300, y: -330 },
    width: 189.627,
    height: 284.441,
  },
  { src: "/pop-in-animation/image-3.png", position: { x: 600, y: -40 }, width: 150, height: 150 },
  { src: "/pop-in-animation/image-4.png", position: { x: 460, y: 230 }, width: 149, height: 222},
  { src: "/pop-in-animation/image-5.png", position: { x: 0, y: 400 }, width: 250, height: 150 },
  { src: "/pop-in-animation/image-6.png", position: { x: -350, y: 250 }, width: 88, height: 132 },
  { src: "/pop-in-animation/image-7.png", position: { x: -650, y: 80 }, width: 200, height: 200 },
];

export const PopInAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.2, // Animasi saat 20% dari section terlihat
  // });

  const imageVariants = (x: number, y: number, index: number) => ({
    hidden: { scale: 0, x: 0, y: 0, opacity: 0 }, 
    visible: {
      scale: 1,
      x,
      y,
      opacity: 1, 
      transition: { duration: 1, delay: Math.random() * 0.1 }, 
    },
  });

  return (
    <section
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {images.map((image, index) => (
        <motion.img
          key={index}
          alt={`image-${index}`}
          animate={isInView ? "visible" : "hidden"}
          className="absolute z-0 object-cover"
          height={image.height}
          initial="hidden"
          src={image.src}
          variants={imageVariants(image.position.x, image.position.y, index)}
          width={image.width}
        />
      ))}
      <div className="flex flex-col relative z-10 items-center justify-center gap-6 text-center">
        <h3 className="max-w-[700px] text-[56px] leading-[64px]">Characters as boundless as your imagination.</h3>
        <p className="max-w-[528px] text-lg leading-7">
          Hedra can generate characters in different aspect ratios, styles, and
          formats, matching your workflow or content type.
        </p>
      </div>
    </section>
  );
};
