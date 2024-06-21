import { Link } from "react-router-dom";

import styles from "./SideBar.module.css";
import { Button } from "@mui/material";

export const SideBar = () => {
  return (
    <div className={styles.side_bar}>
      <Link to="/home/users">
        <Button variant="contained" color="info" className={styles.button_size}>
          Users
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/posts">
        <Button variant="contained" color="info" className={styles.button_size}>
          Posts
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/chat_form">
        <Button variant="contained" color="info" className={styles.button_size}>
          Chat
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/programs">
        <Button variant="contained" color="info" className={styles.button_size}>
          Programs
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/">
        <Button
          variant="contained"
          color="inherit"
          className={styles.button_size}
        >
          to start page
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
