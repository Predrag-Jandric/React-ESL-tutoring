import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import footer from "/assets/footer/footer.svg";
import mail from "/assets/footer/mail.png";
import viber from "/assets/footer/viber.png";
import whatsup from "/assets/footer/whatsup.png";

export default function Footer() {
  return (
    <motion.footer
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="kontakt"
      className="bg-gradient-to-br text-white from-[#293C66] to-[#3A5692] shadow-md relative"
    >
      <section className="xl:px-56 lg:px-20 px-5 lg:py-[60px] p-[40px] flex justify-between lg:flex-row items-center flex-col lg:text-start lg:items-start text-center">
        <div className="font-headings lg:w-[75%] px-3 xl:w-[60%] w-full">
          <h2 className="mb-10 text-[40px] font-bold whitespace-wrap">
         Hajde da pocnemo.
          </h2>

          <article className="text-lg my-5 lg:justify-start flex justify-center items-center gap-3">
            <img className="size-10" src={viber} alt="missing" />
            <img className="size-10" src={whatsup} alt="missing" />
            <p>+381 61631 2986</p>
          </article>
          <article className="text-lg flex lg:justify-start justify-center items-center gap-3">
            <img className="w-10" src={mail} alt="missing" />
            <p>predrag.jandric.bg@gmail.com</p>
          </article>
        </div>

        <img src={footer} className="size-80 lg:size-96" alt="missing" />
      </section>
    </motion.footer>
  );
}
