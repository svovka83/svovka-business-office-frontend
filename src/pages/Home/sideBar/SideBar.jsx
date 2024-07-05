import { Link } from "react-router-dom";

import { SideBarMenu } from "./SideBarMenu";

import styles from "./SideBar.module.css";
import { Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

export const SideBar = () => {
  return (
    <div className={styles.side_bar}>
      {SideBarMenu.map(({ name, link}, index ) => (
        <ScrollAnimation
          key={link}
          animateIn="animate__zoomIn"
          offset={0}
          delay={index * 300}
        >
          <Link to={link}>
            <Button
              variant="contained"
              color="info"
              className={styles.button_size}
            >
              {name}
            </Button>
            <br />
            <br />
          </Link>
        </ScrollAnimation>
      ))}
      <ScrollAnimation animateIn="animate__zoomIn" offset={0} delay={300}>
        <Link to="/">
          <Button
            variant="contained"
            color="inherit"
            className={styles.button_size}
          >
            to start page
          </Button>
        </Link>
      </ScrollAnimation>
    </div>
  );
};

export default SideBar;
