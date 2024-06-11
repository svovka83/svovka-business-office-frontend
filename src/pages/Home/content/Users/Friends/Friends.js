import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Friends.module.css";
import { Button, Paper } from "@mui/material";

import {
  fetchGetAllUsers,
  selectorAllUsers,
  selectorMyFriends,
} from "../../../../../redux/slices/usersSlice";

const Friends = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectorAllUsers);
  const friends = useSelector(selectorMyFriends);

  React.useEffect(() => {
    dispatch(fetchGetAllUsers());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <div>
        <div className={styles.header}>
          <h2>Friends</h2>
          <Link to="/home/users">
            <Button variant="contained" color="inherit">
              Back
            </Button>
          </Link>
        </div>
        {users
          .filter((f) => friends.includes(f._id))
          .map((users) => (
            <Link to={`/home/users/${users._id}`} key={users._id}>
              <div className={styles.users}>
                <Paper className={styles.paper} elevation={5}>
                  <h4>{users.fullName}</h4>
                  <p>Age: {users.age}</p>
                  <p>Gender: {users.gender}</p>
                  <p>Status: {users.status}</p>
                  <p>Country: {users.country}</p>
                  <p>Job: {users.job}</p>
                  <p>Email: {users.email}</p>
                </Paper>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Friends;
