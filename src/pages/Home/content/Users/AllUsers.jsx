import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AllUsers.module.css";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

import {
  fetchGetAllUsers,
  selectorFullData,
  selectorAllUsers,
  selectorStatus,
} from "../../../../redux/slices/usersSlice";
import { serverURL } from "../../../../axios";

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectorAllUsers);
  const me = useSelector(selectorFullData);
  const status = useSelector(selectorStatus);

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
      {status === "loaded" &&
        users
          .filter((f) => f._id !== me._id)
          .map((users, index) => (
            <ScrollAnimation
              key={users._id}
              className={styles.users}
              animateIn="animate__swing"
              offset={0}
              delay={index * 300}
            >
              <Link to={`/home/users/${users._id}`} key={users._id}>
                <div className={styles.users}>
                  <Paper className={styles.paper} elevation={5}>
                    <h3>{users.fullName}</h3>
                    <p>
                      {users.urlAvatar ? (
                        <img
                          className={styles.avatarYes}
                          src={`${serverURL}/${users.urlAvatar}`}
                          alt=" avatar"
                        />
                      ) : (
                        <Avatar
                          sx={{ width: 150, height: 150 }}
                          className={styles.avatarNo}
                        />
                      )}
                    </p>
                    <p
                      className={
                        me.friends.includes(users._id)
                          ? styles.friend
                          : styles.not_friend
                      }
                    >
                      {me.friends.includes(users._id)
                        ? "my friend"
                        : "not my friend"}
                    </p>
                  </Paper>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
    </div>
  );
};

export default AllUsers;
