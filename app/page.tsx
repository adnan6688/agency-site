import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Work from "@/components/Work";


export default function Home() {
  return (
    <div>
      <Hero />

      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      <section id="work" className="scroll-mt-20">
        <Work />
      </section>

      <section id="team" className="scroll-mt-20">
        <Team />
      </section>

      <section id="process" className="scroll-mt-20">
        <Process />
      </section>

      <section id="why-choose-us" className="scroll-mt-20">
        <WhyChooseUs />
      </section>

      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
