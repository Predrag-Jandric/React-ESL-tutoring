import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { projectsVariants, generalVariants } from "../utils/animations.js";
import Button from "../utils/Button.jsx";
import { projectsMap } from "../utils/data.js";
import { IoEnter } from "react-icons/io5";

import ScrollToTop from "../utils/ScrollToTop.jsx";
import { LuChevronLeft } from "react-icons/lu";

export default function Career() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("about");
      if (element) {
        const topPosition = element.offsetTop - 230;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }, 100); //must have delay
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-[8vh] w-full items-center justify-center bg-dark bg-opacity-95 font-body text-white shadow-md backdrop-blur-sm">
        <div className="mx-[1.1rem] w-full max-w-[70rem]">
          <button
            onClick={handleBackClick}
            className="flex items-center justify-start p-3.5 pl-0 text-xl transition hover:text-primary"
          >
            <LuChevronLeft className="size-7" />
            Back
          </button>
        </div>
      </nav>

      <ScrollToTop />


      <div className="my-12 mt-24 flex flex-col items-center px-3 font-headings xs:px-5">
        <section className="container ">

        </section>
        </div>
    </>
  );
}
