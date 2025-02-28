import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import picture from "/assets/vizija/druga.jpg";

function Vizija() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="xs:px-5 px-3 flex mx-1 flex-col items-center"
      id="vizija"
    >
      <section className="container text-grayText rounded-custom">
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="lg:w-2/3 w-full">
            <h3 className="text-headings font-medium mb-4 font-headings">
              Od učenja programiranja, do putovanja po svetu
            </h3>
            <p className="text-body">
              Dugo vremena sam imao ideju da radim i putujem. Prošle godine sam
              ostvario svoj cilj i proveo skoro 2 meseca u dalekoj Aziji,
              putujući i radeći online. U tom periodu sam naučio mnogo o sebi, o
              svetu i o mogućnostima koje pruža znanje o programiranju.
              <br />
              <br />
              Upoznao sam mnogo ljudi iz raznih delova sveta koji se bave
              sličnim stvarima i dokazao sam sebi da zapravo nisam vezan za
              jedno mesto, već da je moguće da izaberem odakle želim raditi i
              živeti.
              <br />
              <br />
              Bilo da su vaši ciljevi slični kao moji ili želite nešto sasvim
              drugačije, ovo je dokaz da je sve moguće.
            </p>
          </div>

          <img
            src={picture}
            alt="missing"
            className="w-80 object-cover rounded-custom"
          />
        </section>
      </section>
    </motion.div>
  );
}

export default Vizija;
