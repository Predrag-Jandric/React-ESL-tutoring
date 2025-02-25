import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import devPhoto from "/assets/omeni/devPhoto.jpg";

export default function About() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="xs:px-5 px-3 flex mx-1 flex-col items-center"
      id="about"
    >
      <section className="container text-grayText rounded-custom">
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          />

          <div className="lg:w-2/3 w-full">
            <h3 className="text-headings font-medium mb-4 font-headings">
              Pozdrav, ja sam Predrag – Frontend Programer
            </h3>
            <p className="text-body">
              Bavim se programiranjem već 3 godine, i fokusiram se na razvoj
              modernih web aplikacija. Takođe imam iskustva u razvijanju
              sajtova u timskom okruženju na open source projektima gde sam
              bio lider tima.
              <br />
              <br />
              Moj cilj je da budem mentor svojim klijentima i pružim im najbolji
              mogući put za usavršavanje svojih veština. Naučićemo sve što je
              potrebno, od osnovnih stvari do naprednih tehnologija, nakon čega
              ćemo zajedno raditi na vašim projektima koji će imati primenu u
              realnom svetu.
              <br />
              <br />
              Mentor sam već 6 godina, a sada te svoje veštine nudim i u IT
              svetu. Fleksibilan sam i znam da prilagodim svoj pristup učenju
              kako bih osigurao da svaki klijent postigne svoje ciljeve.
            </p>
          </div>
        </section>
      </section>
    </motion.div>
  );
}