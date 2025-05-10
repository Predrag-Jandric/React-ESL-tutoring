import { useNavigate } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import { LuChevronLeft } from "react-icons/lu";
import one from "/assets/career/one.png";
import four from "/assets/career/four.jpg";
import six from "/assets/career/six.png";
import two from "/assets/career/two.png";
import ten from "/assets/career/ten.png";
import fourteen from "/assets/career/fourteen.png";

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

      <section className="mx-auto my-10 mt-24 flex flex-col items-center rounded-md bg-pureWhite px-3 py-5 font-headings shadow-md xs:px-5 lg:w-[65rem]">
        <h2 className="relative mx-auto mt-4 w-fit text-center font-headings text-[2.25rem] font-bold tracking-wider text-dark after:absolute after:bottom-[-20%] after:left-1/2 after:h-1.5 after:w-20 after:-translate-x-1/2 after:bg-primary xs:text-[2.5rem] xs:after:w-24 lg:text-[3rem] lg:after:w-32">
          Teaching history
        </h2>
        <div className="mt-10 flex flex-col gap-2 text-center text-dark">
          <h3 className="mt-5 text-3xl italic sm:text-4xl">2019</h3>
          <img className="rounded-md" src={four} alt="missing" />
          <h3 className="mt-5 text-3xl italic sm:text-4xl">2020</h3>
          <img className="rounded-md" src={fourteen} alt="missing" />
          <h3 className="mt-5 text-3xl italic sm:text-4xl">2021</h3>
          <img className="rounded-md" src={six} alt="missing" />
          <h3 className="mt-5 text-3xl italic sm:text-4xl">2022</h3>
          <img className="rounded-md" src={one} alt="missing" />
          <h3 className="mt-5 text-3xl italic sm:text-4xl">2023</h3>
          <img className="rounded-md" src={two} alt="missing" />
          <h3 className="mt-5 text-3xl italic sm:text-4xl">2024</h3>
          <img className="rounded-md" src={ten} alt="missing" />
          {/* <h3 className="mt-5 text-3xl italic sm:text-4xl">2025</h3>
          <img className="rounded-md" src={} alt="missing" /> */}
        </div>
      </section>
    </>
  );
}
