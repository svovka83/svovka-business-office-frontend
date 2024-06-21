import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./ChatForm.module.css";
import { Button, Paper, TextField } from "@mui/material";

import { selectorFullData } from "../../../../redux/slices/usersSlice";

const FIELDS = {
  NAME: "username",
  ROOM: "room",
};

const ChatForm = () => {
  const me = useSelector(selectorFullData)
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = React.useState({ [NAME]: me.fullName, [ROOM]: "Room" });
  console.log(values)

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={styles.wrapper}>
      <Paper className={styles.form} elevation={5}>
        <form>
          <h2>Chat</h2>
          <br />
          <TextField
            type="text"
            name="username"
            value={values[NAME]}
            onChange={handleChange}
            autoComplete="off"
          />
          <br />
          <br />
          <TextField
            type="text"
            name="room"
            value={values[ROOM]}
            onChange={handleChange}
            autoComplete="off"
          />
          <br />
          <br />
          <Link to={`/home/chat?name=${values[NAME]}&room=${values[ROOM]}`}>
            <Button type="submit" variant="contained" color="secondary">
              join
            </Button>
          </Link>
          <br />
          <br />
        </form>
      </Paper>
    </div>
  );
};

export default ChatForm;
