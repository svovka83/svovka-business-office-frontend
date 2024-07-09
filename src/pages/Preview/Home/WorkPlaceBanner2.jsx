import Section from "../utils/Section";
import SectionTitle from "../utils/SectionTitle";

import video from "../images/20240707_003828.mp4";

const WorkPlaceBanner2 = () => {
  return (
    <Section className="video">
      <SectionTitle title="My workplace in night" />
      <video className="video" loop muted autoPlay>
        <source src={video} type="video/mp4" />
      </video>
    </Section>
  );
};

export default WorkPlaceBanner2;
