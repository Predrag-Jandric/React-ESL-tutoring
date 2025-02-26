import { useEffect, useState } from "react";
import { GrLinkTop } from "react-icons/gr";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 3000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function handleJumpToTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0 });
  }

  return (
    <button
      type="button"
      onClick={handleJumpToTop}
      className={`fixed bottom-10 right-1 p-3 rounded-full bg-pureWhite transition-all sm:hover:text-pureWhite sm:hover:bg-primary hover:bg-pureWhite text-black border border-gray-300 z-50 shadow-md duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Scroll to top"
      title="Na Vrh"
    >
      <GrLinkTop />
    </button>
  );
}
