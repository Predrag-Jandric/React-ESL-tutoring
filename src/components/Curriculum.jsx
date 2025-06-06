import { Link } from "react-router-dom";
import { generalVariants } from "../utils/animations.js";
import { motion } from "framer-motion";
import { useLanguage } from "../utils/LanguageContext.jsx";
import Button from "../utils/Button.jsx";
import { useEffect, useState } from "react";
import oned from "/assets/curriculum/oned.jpg";
import twod from "/assets/curriculum/twod.png";
import threed from "/assets/curriculum/threed.jpg";
import fourd from "/assets/curriculum/fourd.jpg";
import fived from "/assets/curriculum/fived.jpg";
import sixd from "/assets/curriculum/sixd.jpg";

function Curriculum() {
  const { t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: fived,
    },
    {
      id: 2,
      image: twod,
    },
    {
      id: 3,
      image: threed,
    },
    {
      id: 4,
      image: fourd,
    },
    {
      id: 5,
      image: oned,
    },
    {
      id: 6,
      image: sixd,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-auto flex flex-col items-center px-3 xs:px-5 lg:w-[65rem]"
      id="curriculum"
    >
      <section className="container rounded-custom text-dark transition-all hover:shadow-lg">
        <section className="flex flex-col items-center gap-3 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <h3 className="text-headings font-medium">
              {t("curriculumheader")}
            </h3>
            <div className="mt-7 flex flex-col gap-5 text-body">
              <p>{t("curriculumone")}</p>
              <p>{t("curriculumtwo")}</p>
            </div>
          </div>

          <div className="relative w-fit overflow-hidden rounded-custom md:w-80">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="rounded-custom object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error("Image failed to load:", slide.image);
                      e.currentTarget.src =
                        "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* dot navigation  */}
            <div className="absolute bottom-0.5 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`size-2 rounded-full ${
                    index === currentSlide ? "bg-blue-400" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <Button className="mx-auto mt-10 flex w-56 gap-3 px-0 py-0">
          <Link className="w-full px-6 py-2" to="/details">
            {t("curriculumdetailsbtn")}
          </Link>
        </Button>
      </section>
    </motion.div>
  );
}

export default Curriculum;
