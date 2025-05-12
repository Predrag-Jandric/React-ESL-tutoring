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

function Curriculum() {
  const { t } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: oned,
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
      id: 3,
      image: fourd,
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
      className="mx-1 flex flex-col items-center px-3 xs:px-5"
      id="curriculum"
    >
      <section className="container rounded-custom text-dark transition-all hover:shadow-lg">
        <section className="flex flex-col gap-3 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <h3 className="font-headings text-headings font-medium">
              {t("curriculumheader")}
            </h3>
            <div className="mt-7 flex flex-col gap-5 text-body">
              <p>{t("aboutone")}</p>
              <p>{t("abouttwo")}</p>
            </div>
          </div>

          <div className="relative w-80 overflow-hidden rounded-custom">
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
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`size-2.5 cursor-pointer rounded-full ${
                    index === currentSlide ? "bg-white" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </section>

        <Link to="/details">
          <Button className="mx-auto mt-10 flex w-56 gap-3">
            {t("curriculumdetailsbtn")}
          </Button>
        </Link>
      </section>
    </motion.div>
  );
}

export default Curriculum;
