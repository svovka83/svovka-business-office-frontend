import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./User.module.css";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import {
  fetchGetOneUser,
  selectorOneUser,
} from "../../../../../redux/slices/usersSlice";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectorOneUser);

  React.useEffect(() => {
    dispatch(fetchGetOneUser(id));
  }, [dispatch, id]);
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>User</h2>
        <Link to="/home/users">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      <div>
        <Paper className={styles.paper} elevation={5}>
          <h4>{user.fullName}</h4>
          <p>{user.email}</p>
        </Paper>
      </div>
    </div>
  );
};

export default User;
