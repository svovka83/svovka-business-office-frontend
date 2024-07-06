import Section from "../utils/Section";
import SectionTitle from "../utils/SectionTitle";

import video from "../images/20240706_173243.mp4"

const MainBanner = () => {
  return (
    <Section>
      <SectionTitle title="MY WORKPLACE" />
      <video>
        <source src={video} type="video/mp4" />
      </video>
    </Section>
  );
};

export default MainBanner;