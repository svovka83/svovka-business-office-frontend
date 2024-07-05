import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

import Logo from "./Logo";
import Socials from "./Socials";

import { MENU } from "../utils/constants";

const Header = () => {
  return (
    <div className="Header">
      <div className="header">
        <Logo />
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
        <Socials />
      </div>
    </div>
  );
};

export default Header;
