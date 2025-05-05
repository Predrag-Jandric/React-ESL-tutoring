import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import Button from "./Button";
import { RiMailSendLine } from "react-icons/ri";
import { footerMap } from "../utils/data.js";
import { useForm, ValidationError } from "@formspree/react";
import { FaSpinner } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function Footer() {
  const [state, handleSubmit, reset] = useForm("mwplnjze");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent!", { position: "bottom-center" });
      reset();
    }
  }, [reset, state]);

  return (
    <footer className="mt-16 flex flex-col items-center bg-bgcolor px-4 py-12 xs:px-6">
      <motion.section
        variants={generalVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="contact"
        className="container flex flex-col gap-6 rounded-custom text-grayText md:flex-row md:gap-10"
      >
        <Toaster />

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="mb-6 flex-1 md:mb-0">
          <h3 className="relative mb-8 font-headings text-headings font-medium">
            Message Me{" "}
            <span className="absolute left-0 top-10 h-[3px] w-20 bg-primary"></span>
          </h3>

          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="formInput mt-1 text-base"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            placeholder="Your message"
            rows="5"
            id="message"
            name="message"
            required
            className="formInput text-base"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button
            type="submit"
            disabled={state.submitting}
            className={`flex w-44 items-center justify-center gap-3 ${
              state.submitting &&
              "cursor-not-allowed bg-gray-200 hover:bg-gray-200"
            }`}
            //  className="flex w-44 items-center justify-center gap-3 cursor-not-allowed bg-gray-200 hover:bg-gray-200"
          >
            {state.submitting ? (
              <>
                Sending... <FaSpinner className="animate-spin" size={20} />
              </>
            ) : (
              <>
                Send <RiMailSendLine size={20} />
              </>
            )}
          </Button>
        </form>

        {/* get in touch section */}
        <article className="flex-1">
          <h3 className="relative mb-8 font-headings text-headings font-medium">
            Get in Touch
            <span className="absolute left-0 top-10 h-[3px] w-20 bg-primary"></span>
          </h3>
          <p className="mb-4 text-body">
            Your feedback and insights are highly appreciated. If you&apos;d
            like to connect with me or explore more of my work, you can find me
            on LinkedIn, GitHub, and my YouTube channel. Thank you for visiting!
          </p>
          <p className="mb-5 text-body">
            Email:{" "}
            <span className="font-semibold italic">
              predrag.jandric.bg@gmail.com
            </span>{" "}
          </p>

          <div className="flex w-fit gap-4">
            {footerMap.map((item, index) => (
              <a
                key={index}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-full transition hover:scale-125"
              >
                <img
                  src={item.footerImageUrl}
                  alt="social media photo"
                  className="h-10 w-10"
                />
              </a>
            ))}
          </div>
        </article>
      </motion.section>

      <p className="mt-4 flex items-center justify-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Predrag. All rights reserved.
      </p>
    </footer>
  );
}
