import { Element } from "react-scroll";
import { testimonials } from "../constants";
import { TestimonialItem } from "../components/TestimonialItem";

export const Testimonials = () => (
  <section className="py-20 md:py-24 lg:py-28">
    <Element name="testimonial">
      <div className="container">
        <p className="caption-title mb-5 max-md:mb-2.5">Wall of Love</p>
        <h3 className="h3 max-md:h5 text-p4">Words from our fans</h3>
      </div>
      <div className="container block lg:grid lg:grid-cols-2 gap-8 my-12">
        {testimonials.map((testimonial) => (
          <TestimonialItem key={testimonial.id} item={testimonial} />
        ))}
      </div>
    </Element>
  </section>
);
