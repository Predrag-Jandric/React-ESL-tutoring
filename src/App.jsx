import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Hero from "./components/Hero";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import History from "./components/History";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToHash from "./utils/ScrollToHash";

import Pricing from "./components/Pricing";
import Curriculum from "./components/Curriculum";
import CurriculumDetails from "./components/CurriculumDetails";
import { useLanguage } from "./utils/LanguageContext";

export default function App() {
  const { t } = useLanguage();
  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <main className="m-0 box-border flex list-none flex-col gap-10 scroll-smooth p-0 font-body no-underline outline-none">
              <Hero />
              <Title text={t("about")} />
              <About />
              <Title text={t("curriculum")} />
              <Curriculum />
              <Title text={t("reviews")} />
              <Reviews />
              <Title text={t("pricing")} />
              <Pricing />
              <Title text={t("questions")} />
              <Questions />
              <Contact />
            </main>
          }
        />
        <Route path="/history" element={<History />} />
        <Route path="/details" element={<CurriculumDetails />} />
      </Routes>
    </Router>
  );
}
