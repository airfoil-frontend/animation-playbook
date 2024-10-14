import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    })

    if (!imagesRef.current) return;

    imagesRef.current.forEach((image, index) => {
      tl.fromTo(image, {
        scale: 0,
        x: 0,
        y: 0,
        opacity: 0,
      }, {
        scale: 1,
        x: images[index].position.x,
        y: images[index].position.y,
        opacity: 1,
        duration: 1,
        delay: Math.random() * 0.1,
        ease: 'power3.out',
      }, `-=${Math.random() * 0.1}`)
    })

    return () => {
      ScrollTrigger.killAll();
    }
  }, [sectionRef, imagesRef]);

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
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {images.map((image, index) => (
        <div key={index} ref={(el) => { imagesRef.current[index] = el!; }} className="absolute z-0" style={{ width: image.width, height: image.height }}>
          <Image fill priority alt={`pop-in-${index}`} className="object-cover" src={image.src} />
        </div>
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
