import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from "../components/Button";

import { MdElectricBolt } from "react-icons/md";

export const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-10 max-w-[512px] max-lg:max-w-[388px]">
            <div className="caption-title mb-5">Video Editing</div>
            <h1 className="mb-6 h1 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="mb-14 body-1 max-md:mb-10 max-w-[440px]">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button text="Try it now" icon={<MdElectricBolt size={24} />} />
            </LinkScroll>
          </div>

          <div className="absolute -top-16 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
