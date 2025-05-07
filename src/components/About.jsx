import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "../utils/Button.jsx";
// import devPhoto from "/assets/about/devPhoto.jpg";
import { useLanguage } from "../utils/LanguageContext.jsx"; 

export default function About() {
  const { t } = useLanguage();


  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };


  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 flex flex-col items-center px-3 xs:px-5"
      id="about"
    >
      <section className="container rounded-custom text-grayText transition-all hover:shadow-lg">
        <section className="flex flex-col">
          {/* <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          /> */}

          {/* <div className="lg:w-2/3 w-full"> */}
          <h3 className="mb-4 font-headings text-headings font-medium">
          {t("heroTitle")}
          </h3>
          <p className="text-body">
          {t("contactButton")}
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            excepturi, porro qui necessitatibus harum reprehenderit. Commodi
            eaque amet inventore dolore minima soluta explicabo, illo in
            reprehenderit voluptas aut officia tempora quidem rerum maxime
            nesciunt neque aliquid accusantium recusandae dignissimos
            distinctio!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, veritatis. Illum soluta debitis dolore doloremque
            officia necessitatibus saepe voluptas dolorum deleniti! Quis quo
            adipisci ad odio tempora! Optio, blanditiis, omnis, at qui aut fugit
            officia voluptatum sapiente provident minus enim dolore. Ipsam
            repudiandae consectetur eum? challenges.
          </p>
          {/* </div> */}
        </section>

        <Button
          onClick={toggleLanguage}
          className="mx-auto mt-10 flex w-56 gap-3"
        >
          {language === "en" ? "中文" : "EN"}
        </Button>


       
      </section>
    </motion.div>
  );
}
