import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../../../../axios";
import io from "socket.io-client";

import styles from "./Dialog.module.css";
import { Button, TextField } from "@mui/material";

import { selectorDialog } from "../../../../../redux/slices/dialogsSlice";
import {
  selectorFullData,
  selectorOneUser,
} from "../../../../../redux/slices/usersSlice";
import { serverURL } from "../../../../../axios";

const socket = io.connect(serverURL);

const Dialog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { _id, dialog } = useSelector(selectorDialog);
  const me = useSelector(selectorFullData);
  const { fullName } = useSelector(selectorOneUser);

  const [messages, setMessages] = React.useState(dialog);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    socket.emit("let", { room: _id });
  }, [dispatch, id, _id]);

  React.useEffect(() => {
    socket.on("returnMessage", (fields) => {
      setMessages([...messages, fields.dialog]);
    });
  }, [messages]);

  const inputMessage = `${me.fullName}: ` + message;

  const sendMessage = async () => {
    const fields = {
      dialog: inputMessage,
    };
    await axios.put(`/dialogs/${id}`, fields);
    socket.emit("sendMessage", fields);
    setMessage("");
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Dialog with {fullName}</h2>
        <Link to={`/home/users/${id}`}>
          <Button variant="contained" color="inherit">
            back
          </Button>
        </Link>
      </div>
      <div>
        <div className={styles.header}>
          <TextField
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input_message}
            value={message}
            multiline
          />
          <Button onClick={sendMessage} variant="contained" color="success">
            Send message
          </Button>
        </div>
        <div>
          {messages.toReversed().map((messages, index) => (
            <p key={index}>{messages}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
