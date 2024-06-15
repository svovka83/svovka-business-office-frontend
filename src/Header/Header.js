import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectorFullData, logOut } from "../redux/slices/usersSlice";

import styles from "./Header.module.css";
import { Button } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const data = useSelector(selectorFullData);
  const isAuth = Boolean(data);
  const dispatch = useDispatch();

  console.log(data);

  const onClickLogOut = () => {
    if (window.confirm(`${data.fullName} do you want logout?`)) {
      window.localStorage.removeItem("token");
      dispatch(logOut());
      navigate("/login");
    }
  };

  return (
    <div className={styles.header}>
      <div>
        {isAuth ? (
          <Link to="/home">
            <Button variant="contained">{data.fullName}</Button>
          </Link>
        ) : (
          <h3>Not authorized</h3>
        )}
      </div>
      <h1>Svovka business office</h1>
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
  );
};

export default Header;
