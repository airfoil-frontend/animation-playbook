import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const GradientHeader = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="flex w-full items-center justify-center bg-black px-4 py-20"
    >
      <h1 className="max-w-4xl text-center text-2xl leading-tight text-white md:text-6xl lg:text-7xl">
        <span className="relative inline-block">
          <span className="relative z-10">Generate</span>
          <motion.span
            animate={{ opacity: inView ? 0.75 : 0 }}
            className="absolute -inset-x-2 -inset-y-4 bg-gradient-header blur-2xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </span>
        {" videos in minutes"}
        <br />
        {"from any text, image, or voice"}
      </h1>
    </div>
  );
};
