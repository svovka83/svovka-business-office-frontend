import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { Button } from "@mui/material";


const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/home">
        <Button variant="contained">Home</Button>
      </Link>

      <Link to="/login">
        <Button variant="contained">Login</Button>
      </Link>
    </div>
  );
};

export default Header;
