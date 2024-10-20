import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import { plans } from "../constants";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import CountUp from "react-countup";
import { Button } from "../components/Button";

export const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          {/* Header section */}
          <div className="max-w-[960px] relative mx-auto border-l border-r border-white/20 pb-40 pt-28 max-xl:max-w-4xl max-xl:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-white max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px] z-20">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>

              {/* highlight background */}
              <div
                className={clsx(
                  "g4 rounded-xl before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            {/* image texture */}
            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-10"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* pricing section */}
          <div className="scroll-hide relative z-30 -mt-20 flex items-start max-lg:gap-5 max-lg:overflow-auto max-lg:pt-6 w-full">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 min-w-[320px] max-lg:rounded-3xl flex flex-1 justify-center"
              >
                {/* graphic icon */}
                <div
                  className={clsx(
                    "absolute left-0 right-0 z-2 flex items-center justify-center",
                    index === 1 ? "-top-6" : "-top-6 xl:-top-11"
                  )}
                >
                  <img
                    src={plan.logo}
                    alt={plan.title}
                    className={clsx(
                      "object-contain drop-shadow-2xl",
                      index === 1
                        ? "size-[120px] max-lg:size-[88px]"
                        : "size-[88px]"
                    )}
                  />
                </div>

                <div
                  className={clsx(
                    "relative flex flex-col items-center mt-4",
                    index === 1 ? "pt-24 max-lg:pt-12" : "pt-12"
                  )}
                >
                  <div
                    className={clsx(
                      "small-2 rounded-3xl relative z-20 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                      index === 1 ? "border-p3 text-p3" : "border-p1 text-p1"
                    )}
                  >
                    {plan.title}
                  </div>

                  {/* Plan price */}
                  <div className="relative flex items-start justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p4"
                      )}
                    >
                      ${" "}
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                    <div className="small-1 relative top-3 ml-1 uppercase">
                      / mo
                    </div>
                  </div>

                  {/* Plan solgan */}
                  <div
                    className={clsx(
                      "body-1 relative mb-10 w-full border-white/10 pb-9 text-center text-p4",
                      index !== 1 ? "border-b" : ""
                    )}
                  >
                    {plan.caption}
                  </div>

                  {/* feature list */}
                  <ul className="mx-auto space-y-4 xl:px-7">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="relative flex items-center gap-5"
                      >
                        <IoIosCheckmarkCircle
                          size={24}
                          className="text-blue-500"
                        />
                        <p className="flex-1">{feature}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex w-full justify-center">
                    <Button text="Get Started" icon={<BsStars size={20} />} />
                  </div>

                  {index === 1 && (
                    <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-'] max-lg:hidden">
                      Limited time offer
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
