import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import wechat from "/assets/footer/wechat.png";
import qrcode from "/assets/footer/qrcode.png";
import { useLanguage } from "../utils/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <motion.footer
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="contact"
      className="relative bg-bgcolor text-white shadow-md"
    >
      <section className="flex flex-col items-center justify-between p-[40px] px-5 text-center lg:flex-row lg:items-start lg:px-20 lg:py-[60px] lg:text-start xl:px-56">
        <div className="w-full px-3 font-headings lg:w-[75%] xl:w-[60%]">
          <h2 className="whitespace-wrap mb-10 text-[40px] font-semibold text-primary">
            {t("contacttitle")}
          </h2>

          <article className="flex flex-col items-center justify-center gap-3 text-lg lg:items-start lg:justify-start">
            <div className="flex items-center gap-3">
              <img className="w-16" src={wechat} alt="missing" />
              <p className="text-xl">Wechat ID: 1234567890</p>
            </div>
            <img className="size-72 lg:size-96" src={qrcode} alt="missing" />
          </article>
        </div>
      </section>
    </motion.footer>
  );
}
