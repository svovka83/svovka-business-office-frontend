import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectorIsAuth,
  selectorFullData,
  logOut,
} from "../redux/slices/usersSlice";

import styles from "./Header.module.css";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectorIsAuth);
  const me = useSelector(selectorFullData);
  const dispatch = useDispatch();

  const onClickLogOut = () => {
    if (window.confirm(`${me.fullName} do you want logout?`)) {
      window.localStorage.removeItem("token");
      dispatch(logOut());
      navigate("/");
    }
  };

  return (
    <div>
      <div className={styles.header}>
        <div>
          {isAuth ? (
            <div>
              <Link to="/home">
                <Button variant="contained">{me.fullName}</Button>
              </Link>
            </div>
          ) : (
            <h3>Not authorized</h3>
          )}
        </div>
        <div>
          {isAuth ? (
            <div>
              <Link to="/framer_motion">
                <Button variant="contained" color="secondary">
                  motion
                </Button>
              </Link>
            </div>
          ) : (
            <h1>SVovka</h1>
          )}
        </div>
        <div>
          {isAuth ? (
            <div>
              <Link to="/preview">
                <Button variant="contained" color="secondary">
                  preview
                </Button>
              </Link>
            </div>
          ) : (
            <h1>2024</h1>
          )}
        </div>
        <div>
          {isAuth ? (
            <Button variant="contained" color="warning" onClick={onClickLogOut}>
              Log out
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="contained">Log in</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
