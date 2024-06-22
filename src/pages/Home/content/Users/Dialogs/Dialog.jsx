import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import io from "socket.io-client";

import styles from "./Dialog.module.css";
import { Button, TextField } from "@mui/material";

import {
  fetchGetDialog,
  fetchUpdateDialog,
  selectorDialog,
  selectorStatusDialog,
} from "../../../../../redux/slices/dialogsSlice";
import {
  fetchGetOneUser,
  selectorFullData,
  selectorOneUser,
} from "../../../../../redux/slices/usersSlice";
import { serverURL } from "../../../../../axios";

// const socket = io.connect(serverURL);

const Dialog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dialog } = useSelector(selectorDialog);
  const me = useSelector(selectorFullData);
  const { fullName } = useSelector(selectorOneUser);
  const status = useSelector(selectorStatusDialog);

  const [messages, setMessages] = React.useState(dialog);
  const [message, setMessage] = React.useState("");

  console.log(dialog, messages);

  React.useEffect(() => {
    dispatch(fetchGetOneUser(id));
    dispatch(fetchGetDialog(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    // socket.emit("join", { room: "dialog" });
  }, []);

  const inputMessage = `${me.fullName}: ` + message;

  const sendMessage = () => {
    const fields = {
      dialog: inputMessage,
    };
    // socket.emit("sendMessage", inputMessage);
    dispatch(fetchUpdateDialog({ id, fields }));
    setMessage("");
  };

  // React.useEffect(() => {
  //   socket.on("returnMessage", () => {});
  // }, [inputMessage]);

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Dialog with {fullName}</h2>
        <Button variant="contained" color="secondary">
          back
        </Button>
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
          {status === "loading"
            ? "... loading"
            : dialog
                .toReversed()
                .map((dialog, index) => <p key={index}>{dialog}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
