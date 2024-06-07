import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AllUsers.module.css";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import {
  fetchGetAllUsers,
  selectorFullData,
  selectorAllUsers,
} from "../../../../redux/slices/usersSlice";

const AllUsers = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectorFullData);
  const users = useSelector(selectorAllUsers);

  React.useEffect(() => {
    dispatch(fetchGetAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Users</h2>
        <Link to="/home">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      {users
        .filter((f) => f._id !== me._id)
        .map((users) => (
          <Link to={`/home/users/${users._id}`} key={users._id}>
            <div className={styles.users}>
              <Paper className={styles.paper} elevation={5}>
                <h4>{users.fullName}</h4>
                <p>{users.email}</p>
              </Paper>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default AllUsers;
