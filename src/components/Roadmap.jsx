import classroom from "/assets/roadmap/classroom.png";
import message from "/assets/roadmap/message.png";
import demo from "/assets/roadmap/demo.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  generalVariants,
  roadmapVariants,
  roadmapArrowVariants,
} from "../utils/animations.js";
import { motion } from "framer-motion";

export default function Roadmap() {
  return (
    <motion.section
      className="flex flex-col items-center overflow-x-auto bg-gradient-to-br from-[#293C66] to-[#3A5692] px-6 shadow-md"
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="roadmap"
    >
      <div className="container flex min-h-[23rem] flex-col items-center justify-center gap-8 bg-transparent py-16 text-white shadow-none md:flex-row">
        <motion.article
          variants={roadmapVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.35}
          className="flex flex-col items-center gap-8 text-center md:flex-row"
        >
          <div className="flex shrink-0 w-fit flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">Step 1</p>
            <img
              className="size-28  object-contain"
              src={message}
              alt="missing"
            />
            <p className="text-body">Contact me</p>
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
          className="flex flex-col items-center gap-8 text-center md:flex-row"
        >
          <div className="flex w-fit shrink-0 flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">Step 2</p>
            <img className="size-28 object-contain" src={demo} alt="missing" />
            <p className="text-body">Try free demo lesson</p>
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
          className="flex flex-col items-center gap-8 text-center md:flex-row"
        >
          <div className="flex shrink-0 w-fit flex-col items-center justify-center gap-3">
            <p className="text-sm font-semibold italic">Step 3</p>
            <img
              className="size-28 object-contain"
              src={classroom}
              alt="missing"
            />
            <p className="text-body">Choose package & start</p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
