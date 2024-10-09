import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const GradientHeader = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="flex w-full items-center justify-center bg-black px-4 py-20"
    >
      <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
        <span className="relative inline-block">
          <span className="relative z-10">Generate</span>
          {/* Gradient background */}
          <motion.span
            animate={{ opacity: inView ? 0.75 : 0 }}
            className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-400 opacity-75 blur-2xl"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </span>
        {" videos in minutes"}
        <br />
        {"from any text, image, or voice"}
      </h1>
    </div>
  );
};
