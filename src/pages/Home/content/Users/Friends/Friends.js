import { Link } from "react-router-dom";

import styles from "./Friends.module.css"
import { Button } from "@mui/material";

const Friends = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Friends</h2>
        <Link to="/home/users">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      </div>
  );
};

export default Friends;
