import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import { useLanguage } from "../utils/LanguageContext.jsx";

export default function Questions() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsMap = t("questionstranslate");

  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="questions"
      className="mx-auto w-full px-4 text-dark xs:px-6 lg:w-[65rem]"
    >
      {questionsMap.map((question, index) => {
        const isOpen = activeIndex === index;
        const formattedAnswer = `\n${question.answer}\n`.split("\n");

        return (
          <div
            className="mb-4 overflow-hidden rounded-custom shadow-md transition-transform ease-in-out"
            key={index}
          >
            <p
              className={`${isOpen ? "border-blue-400" : "border-transparent"} flex cursor-pointer items-center justify-between gap-5 border-l-4 bg-pureWhite px-6 py-4 text-body font-medium transition-all hover:bg-slate-50`}
              onClick={() => toggleQuestion(index)}
            >
              {question.question}
              <button className="w-5 cursor-pointer border-none bg-transparent text-body transition-transform">
                {isOpen ? "▴" : "▾"}
              </button>
            </p>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  layout
                  className="border-t-2 border-neutral-200 bg-pureWhite px-4 text-body leading-relaxed xs:px-6"
                >
                  {formattedAnswer.map((line, i) => (
                    <p key={i} className="">
                      {line.trim() === "" ? <br /> : line}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.section>
  );
}
