import Hero from "../components/Home-page/Hero";
import Cta from "../components/Home-page/Cta";
import Process from "../components/Home-page/Process";
import Retouching from "../components/Home-page/Retouching";
import PhotoPortfolio from "../components/Home-page/PhotoPortfolio";
import Confession from "../components/Home-page/Confession";
import Sessions from "../components/Home-page/Sessions";

function Home() {
  return (
    <>
      <Hero />
      <Cta />
      <Process />
      <Retouching />
      <PhotoPortfolio />
      <Confession />
      <Sessions />
    </>
  );
}

export default Home;
