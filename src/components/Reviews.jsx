import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import CountUp from "react-countup";

const stats = [
  { end: 6, label: "Years of experience" },
  { end: 8000, label: "Completed lessons", suffix: "+" },
  { end: 1200, label: "Students served", suffix: "+" },
];

export default function Reviews() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-auto w-full px-4 text-grayText xs:px-6 lg:w-[65rem]"
      id="reviews"
    >
      <article className="mx-auto flex w-auto max-w-6xl flex-col items-center justify-center gap-10">
        {/* counters row */}
        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-7">
          {stats.map(({ end, label, suffix }, i) => (
            <div
              key={i}
              className="w-full rounded-custom bg-pureWhite px-6 py-4 text-center shadow-sm md:flex-1"
            >
              <span className="text-4xl font-semibold">
                <CountUp
                  enableScrollSpy
                  scrollSpyOnce
                  scrollSpyDelay={300}
                  start={0}
                  end={end}
                  duration={3}
                  separator=""
                />
                {suffix}
              </span>
              <p className="m-2">{label}</p>
            </div>
          ))}
        </div>

        <video
          className="rounded-custom bg-white object-cover shadow-sm"
          src="/assets/reviews/example.mp4"
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
