import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GrLinkTop } from "react-icons/gr";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleJumpToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleJumpToTop}
        className={`fixed bottom-10 right-1 z-50 rounded-full border border-gray-500 bg-pureWhite p-3.5 text-black shadow-md transition-all duration-300 hover:bg-pureWhite sm:hover:bg-primary ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Scroll to top"
        title="To top"
      >
        <GrLinkTop />
      </button>
    </>
  );
}