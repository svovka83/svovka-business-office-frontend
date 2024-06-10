import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./User.module.css";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import {
  fetchGetOneUser,
  fetchAddFriend,
  fetchRemoveFriend,
  selectorOneUser,
  selectorMyFriends,
} from "../../../../../redux/slices/usersSlice";

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectorOneUser);
  const friends = useSelector(selectorMyFriends);

  React.useEffect(() => {
    dispatch(fetchGetOneUser(id));
  }, [dispatch, id]);

  const addFriend = () => {
    if (window.confirm(`Do you want add ${user.fullName}.`)) {
      dispatch(fetchAddFriend(id));
      navigate("/home/users/friends");
    }
  };
  const removeFriend = () => {
    if (window.confirm(`Do you want remove ${user.fullName}.`)) {
      dispatch(fetchRemoveFriend(id));
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
      <div>
        <Paper className={styles.paper} elevation={5}>
          <h4>{user.fullName}</h4>
          <p>{user.email}</p>
          <Button
            disabled={friends.includes(user._id)}
            onClick={addFriend}
            variant="contained"
            color="success"
          >
            Add to friends
          </Button>
          <br />
          <br />
          <Button
            disabled={!friends.includes(user._id)}
            onClick={removeFriend}
            variant="contained"
            color="error"
          >
            Remove from friends
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default User;
