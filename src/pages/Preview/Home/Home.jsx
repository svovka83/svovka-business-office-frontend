import MainBanner from "./MainBanner";
import WorkWithContentful from "./WorkWithContentful";

const Home = () => {
  return (
    <div  className="text-align">
      <MainBanner />
      <WorkWithContentful />
      <WorkPlaceBanner />
      <MainBanner />
      <MainBanner />
      <MainBanner />
    </div>
  );
};

export default Home;
