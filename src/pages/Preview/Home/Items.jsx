import ScrollAnimation from "react-animate-on-scroll";

const Items = ({ items,index }) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      afterAnimatedOut="animate__fadeOutRight"
      offset={5000}
      delay={index * 300}
    >
      <div key={items.sys.id} className="grid_2">
        <h3>{items.title}</h3>
        <p>{items.text}</p>
        {/* <img src={items.picture.fileName} alt={items.picture.fileName} /> */}
      </div>
    </ScrollAnimation>
  );
};

export default Items;
