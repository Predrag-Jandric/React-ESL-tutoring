import { useNavigate } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import { LuChevronLeft } from "react-icons/lu";
import cambridgekidsbox from "/assets/curriculum/cambridgekidsbox.png";
import englishforeveryone from "/assets/curriculum/englishforeveryone.png";
import englishmadeeasy from "/assets/curriculum/englishmadeeasy.png";
import incredibleenglish from "/assets/curriculum/incredibleenglish.png";
import oxfordphonics from "/assets/curriculum/oxfordphonics.png";
import oxfordreadanddiscover from "/assets/curriculum/oxfordreadanddiscover.png";
import oxfordreadingtree from "/assets/curriculum/oxfordreadingtree.png";

import placeholder from "/assets/history/placeholder.png";
import { useLanguage } from "../utils/LanguageContext.jsx";
import SkeletonImage from "../utils/SkeletonImage.jsx";

export default function CurriculumDetails() {
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
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-[8vh] w-full items-center justify-center bg-dark bg-opacity-95 font-body text-white shadow-md backdrop-blur-sm">
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

      <section className="mx-auto my-10 mt-24 flex flex-col items-center rounded-md bg-pureWhite px-3 py-5 font-headings shadow-md xs:px-5 lg:w-[65rem]">
        <h2 className="relative mx-auto mt-4 w-fit text-center font-headings text-[2.25rem] font-bold tracking-wider text-dark after:absolute after:bottom-[-20%] after:left-1/2 after:h-1.5 after:w-20 after:-translate-x-1/2 after:bg-primary xs:text-[2.5rem] xs:after:w-24 lg:text-[3rem] lg:after:w-32">
          {t("curriculumdetails")}
        </h2>
        <div className="mt-10 flex flex-col gap-2 text-left text-body text-dark">
          <p className="mb-1 mt-7">{t("incredibleenglish")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={incredibleenglish}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <p className="mb-1 mt-7">{t("cambidge")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={cambridgekidsbox}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <p className="mb-1 mt-7">{t("oxfordreadanddiscover")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={oxfordreadanddiscover}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <p className="mb-1 mt-7">{t("oxfordphonics")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={oxfordphonics}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <p className="mb-1 mt-7">{t("oxfordreadingtree")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={oxfordreadingtree}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <p className="mb-1 mt-7">{t("englishmadeeasy")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={englishmadeeasy}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
          <p className="mb-1 mt-7">{t("englishforeveryone")}</p>
          <SkeletonImage
            placeholder={placeholder}
            src={englishforeveryone}
            alt="missing"
            className="rounded-md"
          />
          <hr className="border border-gray-300" />
        </div>
      </section>
    </>
  );
}
