import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";

const questionsMap = [
  {
    question: "What makes you stand out from other developers?",
    answer: `- I have a strong drive to keep learning, which is essential in a fast-paced, ever-evolving tech field.\n- I bring diverse experience from working on various projects with different teams, always maintaining a solution-driven mindset.\n- I’m disciplined, focused on writing clean, maintainable code, and committed to promoting a positive, team-oriented work environment.\n- I  enjoy writing documentation, giving presentations, and contributing to a collaborative learning culture. For me, these things are not a chore.`,
  },
  {
    question:
      "How much experience do you have as a frontend developer, and what kinds of projects have you worked on?",
    answer:
      "I’ve been coding for a few years and have worked on 100+ projects (available on my GitHub) of various sizes and complexity. I follow scalable, responsive, pixel-perfect design principles and prioritize best practices to ensure code quality, readability, and long-term maintainability.",
  },
  {
    question: "Do you have experience with [specific framework/tool]?",
    answer:
      "I may not always have direct experience with every tool, but I’m a quick learner and eager to expand my skill set to meet project requirements. I think programming is not about syntax memorisation but problem solving things and concept understanding. Staying curious, continuously learning, and keeping up with the latest tech trends is a key part of my approach to development.",
  },
  {
    question:
      "Do you have experience with full-stack development or backend technologies?",
    answer:
      "While most of my experience in in front-end development, I have a solid understanding of backend technologies like Node.js, Express, and MongoDB databases. I’m always working on improving these things.",
  },
  {
    question: "How do you work in teams, and how do you respond to feedback?",
    answer:
      "I’ve worked on open-source projects with developers from diverse backgrounds, often taking on the role of lead developer which has helped me become a better team player. I value collaboration, communication, and I adapt quickly to different team dynamics. I appreciate constructive feedback because it’s an opportunity to improve and grow as a developer. When my colleagues faced challenges, I actively guided them by sharing my knowledge, and helping them troubleshoot issues, ensuring we all grew together.",
  },
  {
    question: "How do you meet deadlines and handle challenges?",
    answer:
      "I think that efficient team communication is key to setting managable deadlines and achieving them in time. I’ve worked with the Scrum framework, which encourages collaboration between the development team, Scrum Master, and Product Owner to stay on track and deliver on time for the end user. When challenges arise, my go-to approach is to break the problem into smaller, more manageable pieces. Usually, stepping away for a quick walk clears my mind and brings fresh ideas. In the next team brainstorming session, we then all present our solutions and choose the best combination of ideas together.",
  },
];

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
              className="flex cursor-pointer items-center justify-between gap-5 bg-pureWhite px-6 py-4 text-body font-medium transition-all hover:bg-slate-50"
              onClick={() => toggleQuestion(index)}
            >
              {question.question}
              <button className="w-5 cursor-pointer border-none bg-transparent text-body transition-transform">
                {isOpen ? "-" : "+"}
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
