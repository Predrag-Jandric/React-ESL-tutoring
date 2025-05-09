import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import en from "/assets/nav/en.png";
import zh from "/assets/nav/zh.png";
import { useLanguage } from "../../utils/LanguageContext";

const navLinks = [
  { href: "reviews", label: "Reviews" },
  { href: "pricing", label: "Pricing" },
  { href: "questions", label: "Questions" },
  { href: "contact", label: "Contact" },
];

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    // button animations are independent
    const buttonAnimations = [
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { ease: "easeOut", duration: 0.1 },
      ],
      [
        "path.middle",
        { opacity: isOpen ? 0 : 1 },
        { ease: "easeOut", duration: 0.1 },
      ],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { ease: "easeOut", duration: 0.1 },
      ],
    ];

    // animate the button and menu separately
    animate([...buttonAnimations]);
    animate([...menuAnimations]);
  }, [animate, isOpen]);

  return scope;
}

export default function MobileNavbar({ isOpen, setIsOpen }) {
  // const scrollToSection = useScrollTo(170);
  const [clickable, setClickable] = useState(true);
  const scope = useMenuAnimation(isOpen);

  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    if (isOpen) {
      document.body.style.overflow = "hidden";
      // document.body.classList.add("blur-background");
    } else {
      document.body.style.overflow = "auto";
      // document.body.classList.remove("blur-background");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, setIsOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
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

  const handleToggle = () => {
    if (!clickable) return;
    setClickable(false);
    setIsOpen((prev) => !prev);
    setTimeout(() => setClickable(true), 800);
  };

  return (
    <div ref={scope}>
      <nav className="fixed left-0 top-0 z-50 h-full w-full translate-x-full bg-bgcolor bg-opacity-95 pt-20 backdrop-blur-sm transition-colors">
        <div className="relative flex flex-col gap-y-6 px-8">
          <div className="mb-4 flex w-full items-center justify-between">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isOpen ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={toggleLanguage}
              className="flex size-10 cursor-pointer items-center gap-2 rounded text-2xl text-white"
            >
              <img
                className="h-9 w-9 object-contain"
                src={language === "en" ? zh : en}
                alt="language icon"
              />
              <span>
                <PiArrowsCounterClockwiseBold className="size-7" />
              </span>
            </motion.button>

            <motion.div
              onClick={handleToggle}
              initial={{ scale: 1, opacity: 1 }}
              animate={
                isOpen
                  ? { scale: 1, opacity: 1, rotate: 0 }
                  : { scale: 0.7, opacity: 0, rotate: 90 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <IoCloseOutline className="size-12 cursor-pointer transition-all hover:rotate-45" />
            </motion.div>
          </div>
          {navLinks.map((link, index) => (
            <li key={index} className="group relative z-10 flex w-full">
              <a
                rel="noopener noreferrer"
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative w-full cursor-pointer py-2 text-3xl text-white transition duration-200 ease-in-out hover:text-primary group-hover:before:scale-100"
              >
                {link.label}
              </a>
              <span className="absolute left-0 top-full z-[-1] h-1 w-32 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
            </li>
          ))}
        </div>
      </nav>
    </div>
  );
}
