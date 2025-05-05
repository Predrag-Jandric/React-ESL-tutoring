import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const topPosition = element.offsetTop - 170;
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }
  }, [hash]);

  return null;
}