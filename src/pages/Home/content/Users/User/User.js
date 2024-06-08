import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./User.module.css";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import {
  fetchGetOneUser,
  selectorOneUser,
  fetchAddFriend,
  fetchGetMe
} from "../../../../../redux/slices/usersSlice";

const User = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectorOneUser);

  React.useEffect(() => {
    dispatch(fetchGetOneUser(id));
  }, [dispatch, id]);

  const addFriend = () => { // add confirm
    dispatch(fetchAddFriend(id));
    dispatch(fetchGetMe(id));
    navigate("/home/users/friends")
  }

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
          <Button onClick={addFriend} variant="contained" color="success">
            Add to friends
          </Button>
        </Paper>
      </div>
    </div>
  );
};

export default User;
