import { Link } from "react-router-dom";

import styles from "./MyProfile.module.css"
import { Button } from "@mui/material";

const MyProfile = () => {
  return (
    <div className={styles.header}>
    <h2>My profile</h2>
    <Link to="/home/users">
      <Button variant="contained" color="inherit">
        Back
      </Button>
    </Link>
  </div>
  );
};

export default MyProfile;
