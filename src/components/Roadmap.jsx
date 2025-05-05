import leetcode from "/assets/roadmap/leetcode.png";
import projects from "/assets/roadmap/projects.png";
import job from "/assets/roadmap/job.png";
import mern from "/assets/roadmap/mern.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  generalVariants,
  roadmapVariants,
  roadmapArrowVariants,
} from "../utils/animations.js";
import { motion } from "framer-motion";
import { PiSealCheckFill } from "react-icons/pi";

export default function Roadmap() {
  return (
    <motion.section
      className="flex flex-col items-center overflow-x-auto bg-bgcolor px-6 py-16 shadow-md"
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="roadmap"
    >
      <div className="container flex flex-col items-center justify-center gap-8 bg-transparent px-0 text-white shadow-none md:flex-row md:gap-5 lg:gap-8">
        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.35}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-5 lg:gap-8"
        >
          <div className="relative flex w-fit flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">Q1 2025</p>
            <img
              className="size-32 object-contain md:size-20 lg:size-32"
              src={projects}
              alt="symbol of goal"
            />
            <p className="text-body">
              Finish 3 mega <br /> projects{" "}
            </p>
            <PiSealCheckFill className="size-10 text-green-400 absolute top-4 right-0" />
          </div>
         
          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.5}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="rotate-90 text-white md:rotate-0"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          custom={0.65}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-5 lg:gap-8"
        >
          <div className="flex w-fit flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">Q2 2025</p>
            <img
              className="size-32 object-contain md:size-20 lg:size-32"
              src={leetcode}
              alt="symbol of goal"
            />
            <p className="text-body">
              Do 200 code
              <br /> challenges
            </p>
          </div>

          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.8}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="rotate-90 text-white md:rotate-0"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.05}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-5 lg:gap-8"
        >
          <div className="flex w-fit flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">Q3 2025</p>
            <img
              className="size-32 object-contain md:size-20 lg:size-32"
              src={job}
              alt="symbol of goal"
            />
            <p className="w-24 text-body">
              Appy and <br /> land a job
            </p>
          </div>
          <motion.span
            variants={roadmapArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1.2}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="rotate-90 text-white md:rotate-0"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.35}
          className="flex items-center gap-8 text-center md:gap-5 lg:gap-8"
        >
          <div className="flex w-fit flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">2026+</p>
            <img
              className="size-32 object-contain md:size-20 lg:size-32"
              src={mern}
              alt="symbol of goal"
            />
            <p className="text-body">
              Continue learning
              <br /> MERN stack
            </p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
