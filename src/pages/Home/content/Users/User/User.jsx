import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./User.module.css";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Grid } from "@mui/material";

import {
  fetchGetOneUser,
  fetchAddFriend,
  fetchRemoveFriend,
  selectorOneUser,
  selectorMyFriends,
  selectorFullData,
} from "../../../../../redux/slices/usersSlice";
import {
  fetchGetDialog,
  fetchCreateDialog,
  fetchDeleteDialog,
  selectorDialog,
} from "../../../../../redux/slices/dialogsSlice";
import { serverURL } from "../../../../../axios";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectorOneUser);
  const friends = useSelector(selectorMyFriends);
  const { _id } = useSelector(selectorDialog);
  const me = useSelector(selectorFullData);

  React.useEffect(() => {
    dispatch(fetchGetDialog(id));
    dispatch(fetchGetOneUser(id));
  }, [dispatch, id]);

  const goToDialog = () => {
    navigate(`/home/users/dialog/${id}?name=${me.fullName}&room=${_id}`);
  };
  const addFriend = () => {
    if (window.confirm(`Do you want add ${user.fullName}.`)) {
      dispatch(fetchAddFriend(id));
      dispatch(fetchCreateDialog(id));
      navigate("/home/users/friends");
    }
  };
  const removeFriend = () => {
    if (window.confirm(`Do you want remove ${user.fullName}.`)) {
      dispatch(fetchRemoveFriend(id));
      dispatch(fetchDeleteDialog(id));
      navigate("/home/users/friends");
    }
  };

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
      <Paper className={styles.user} elevation={5}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <p>
              {user.urlAvatar ? (
                <img
                  className={styles.avatarYes}
                  src={`${serverURL}/${user.urlAvatar}`}
                  alt="avatar"
                />
              ) : (
                <Avatar
                  sx={{ width: 150, height: 150 }}
                  className={styles.avatarNo}
                />
              )}
            </p>
            <h3>{user.fullName}</h3>
            <p>
              <i>{user.email}</i>
            </p>
            {friends.includes(user._id) ? (
              <div>
                <Button
                  onClick={goToDialog}
                  variant="contained"
                  color="secondary"
                >
                  Message
                </Button>
                <br />
                <br />
                <Button
                  onClick={removeFriend}
                  variant="contained"
                  color="error"
                >
                  Remove from friends
                </Button>
              </div>
            ) : (
              <Button onClick={addFriend} variant="contained" color="success">
                Add to friends
              </Button>
            )}
          </Grid>
          <Grid item xs={12} md={8}>
            {friends.includes(user._id) ? (
              <div>
                <p>
                  <b>Age:</b> {user.age}
                </p>
                <p>
                  <b>Gender:</b> {user.gender}
                </p>
                <p>
                  <b>Status:</b> {user.status}
                </p>
                <p>
                  <b>Country:</b> {user.country}
                </p>
                <p>
                  <b>Education:</b> {user.education}
                </p>
                <p>
                  <b>Job:</b> {user.job}
                </p>
                <p>
                  <b>Hobby:</b> {user.hobby.join(", ")}
                </p>
              </div>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default User;
