import { useNavigate } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import { LuChevronLeft } from "react-icons/lu";
import one from "/assets/history/one.png";
import four from "/assets/history/four.jpg";
import six from "/assets/history/six.png";
import two from "/assets/history/two.png";
import ten from "/assets/history/ten.png";
import fourteen from "/assets/history/fourteen.png";
import fifteen from "/assets/history/fifteen.png";
import SkeletonImage from "../utils/SkeletonImage.jsx";
import placeholder from "/assets/history/placeholder.png";
import { useLanguage } from "../utils/LanguageContext.jsx";

export default function History() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
      <nav className="fixed font-special left-0 right-0 top-0 z-50 flex h-[8vh] w-full items-center justify-center bg-bgcolor bg-opacity-95 text-white shadow-md backdrop-blur-sm">
        <div className="mx-[1.1rem] w-full max-w-[70rem]">
          <button
            onClick={handleBackClick}
            className="flex items-center justify-start p-3.5 pl-0 text-2xl transition hover:text-primary"
          >
            <LuChevronLeft className="size-8" />
            {t("backbtn")}
          </button>
        </div>
      </nav>

      <ScrollToTop />

      <section className="font-special mx-auto my-10 mt-24 flex flex-col items-center rounded-md bg-pureWhite px-3 py-5 shadow-md xs:px-5 lg:w-[65rem]">
        <h2 className="relative mx-auto mt-4 w-fit text-center text-[2.25rem] font-bold tracking-wider text-dark after:absolute after:bottom-[-20%] after:left-1/2 after:h-1.5 after:w-20 after:-translate-x-1/2 after:bg-primary xs:text-[2.5rem] xs:after:w-24 lg:text-[3rem] lg:after:w-32">
          {t("teachinghistory")}
        </h2>
        <div className="mt-10 flex flex-col gap-2 text-center text-dark">
          <h3 className="mt-5 text-3xl sm:text-4xl">2019</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={four}
            alt="2019"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <h3 className="mt-5 text-3xl sm:text-4xl">2020</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={fourteen}
            alt="2020"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <h3 className="mt-5 text-3xl sm:text-4xl">2021</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={six}
            alt="2021"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <h3 className="mt-5 text-3xl sm:text-4xl">2022</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={one}
            alt="2022"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <h3 className="mt-5 text-3xl sm:text-4xl">2023</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={two}
            alt="2023"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <h3 className="mt-5 text-3xl sm:text-4xl">2024</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={ten}
            alt="2024"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <h3 className="mt-5 text-3xl sm:text-4xl">2025</h3>
          <SkeletonImage
            placeholder={placeholder}
            src={fifteen}
            alt="2024"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
        </div>
      </section>
    </>
  );
}
