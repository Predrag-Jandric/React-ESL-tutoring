import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { testimonialsMap } from "../utils/data.js";
import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";

export default function Testimonials() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 px-3 xs:px-5"
      id="testimonials"
    >
      <Swiper
        grabCursor={true}
        effect={"creative"}
        speed={600}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="container rounded-custom hover:shadow-lg transition-all"
      >
        {testimonialsMap.map((endorsement, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center bg-pureWhite p-10 text-center text-grayText"
          >
            <img
              src={endorsement.testimonialsImageUrl}
              alt="user photo"
              className="mx-auto mb-3 size-24 rounded-full object-cover"
            />

            <p className="font-semibold">{endorsement.name}</p>
            <small className="block italic text-stone-400">
              {endorsement.job}
            </small>
            <div className="mx-auto flex w-full flex-col p-6 text-start md:px-10">
              {endorsement.message.split("\n\n").map((paragraph, i) => (
                <p key={i} className="mb-4 text-body md:px-5">
                  {paragraph}
                </p>
              ))}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/predrag-jandric/details/recommendations/?detailScreen"
                className="specialLink mx-auto w-fit text-center italic"
              >
                View more on Linkedin
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
