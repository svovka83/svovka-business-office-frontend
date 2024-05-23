import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectorFullData, logOut } from "../redux/slices/users";

import styles from "./Header.module.css";
import { Button } from "@mui/material";

const Header = () => {
  const data = useSelector(selectorFullData);
  const isAuth = Boolean(data);
  const dispatch = useDispatch();

  const onClickLogOut = () => {
    if (window.confirm(`${data.fullName} do you want logout?`)) {
      const { token } = data;
      window.localStorage.removeItem("token", token);
      dispatch(logOut());
    }
  };

  return (
    <div className={styles.header}>
      {isAuth ? (
        <Link to="/home">
          <Button variant="contained">{data.fullName}</Button>
        </Link>
      ) : (
        <h3>Not authorized</h3>
      )}
      <h1>Svovka business office</h1>
      <div>
        {isAuth ? (
          <Link to="/login">
            <Button variant="contained" color="warning" onClick={onClickLogOut}>
              Log out
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button variant="contained">Log in</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
