import Section from "../utils/Section";
import SectionTitle from "../utils/SectionTitle";

import Banner from "../images/4276167_2220328.jpg";

const MainBanner = () => {
  return (
    <Section>
      <SectionTitle title="SVovka" />
      <img className="banner" src={Banner} alt="MainBanner" />
    </Section>
  );
};

export default MainBanner;
