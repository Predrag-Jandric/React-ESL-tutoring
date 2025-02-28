import { motion } from "framer-motion";
import { staucimoVariants, generalVariants } from "../utils/animations.js";
import { staucimoMap } from "../utils/data.js";

export default function StaUcimo() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="staucimo"
    >
      <section className="py-16 flex flex-col items-center justify-center gap-16 min-h-[23rem] bg-gradient-to-br from-[#293C66] to-[#3A5692] shadow-md">
        <article className="grid gap-8 text-center text-body font-normal sm:grid-cols-3 lg:grid-cols-6 grid-cols-2">
          {staucimoMap.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center justify-center gap-0 text-white"
              variants={staucimoVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
            >
              <img
                src={skill.staucimoImageUrl}
                alt="missing"
                className="w-[7.5rem] h-[7.5rem]"
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </article>
      </section>
    </motion.div>
  );
}
