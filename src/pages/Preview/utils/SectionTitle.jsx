import ScrollAnimation from "react-animate-on-scroll";

const SectionTitle = ({ title }) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOutLeft"
      offset={70}
    >
      <h2 className="title">{title}</h2>
    </ScrollAnimation>
  );
};

export default SectionTitle;
