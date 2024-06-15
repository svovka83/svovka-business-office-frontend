import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Dialog.module.css";
import { Button, TextField } from "@mui/material";

import {
  fetchGetDialog,
  fetchUpdateDialog,
  selectorDialog,
  selectorStatusDialog,
} from "../../../../../redux/slices/dialogsSlice";
import {
  fetchGetMe,
  fetchGetOneUser,
  selectorFullData,
  selectorOneUser,
} from "../../../../../redux/slices/usersSlice";

const Dialog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dialog } = useSelector(selectorDialog);
  const me = useSelector(selectorFullData);
  const { fullName } = useSelector(selectorOneUser);
  const status = useSelector(selectorStatusDialog);

  React.useEffect(() => {
    dispatch(fetchGetOneUser(id));
    dispatch(fetchGetDialog(id));
  }, [dispatch, id]);

  const updatePage = () => {
    dispatch(fetchGetMe());
  };

  const [message, setMessage] = React.useState("");

  const inputMessage = `${me.fullName}: ` + message

  const sendMessage = () => {
    const fields = {
      dialog: inputMessage,
    };
    dispatch(fetchUpdateDialog({ id, fields }));
    setMessage("")
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Dialog with {fullName}</h2>
        <Button onClick={updatePage} variant="contained" color="secondary">
          Update
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
            : dialog.toReversed().map((d) => <p key={d}>{d}</p>)}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
