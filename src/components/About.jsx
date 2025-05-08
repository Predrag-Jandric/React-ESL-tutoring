import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "../utils/Button.jsx";
// import devPhoto from "/assets/about/devPhoto.jpg";

export default function About() {
  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-1 flex flex-col items-center px-3 xs:px-5"
      id="about"
    >
      <section className="container rounded-custom text-grayText transition-all hover:shadow-lg">
        <section className="flex flex-col">
          {/* <img
            src={devPhoto}
            alt="developer photo"
            className="w-80 object-cover rounded-custom"
          /> */}

          {/* <div className="lg:w-2/3 w-full"> */}
          <h3 className="mb-4 font-headings text-headings font-medium">
            asdasas
          </h3>
          <p className="text-body">
            dasdas
            <br />
            <br />
            [say that you are a permanent american expat living in europe most
            of the time or sometimes in thailand] [say that you are a teacher
            and a programming developer] [say that you are professional, kind,
            flexible, patient and love working with students from 5-12 years
            old]
            <br />
            <br />
            [say that im more than a teacher who does the job and doesnt care, i
            am a mentor and student's needs and progress comes first ]
          </p>
          {/* </div> */}
        </section>

        <Button className="mx-auto mt-10 flex w-56 gap-3">
          view my teaching history
        </Button>
      </section>
    </motion.div>
  );
}
