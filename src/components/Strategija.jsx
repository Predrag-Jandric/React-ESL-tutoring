import cas2 from "/assets/strategija/cas2.png";
import plan2 from "/assets/strategija/plan2.png";
import raketa2 from "/assets/strategija/raketa2.png";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {
  generalVariants,
  strategijaVariants,
  strategijaArrowVariants,
} from "../utils/animations.js";
import { motion } from "framer-motion";

export default function Strategija() {
  return (
    <motion.section
      className="overflow-x-auto bg-gradient-to-br from-[#293C66] to-[#3A5692] px-6 flex flex-col items-center shadow-md"
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="strategija"
    >
      <div className="flex text-white flex-col md:flex-row items-center bg-transparent justify-center shadow-none gap-8 container py-16  min-h-[23rem]">
        <motion.article
          variants={strategijaVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={0.35}
          className="flex md:flex-row flex-col items-center gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3 w-fit">
            <p className="text-sm font-semibold italic">Korak 1</p>
            <img className="size-32 object-contain" src={cas2} alt="missing" />
            <p className="text-body">
              Zakažemo probni <br /> čas upoznavanja
            </p>
          </div>

          <motion.span
            variants={strategijaArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.5}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="md:rotate-0 rotate-90 text-white"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={strategijaVariants}
          initial="initial"
          whileInView="animate"
          custom={0.65}
          viewport={{ once: true }}
          className="flex md:flex-row flex-col items-center gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3  w-fit">
            <p className="text-sm font-semibold italic">Korak 2</p>
            <img className="size-32 object-contain" src={plan2} alt="missing" />
            <p className="text-body">
              Napravimo plan <br /> šta učimo
            </p>
          </div>

          <motion.span
            variants={strategijaArrowVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={0.8}
          >
            <HiOutlineArrowLongRight
              size={40}
              className="md:rotate-0 rotate-90 text-white"
            />
          </motion.span>
        </motion.article>

        <motion.article
          variants={strategijaVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1.05}
          className="flex md:flex-row flex-col items-center gap-8  text-center"
        >
          <div className="flex flex-col items-center justify-center gap-3 w-fit">
            <p className="text-sm font-semibold italic">Korak 3</p>
            <img
              className="size-32 object-contain"
              src={raketa2}
              alt="missing"
            />
            <p className="text-body w-24">Krećemo da radimo</p>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}