import Title from "./components/Title";
import Hero from "./components/Hero";
import Omeni from "./components/Omeni";
import StaUcimo from "./components/StaUcimo";
import Vizija from "./components/Vizija";
import Strategija from "./components/Strategija";
import CestaPitanja from "./components/CestaPitanja";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <main className="flex font-body flex-col gap-10 m-0 p-0 box-border scroll-smooth list-none no-underline outline-none">
      <Hero />
      <Title text="O meni" />
      <Omeni />
      <Title text="Sta učimo" />
      <StaUcimo />
      <Title text="Vizija" />
      <Vizija />
      <Title text="Strategija" />
      <Strategija />
      <Title text="Česta Pitanja" />
      <CestaPitanja />
      <Title text="Kontakt" />
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
