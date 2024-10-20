import { Element } from "react-scroll";
import { details, features } from "../constants";
import { Button } from "../components/Button";

export const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex flex-nowrap md:flex-wrap max-md:flex-col border-2 border-s3 rounded-[44px] max-md:border-none gap-y-6 feature-after md:g7 md:overflow-hidden z-0">
            {/* main cards */}
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative px-5 pb-5 md:px-10 md:pb-10 flex-1 max-md:pt-20 max-md:border-2 max-md:border-s3 max-md:rounded-[24px] max-md:g7 mb-28 max-md:mb-0"
              >
                {/* hanging icon */}
                <div className="inline-flex flex-col mb-12 items-center max-md:hidden">
                  <div className="w-0.5 h-16 bg-white/10" />
                  <img
                    src={icon}
                    className="size-28 object-contain"
                    alt={title}
                  />
                </div>
                <p className="caption-title mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 max-lg:h4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-lg:body-3 max-md:mb-8 max-md:base">
                  {text}
                </p>
                <Button text={button.title} icon={button.icon} />
              </div>
            ))}
          </div>
          <ul className="relative flex justify-around border-2 border-white/20 rounded-[44px] max-md:hidden -mt-20 z-20 g7">
            {details.map(({ id, icon, title }) => (
              <li key={id} className="relative py-16 px-4">
                <div className="flex items-center justify-center mx-auto mb-3 border-2 border-blue-500/10 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                  <img
                    src={icon}
                    alt={title}
                    className="size-[85%] object-contain z-20"
                  />
                </div>
                <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                  {title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
