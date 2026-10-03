import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";

const Home = () => (
  <>
    <Navbar />
    <main className="overflow-x-clip">
      <Hero />
    </main>
    <Footer />
  </>
);

export default Home;
