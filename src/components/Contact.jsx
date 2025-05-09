import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";

export default function Contact() {
  return (
    <motion.footer
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="contact"
      className="relative bg-bgcolor text-white shadow-md"
    >
      <section className="">
        <h2>Contact</h2>
      </section>
    </motion.footer>
  );
}
