import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import { useLanguage } from "../utils/LanguageContext.jsx";

// const questionsMap = [
//   {
//     question: "How do we get started, and what’s the next step?",
//     answer: `Just contact me on WeChat, and we’ll schedule your free trial class. After that, you can choose a package and make the payment, and we’ll get started right away.`,
//   },
//   {
//     question: "What platform do you use for the classes?",
//     answer:
//       "I use ClassIn. It’s free, super easy to set up, and widely used for online education.",
//   },
//   {
//     question: "Do you offer 1-on-1 or group classes?",
//     answer:
//       "I mainly do 1-on-1 lessons to give full attention to your child, but I can also teach 2 siblings together (for the same price) if they’re close in age and English level.",
//   },
//   {
//     question:
//       "Can we try a class before booking a package? How long are the lessons?",
//     answer:
//       "Absolutely! The first class is free so you can see if it’s a good fit. Each lesson is 30 minutes, but I can adjust based on your child’s needs.",
//   },
//   {
//     question: "What happens if we miss a class or need to reschedule?",
//     answer:
//       "No worries at all, I understand the children are often busy with school. You can cancel or reschedule anytime. If you happen to miss a class, it won’t be deducted from your package.",
//   },
//   {
//     question: "What if my child is shy or a complete beginner?",
//     answer:
//       "Totally fine! I’ve worked with lots of beginners and shy students. I use fun games, stories, and funny visual effects, to help them feel comfortable, and I teach based on your child’s current ability. A parent or grandparent is also always welcome to sit nearby for child's support.",
//   },
//   {
//     question:
//       "How will I know my child is improving, and do you give homework?",
//     answer:
//       "I give feedback often, so you’ll always know how your child is doing and what we’re working on. If you'd like, I can also give homework or fun practice ideas.",
//   },
// ];


export default function Questions() {
    const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsMap = t("questionstranslate")

  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="questions"
      className="mx-auto w-full px-4 text-grayText xs:px-6 lg:w-[65rem]"
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
              className={`${isOpen ? "border-bgcolor" : "border-transparent"} flex cursor-pointer items-center justify-between gap-5 border-l-4 bg-pureWhite px-6 py-4 text-body font-medium transition-all hover:bg-slate-50`}
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
