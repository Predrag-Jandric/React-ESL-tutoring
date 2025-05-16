import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import CountUp from "react-countup";
import { useLanguage } from "../utils/LanguageContext.jsx";

export default function Reviews() {
  const { t } = useLanguage();

  const stats = [
    { number: 6, label: t("yearsofexperience") },
    { number: 8000, label: t("completedlessons"), suffix: "+" },
    { number: 1200, label: t("studentstaught"), suffix: "+" },
  ];

  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-auto w-full px-4 text-dark xs:px-6 lg:w-[65rem]"
      id="reviews"
    >
      <article className="mx-auto flex w-auto max-w-6xl flex-col items-center justify-center gap-10">
        {/* counters row */}
        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-7">
          {stats.map(({ number, label, suffix }, i) => (
            <div
              key={i}
              className={`w-full rounded-custom border-b-4 bg-pureWhite px-6 py-4 text-center shadow-md md:flex-1 ${i === 0 && "border-bgcolor"} ${i === 1 && "border-green-400"} ${i === 2 && "border-purple-400"} `}
            >
              <span className="text-4xl font-semibold">
                <CountUp
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={400}
                  start={0}
                  end={number}
                  duration={3}
                  separator=""
                />
                {suffix}
              </span>
              <p className="m-2 text-body">{label}</p>
            </div>
          ))}
        </div>

        <video
          className="rounded-custom bg-white object-cover shadow-md"
          src="/assets/reviews/compilation.mp4"
          poster="/assets/reviews/reviewsposter.png"
          playsInline
          controls
          controlsList="nodownload"
          disablePictureInPicture
        />
      </article>
    </motion.section>
  );
}
