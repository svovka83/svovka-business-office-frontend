import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Friends.module.css";
import { Button, Paper } from "@mui/material";

import {
  fetchGetMe,
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

  const updateFriends = () => {
    dispatch(fetchGetMe());
  };

  return (
    <div className={styles.content}>
      <div>
        <div className={styles.header}>
          <h2>Friends</h2>
          <Button onClick={updateFriends} variant="contained" color="secondary">
            Update
          </Button>
        </div>
        {users
          .filter((f) => friends.includes(f._id))
          .map((users) => (
            <Link to={`/home/users/${users._id}`} key={users._id}>
              <div className={styles.users}>
                <Paper className={styles.paper} elevation={5}>
                  <h4>{users.fullName}</h4>
                  <p><b>Age:</b> {users.age}</p>
                  <p><b>Country:</b> {users.country}</p>
                  <p><i><b>Email:</b> {users.email}</i></p>
                </Paper>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Friends;
