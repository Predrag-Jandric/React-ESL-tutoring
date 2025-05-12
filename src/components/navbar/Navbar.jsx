import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { useLanguage } from "../../utils/LanguageContext";
import en from "/assets/nav/en.png";
import zh from "/assets/nav/zh.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  const navLinks = [
    { href: "curriculum", label: t("curriculum") },
    { href: "reviews", label: t("reviews") },
    { href: "pricing", label: t("pricing") },
    { href: "questions", label: t("questions") },
    { href: "contact", label: t("contact") },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const topPosition = element.offsetTop - 230;
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, null, `#${href}`);
    }
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-center bg-dark bg-opacity-95 backdrop-blur-sm">
        <ul className="relative hidden items-center justify-center gap-0 transition duration-200 ease-in-out sm:flex">
          {navLinks.map((link, index) => (
            <li key={index} className="group relative z-10 flex w-full">
              <a
                rel="noopener noreferrer"
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap relative cursor-pointer px-5 py-2 text-xl text-white transition duration-200 ease-in-out group-hover:before:scale-100"
              >
                {link.label}
              </a>
              <span className="absolute left-[10%] top-full z-[-1] h-1 w-[80%] scale-0 bg-primary transition duration-300 ease-in-out group-hover:scale-100"></span>
            </li>
          ))}
        </ul>
        <button
          className="absolute right-5 top-3 hidden size-10 cursor-pointer items-center gap-2 rounded text-2xl text-white sm:flex"
          onClick={toggleLanguage}
        >
          <img
            className="h-9 w-9 object-contain"
            src={language === "en" ? zh : en}
            alt="language icon"
          />
        </button>
        <CgMenu
          className="absolute right-5 top-3 size-10 cursor-pointer transition-colors hover:text-primary sm:hidden"
          onClick={() => setIsOpen(true)}
        />
      </nav>

      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;
