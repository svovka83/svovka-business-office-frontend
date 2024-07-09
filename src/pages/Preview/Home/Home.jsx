import MainBanner from "./MainBanner";
import WorkWithContentful from "./WorkWithContentfulText";
import WorkPlaceBanner1 from "./WorkPlaceBanner1";
import WorkWithContentfulAudio from "./WorkWithContentfulAudio";
import WorkPlaceBanner2 from "./WorkPlaceBanner2";
import WorkWithSwiper from "./WorkWithSwiper";

const Home = () => {
  return (
    <div className="text-align">
      <MainBanner />
      <WorkWithContentful />
      <WorkPlaceBanner1 />
      <MainBanner />
      <WorkWithContentfulAudio />
      <WorkPlaceBanner2 />
      <WorkWithSwiper />
      <MainBanner />
    </div>
  );
};

export default Home;
