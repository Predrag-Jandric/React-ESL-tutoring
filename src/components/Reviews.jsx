import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import CountUp from "react-countup";

export default function Reviews() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 px-3 text-dark/80 xs:px-5"
      id="reviews"
    >
      <article className="flex w-auto flex-col items-center justify-center gap-10">
        {/* counters row */}
        <div className="flex w-full flex-col items-center justify-center gap-5 md:w-auto md:flex-row md:gap-7">
          <div className="w-full rounded-custom bg-pureWhite px-6 py-4 text-center shadow-sm sm:w-56">
            <span className="text-4xl font-semibold">
              <CountUp
                enableScrollSpy
                scrollSpyOnce={true}
                scrollSpyDelay={300}
                start={0}
                end={6}
                duration={3}
                size={200}
              />
            </span>
            <p className="m-2">Years of experience</p>
          </div>
          <div className="w-full rounded-custom bg-pureWhite px-6 py-4 text-center shadow-sm sm:w-56">
            <span className="text-4xl font-semibold">
              <CountUp
                enableScrollSpy
                scrollSpyOnce={true}
                scrollSpyDelay={300}
                start={0}
                end={8000}
                duration={3}
                separator=""
                size={200}
              />
              +
            </span>
            <p className="m-2">Completed lessons</p>
          </div>
          <div className="w-full rounded-custom bg-pureWhite px-6 py-4 text-center shadow-sm sm:w-56">
            <span className="text-4xl font-semibold">
              <CountUp
                enableScrollSpy
                scrollSpyOnce={true}
                scrollSpyDelay={300}
                start={0}
                end={1200}
                duration={3}
                separator=""
                size={200}
              />
              +
            </span>
            <p className="m-2">Students served</p>
          </div>
        </div>

        {/* Video under the numbers */}
        <video
          className="w-fit rounded-custom bg-white object-cover shadow-sm md:max-w-[45.5rem]"
          src="/assets/reviews/example.mp4"
          poster="/assets/reviews/reviewsposter.png"
          playsInline
          controls
        />
      </article>
    </motion.section>
  );
}
