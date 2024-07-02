import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import styles from "./Friends.module.css";
import { Avatar, Button, Paper } from "@mui/material";

import {
  fetchGetMe,
  fetchGetAllUsers,
  selectorAllUsers,
  selectorMyFriends,
} from "../../../../../redux/slices/usersSlice";
import { serverURL } from "../../../../../axios";

const friendsAnimate = {
  hidden: { x: 200, opacity: 0, scale: 0.5 },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: index * 1 },
  }),
};

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
          .map((users, index) => (
            <Link to={`/home/users/${users._id}`} key={users._id}>
              <motion.div
                initial={"hidden"}
                animate={"visible"}
                variants={friendsAnimate}
                custom={index}
                className={styles.users}
              >
                <Paper className={styles.paper} elevation={5}>
                  <h3>{users.fullName}</h3>
                  <p>
                    {users.urlAvatar ? (
                      <img
                        className={styles.avatarYes}
                        src={`${serverURL}/${users.urlAvatar}`}
                        alt="avatar"
                      />
                    ) : (
                      <Avatar
                        sx={{ width: 150, height: 150 }}
                        className={styles.avatarNo}
                      />
                    )}
                  </p>
                  <p>
                    <b>Age:</b> {users.age}
                  </p>
                  <p>
                    <b>Country:</b> {users.country}
                  </p>
                  <p>
                    <i>
                      <b>Email:</b> {users.email}
                    </i>
                  </p>
                </Paper>
              </motion.div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Friends;
