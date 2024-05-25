import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectorFullData } from "../../../redux/slices/users";

import styles from "./SideBar.module.css";
import { Button } from "@mui/material";

export const SideBar = () => {
  const data = useSelector(selectorFullData);

  return (
    <div className={styles.side_bar}>
      <h1 className={styles.welcome}>Welcome {data.fullName}</h1>
      <Link to="/home/users">
        <Button variant="contained">Get all users</Button>
      </Link>
      <br />
      <br />
      <Link to="/">
        <Button variant="contained" color="warning">
          to start page
        </Button>
      </Link>
    </div>
  );
};

export default SideBar;
