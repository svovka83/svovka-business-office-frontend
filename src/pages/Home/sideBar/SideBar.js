import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectorFullData } from "../../../redux/slices/usersSlice";

import styles from "./SideBar.module.css";
import { Button } from "@mui/material";

export const SideBar = () => {
  const data = useSelector(selectorFullData);

  return (
    <div className={styles.side_bar}>
      <h1 className={styles.welcome}>
        Welcome {data ? data.fullName : "user"}{" "}
      </h1>
      <Link to="/home/posts">
        <Button variant="contained" color="info" className={styles.button_size}>
          Posts
        </Button>
      </Link>
      <br />
      <br />
      <Link to="/home/users">
        <Button variant="contained" color="info" className={styles.button_size}>
          Users
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
