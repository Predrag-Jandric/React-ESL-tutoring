import { Link } from "react-router-dom";
import { generalVariants } from "../utils/animations.js";
import { motion } from "framer-motion";
import { useLanguage } from "../utils/LanguageContext.jsx";
import Button from "../utils/Button.jsx";
import devPhoto from "/assets/hero/devPhoto.jpg";

function Curriculum() {
  const { t } = useLanguage();

  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 flex flex-col items-center px-3 xs:px-5"
      id="curriculum"
    >
      <section className="container rounded-custom text-dark transition-all hover:shadow-lg">
        <section className="flex flex-col gap-3 md:flex-row">
          <div className="w-full lg:w-2/3">
            <h3 className="font-headings text-headings font-medium">
              {t("aboutheader")} {/* the best curriculum for your child */}
            </h3>
            <div className="mt-7 flex flex-col gap-5 text-body">
              <p>{t("aboutone")}</p>
              <p>{t("abouttwo")}</p>
            </div>
          </div>

          <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 rounded-custom object-cover"
          />
        </section>

        <Link to="/details">
          <Button className="mx-auto mt-10 flex w-56 gap-3">
            {t("curriculumdetailsbtn")}
          </Button>
        </Link>
      </section>
    </motion.div>
  );
}

export default Curriculum;
