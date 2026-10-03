import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ScrollBand from "@/components/sections/ScrollBand";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Home = () => (
  <>
    <Navbar />
    <main className="overflow-x-clip">
      <Hero />
      <ScrollBand />
      <About />
      <Services />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
