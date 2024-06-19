import { Link } from "react-router-dom";

import styles from "./UsersRoute.module.css";
import { Button } from "@mui/material";

const UsersRoute = () => {
  return (
    <div className={styles.side_bar}>
      <Link to="/home/users">
        <Button variant="contained" color="info" className={styles.button_size}>
          Users
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/users/friends">
        <Button variant="contained" color="info" className={styles.button_size}>
          Friends
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/users/profile">
        <Button variant="contained" color="info" className={styles.button_size}>
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
    </div>
  );
};

export default UsersRoute;
