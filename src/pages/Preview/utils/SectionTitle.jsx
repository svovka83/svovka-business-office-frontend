import ScrollAnimation from "react-animate-on-scroll";

const SectionTitle = ({ title }) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOutRight"
      offset={100}
    >
      <h2>{title}</h2>
    </ScrollAnimation>
  );
};

export default SectionTitle;
