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
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Team></Team>
      <Process></Process>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
