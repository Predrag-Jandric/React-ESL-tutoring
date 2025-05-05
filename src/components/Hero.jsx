import { motion } from "framer-motion";
import { heroVariants } from "../utils/animations.js";
import Navbar from "./navbar/Navbar";
import { SlArrowDown } from "react-icons/sl";
import devPhoto from "/assets/hero/devPhoto.jpg";

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const topPosition = element.offsetTop - 230;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, null, `#${href}`);
    }
  };

  return (
    <header className="bg-cover relative min-h-screen bg-[url('/assets/hero/background.png')] p-[2.5rem] px-5 text-pureWhite shadow-md lg:px-20 lg:py-[3.75rem] xl:px-36">
      <Navbar />

      <div className="flex flex-col items-center justify-between gap-6 pt-[4.5rem] text-center md:pt-[7rem] lg:flex-row lg:text-start">
        <div className="w-full px-3 font-headings lg:w-[75%] xl:w-[60%]">
          <motion.h2
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="whitespace-wrap text-[40px] font-bold text-white lg:text-[66px]"
          >
            <span className="text-primary">Frontend</span> developer building
            apps that shine.
          </motion.h2>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pb-3 pt-[40px] text-lg text-neutral-200"
          >
            I’ve worked with 4 teams from diverse tech backgrounds to build
            production-ready applications in a professional setting. My
            contributions and team-first mindset were crucial in solving user
            problems across multiple open-source projects.
          </motion.p>
        </div>

        <img
          src={devPhoto}
          className="mb-20 w-80 rounded-full object-cover lg:mb-0"
          alt="developer photo"
        />
      </div>
      <motion.a
        onClick={(e) => handleNavClick(e, "about")}
        rel="noopener noreferrer"
        className="absolute bottom-8 left-1/2 z-30 text-primary"
        initial={{ opacity: 0, y: -30, x: "-50%" }}
        animate={{
          opacity: [0, 1, 1], // Appear, stay, then stay
          y: [0, -20, 0], // Bounce animation
          x: "-50%", // Center horizontally
        }}
        transition={{
          opacity: {
            duration: 1, // Total duration for opacity animation
            delay: 7, // Delay before appearing
            times: [0, 0.5, 1], // Controls timing of opacity keyframes
          },
          y: {
            duration: 1.2, // Bounce duration for one cycle
            delay: 7, // Starts bouncing after X seconds
            repeat: 3, // Repeats twice (total of 3 bounces)
            repeatType: "loop", // Ensures smooth looping
            yoyo: true, // Ensures the bounce goes up and down
          },
        }}
        viewport={{ once: true }}
      >
        <SlArrowDown size={50} className="cursor-pointer" />
      </motion.a>
    </header>
  );
}
