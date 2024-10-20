import { FaqItem } from "../components/FaqItem";
import { faq } from "../constants";
import { Element } from "react-scroll";

export const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative py-28 text-left">
          <h3 className="h3 max-md:h5 mb-7 text-p4 text-pretty">
            Curiosity didn't kill the cat, it gave it answers.
          </h3>
          <p className="body-1 max-lg:max-w-sm">
            You've got questions, we've got answers.
          </p>
        </div>

        <div className="faq-glow_before relative border-2 border-s2 bg-s1">
          {/* logo icon */}
          <div className="size-20 m-auto justify-center border-2 border-s2 bg-s1 rounded-full flex items-center -mt-[2.5rem]">
            <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
          </div>
          <div className="container py-12 flex max-md:block gap-6 items-start">
            <div className="flex-1 grid gap-y-6">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>
            <div className="flex-1 grid gap-y-6">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
