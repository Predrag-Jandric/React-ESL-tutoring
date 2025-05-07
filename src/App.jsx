import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Contact from "./components/Contact";
import ProjectDetails from "./components/projects/ProjectDetails";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToHash from "./utils/ScrollToHash";
import Roadmap from "./components/Roadmap";
import Pricing from "./components/Pricing";

export default function App() {
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

              <Title text="About" />
              <About />
              <Title text="Projects" />
              <Projects />
              <Title text="Roadmap" />
              <Roadmap />
              <Title text="Reviews" />
              <Reviews />
              <Title text="Pricing" />
              <Pricing />
              <Title text="Questions" />
              <Questions />
              <Contact />
            </main>
          }
        />
        <Route path="/:projectName" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}
