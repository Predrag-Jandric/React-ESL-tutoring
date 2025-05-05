import { motion } from "framer-motion";
import { skillsVariants, generalVariants } from "../utils/animations.js";
import { skillsMap } from "../utils/data.js";

export default function Skills() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="skills"
    >
      <section className="flex flex-col items-center justify-center gap-16 bg-bgcolor py-16 shadow-md">
        <article className="grid grid-cols-2 gap-8 text-center text-body font-normal md:grid-cols-5">
          {skillsMap.map((skill, index) => (
            <motion.div
              className="flex flex-col items-center justify-center gap-0 text-white"
              variants={skillsVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              key={index}
            >
              <img
                src={skill.skillsImageUrl}
                alt="skill photo"
                className="h-[7rem] w-[7rem]"
              />
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </article>
      </section>
    </motion.div>
  );
}
