import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { Button } from "@mui/material";

const Header = () => {
  const isAuth = true;

  return (
    <div className={styles.header}>
      <Link to="/home">
        <Button variant="contained">Home</Button>
      </Link>
      {isAuth ? (
        <Link to="/login">
          <Button variant="contained">Login</Button>
        </Link>
      ) : (
        <Link to="/">
          <Button variant="contained">Back</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
