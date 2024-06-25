import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const me = useSelector(selectorFullData);
  const { fullName } = useSelector(selectorOneUser);
  const { _id, dialog } = useSelector(selectorDialog);

  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState(dialog);

  React.useEffect(() => {
    socket.emit("join_dialog", { room: _id });
  }, [_id]);

  React.useEffect(() => {
    socket.on("returnDialog", ({ dialog }) => {
      setMessages([...messages, dialog]);
    });
  }, [messages]);

  const sendMessage = async () => {
    const fields = {
      dialog: `${me.fullName}: ` + message,
    };
    await axios.put(`/dialogs/${id}`, fields);
    socket.emit("sendDialog", fields);
    setMessage("");
  };

  console.log(messages);

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
        <div className={styles.display_messages}>
          {messages.toReversed().map((messages, index) => (
            <span className={styles.messages}>
              <p className={styles.message} key={index}>
                {messages}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
