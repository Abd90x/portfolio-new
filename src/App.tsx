import Navbar from "./components/navbar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/Showcase";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <Experience />
    </>
  );
}

export default App;
