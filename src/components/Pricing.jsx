import { motion } from "framer-motion";
import { generalVariants } from "../utils/animations.js";
import card from "/assets/pricing/card.png";
import bitcoin from "/assets/pricing/bitcoin.png";
import moneygram from "/assets/pricing/moneygram.png";
import graduation from "/assets/pricing/graduation.png";
import talking from "/assets/pricing/talking.png";
import homework from "/assets/pricing/homework.png";
import { useLanguage } from "../utils/LanguageContext.jsx";

const Pricing = () => {
  const { t } = useLanguage();

  const paymentTranslations = t("paymentoptions");
  const paymentMethods = paymentTranslations.map((item, index) => ({
    ...item,
    img: [card, moneygram, bitcoin][index],
  }));

  const pricingOptions = [
    { img: talking, price: "1600 元", labelKey: t("packageone") },
    { img: homework, price: "3100 元", labelKey: t("packagetwo") },
    { img: graduation, price: "4600 元", labelKey: t("packagethree") },
  ];

  return (
    <motion.div
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mx-auto w-full px-4 text-body text-dark xs:px-6 lg:w-[65rem]"
      id="pricing"
    >
      <section className="mx-auto max-w-6xl">
        {/* Package Tiers */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-custom border bg-pureWhite p-6 text-center shadow-md transition hover:shadow-lg"
            >
              <img className="w-28" src={option.img} alt="missing" />
              <p className="text-3xl font-bold">{option.price}</p>
              <p>{option.labelKey}</p>
            </div>
          ))}
        </div>

        <div className="w-full overflow-x-auto">
          <h3 className="mb-4 text-center text-2xl font-semibold">
            {t("paymentmethod")}
          </h3>

          {/* TABLE for desktop */}
          <div className="hidden overflow-hidden rounded-custom border border-slate-200 md:block">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr className="">
                  <th className="p-3 text-left font-medium">
                    {t("methodtable")}
                  </th>
                  <th className="p-3 text-center font-medium text-green-600">
                    {t("positivetable")}
                  </th>
                  <th className="p-3 text-right font-medium text-red-600">
                    {t("negativetable")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-pureWhite">
                {paymentMethods.map((method, index) => (
                  <tr key={index}>
                    <td className="flex items-center gap-3 p-3 text-left">
                      <img
                        className="w-10"
                        src={method.img}
                        alt={method.name}
                      />
                      {method.name}
                    </td>
                    <td className="p-3 text-center">{method.positive}</td>
                    <td className="p-3 text-right">{method.negative}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE for mobile */}
          <div className="block md:hidden">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex flex-col gap-5">
                <div className="mb-5 flex flex-col rounded-custom border bg-pureWhite p-4 shadow-md">
                  <div className="mb-3 flex items-center gap-3">
                    <img className="w-12" src={method.img} alt={method.name} />
                    <span className="font-medium">{method.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-green-600">{method.positive}</div>
                    <div className="text-red-600">{method.negative}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
