import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import { MENU } from "../utils/constants";

const Menu = () => {
  return (
      <nav className="menu">
        {MENU.map(({ name, link }, index) => (
          <ScrollAnimation
            key={link}
            animateIn="animate__fadeInDown"
            offset={0}
            delay={index * 300}
          >
            <Link className="link" to={link}>
              {name}
            </Link>
          </ScrollAnimation>
        ))}
      </nav>
  );
};

export default Menu;
