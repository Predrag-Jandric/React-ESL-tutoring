import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "../utils/Button.jsx";
import { useLanguage } from "../utils/LanguageContext.jsx";
import { Link } from "react-router-dom";
// import devPhoto from "/assets/about/devPhoto.jpg";

export default function About() {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-auto lg:w-[65rem] flex flex-col items-center px-3 xs:px-5"
      id="about"
    >
      <section className="container rounded-custom text-dark transition-all hover:shadow-lg">
        <section className="flex flex-col">
          {/* <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          /> */}

          {/* <div className="lg:w-2/3 w-full"> */}
          <h3 className="font-headings text-headings font-medium">
            {t("aboutheader")}
          </h3>
          <div className="mt-7 flex flex-col gap-5 text-body">
            <p>{t("aboutone")}</p>
            <p>{t("abouttwo")}</p>
            <p>{t("aboutthree")}</p>
          </div>

          {/* </div> */}
        </section>

        <Button className="mx-auto mt-10 flex w-56 gap-3 px-0 py-0">
          <Link className="w-full px-6 py-2" to="/history">
            {t("teachinghistorybtn")}
          </Link>
        </Button>
      </section>
    </motion.div>
  );
}
