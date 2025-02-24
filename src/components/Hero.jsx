import { motion } from "framer-motion";
import { heroVariants } from "../utils/animations.js";
import Navbar from "./navbar/Navbar";
import { SlArrowDown } from "react-icons/sl";
import useScrollTo from "../utils/useScrollTo.js";

export default function Hero() {
  const scrollToSection = useScrollTo(170);
  return (
    <header className="bg-cover text-pureWhite min-h-screen bg-[url('/assets/hero/hero.jpg')] bg-center shadow-md relative">
      <Navbar />

      <div className="text-pureWhite relative z-10 pt-24 sm:pt-40 flex justify-center lg:flex-row flex-col items-center text-center">
        <div className="font-headings md:px-10 p-4 xl:w-[60%] w-full">
          <motion.h2
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:text-6xl px-5 lg:leading-snug leading-snug text-5xl font-bold whitespace-wrap"
          >
            {" "}
            <span className="text-primary text-stroke">Mentor</span> uz koga
            ćete postati kvalitetan{" "}
            <span className="text-primary text-stroke">programer.</span>
          </motion.h2>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-[40px] pb-3 text-xl"
          >
            Sa jedinstvenim pristupom rada koji me izdvaja od drugih, pomoći ću
            vam da postanete programer koji će biti spreman za sve izazove.
            Steći ćete iskustvo radeći na pravim projektima, u timskom
            okruženju.
          </motion.p>
        </div>
      </div>
      <motion.a
        onClick={() => scrollToSection("about")}
        rel="noopener noreferrer"
        className="absolute z-30 bottom-16 left-1/2 transition-colors hover:text-primary text-white"
        initial={{ opacity: 0, y: -30, x: "-50%" }}
        animate={{
          opacity: [0, 1, 1], // Appear, stay, then stay
          y: [0, -20, 0], // Bounce animation
          x: "-50%", // Center horizontally
        }}
        transition={{
          opacity: {
            duration: 1, // Total duration for opacity animation
            delay: 6, // Delay before appearing
            times: [0, 0.5, 1], // Controls timing of opacity keyframes
          },
          y: {
            duration: 1.2, // Bounce duration for one cycle
            delay: 6, // Starts bouncing after X seconds
            repeat: 3, // Repeats twice (total of 3 bounces)
            repeatType: "loop", // Ensures smooth looping
            yoyo: true, // Ensures the bounce goes up and down
          },
        }}
        viewport={{ once: true }}
      >
        <SlArrowDown size={50} className="cursor-pointer" />
      </motion.a>

      <div className="absolute  inset-0 bg-black opacity-45"></div>
    </header>
  );
}
