import { Link } from "react-router-dom";

import styles from "./ProgramsRoute.module.css";
import { Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ProgramsRoute = () => {
  return (
    <div className={styles.side_bar}>
      <ScrollAnimation animateIn="animate__zoomIn" offset={0} delay={300}>
        <Link to="/home/programs/calculator">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Calculator
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home/programs/timer">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Timer
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home/programs/capitals">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Capitals
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home">
          <Button
            variant="contained"
            color="inherit"
            className={styles.button_size}
          >
            back
          </Button>
        </Link>
      </ScrollAnimation>
    </div>
  );
};

export default ProgramsRoute;
