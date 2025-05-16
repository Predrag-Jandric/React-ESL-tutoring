import { motion } from "framer-motion";
import { heroVariants } from "../utils/animations.js";
import Navbar from "./navbar/Navbar";
import devPhoto from "/assets/hero/devPhoto.png";
import { useLanguage } from "../utils/LanguageContext.jsx";
import Button from "../utils/Button.jsx";

export default function Hero() {
  const { t } = useLanguage();

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

  //

  return (
    <header className="bg-cover relative min-h-screen bg-[url('/assets/hero/background.jpg')] p-[2.5rem] px-5 text-pureWhite shadow-md lg:px-20 lg:py-[3.75rem] xl:px-36">
      <Navbar />

      <div className="flex flex-col items-center justify-between gap-6 pt-[4.5rem] text-center md:pt-[7rem] lg:flex-row lg:text-start">
        <div className="w-full px-3 font-headings lg:w-[75%] xl:w-[60%]">
          <motion.h2
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="whitespace-wrap text-[2.813rem] font-bold text-dark md:text-[3.438rem] lg:text-[4.375rem]"
          >
            <span className="text-bgcolor">{t("heroaccent")}</span>{" "}
            {t("herotitle")}
          </motion.h2>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pb-3 pt-[2.5rem] text-lg text-dark"
          >
            {t("herosubtitle")}
          </motion.p>
          <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mt-5 lg:block"
      >
        <Button onClick={(e) => handleNavClick(e, "about")} className="w-56">
          {t("herolearnmorebtn")}
        </Button>
      </motion.div>
        </div>

        <img
          src={devPhoto}
          className="mt-5 w-80 rounded-full border border-[#38bdf8] object-cover "
          alt="developer photo"
        />
      </div>

      
    </header>
  );
}
