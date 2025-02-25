import { useState } from "react";
import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import { faqMap } from "../utils/data.js";

export default function CestaPitanja() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to split the answer by newlines and return it as separate <p> elements
  const formatAnswer = (answer) => {
    return answer.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="cestaPitanja"
      className="mx-auto max-w-[57rem] xs:px-6 px-4"
    >
      {faqMap.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            className="text-grayText mb-4 overflow-hidden rounded-custom shadow-md transition-transform ease-in-out"
            key={index}
          >
            <p
              className="flex items-center justify-between bg-pureWhite px-6 py-4 font-medium text-body cursor-pointer transition-all sm:hover:bg-slate-50"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <button className="text-body bg-transparent border-none cursor-pointer transition-transform">
                {isOpen ? "-" : "+"}
              </button>
            </p>
            <div
              className={`faq-answer overflow-hidden ${
                isOpen ? "max-h-full opacity-100 py-5" : "max-h-0 opacity-0"
              } px-5 text-body leading-relaxed bg-pureWhite border-neutral-200 border-t-2`}
            >
              {formatAnswer(faq.answer)}
            </div>
          </div>
        );
      })}
    </motion.section>
  );
}
