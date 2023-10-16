import Hero from "../components/Home-page/Hero";
import Cta from "../components/Home-page/Cta";
import Process from "../components/Home-page/Process";
import Retouching from "../components/Home-page/Retouching";
import PhotoPortfolio from "../components/Home-page/PhotoPortfolio";
import Confession from "../components/Home-page/Confession";
import Sessions from "../components/Home-page/Sessions";
import GetStarted from "../components/Home-page/GetStarted";
import SuccessStories from "../components/Home-page/SuccessStories";
import Nathan from "../components/Home-page/Nathan";
import BottomBanner from "../components/Home-page/BottomBanner";
import Footer from "../components/Home-page/Footer";

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
      <GetStarted />
      <SuccessStories />
      <Nathan />
      <BottomBanner />
      <Footer />
    </>
  );
}

export default Home;
