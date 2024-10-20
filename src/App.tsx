// import { Footer } from "./sections/Footer";
import { Features } from "./sections/Features";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Pricing } from "./sections/Pricing";

import { Faq } from "./sections/Faq";
import { Testimonials } from "./sections/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Faq />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
