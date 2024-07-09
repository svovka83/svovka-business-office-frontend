import Section from "../utils/Section";
import SectionTitle from "../utils/SectionTitle";

import video from "../images/20240706_173243.mp4";

const WorkPlaceBanner1 = () => {
  return (
    <Section className="video">
      <SectionTitle title="My workplace in day" />
      <video className="video" loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </Section>
  );
};

export default WorkPlaceBanner1;
