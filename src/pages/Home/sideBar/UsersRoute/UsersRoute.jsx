import { Link } from "react-router-dom";

import styles from "./UsersRoute.module.css";
import { Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const UsersRoute = () => {
  return (
    <div className={styles.side_bar}>
      <ScrollAnimation animateIn="animate__zoomIn" offset={0} delay={300}>
        <Link to="/home/users">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Users
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home/users/friends">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Friends
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/home/users/profile">
          <Button
            variant="contained"
            color="info"
            className={styles.button_size}
          >
            Profile
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

export default UsersRoute;
