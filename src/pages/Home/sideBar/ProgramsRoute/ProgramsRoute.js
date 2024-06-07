import { Link } from "react-router-dom";

import styles from "./ProgramsRoute.module.css";
import { Button } from "@mui/material";

const ProgramsRoute = () => {
  return (
    <div className={styles.side_bar}>
      <Link to="/home/programs/calculator">
        <Button variant="contained" color="info" className={styles.button_size}>
          Calculator
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/programs/timer">
        <Button variant="contained" color="info" className={styles.button_size}>
          Timer
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
    </div>
  );
};

export default ProgramsRoute;
