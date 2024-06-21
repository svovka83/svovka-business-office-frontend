import React from "react";
import { useLocation } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

import styles from "./Chat.module.css";
import { Button, TextField } from "@mui/material";

import io from "socket.io-client";
import { serverURL } from "../../../../../axios";

const socket = io.connect(serverURL);

const Chat = () => {
  const { search } = useLocation();
  const [params, setParams] = React.useState({});
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);

    socket.emit("join", searchParams);
  }, [search]);

  React.useEffect(() => {
    socket.on("message", ({ user, message }) => {
      setMessages([...messages, `${user.name}: ` + message]);
    });
  }, [messages]);

  React.useEffect(() => {
    socket.on("returnMessage", ({message, params}) => {
      const textMessage = `${params.name}: ` + message;
      setMessages([...messages, textMessage]);
      console.log(textMessage);
    });
  }, [messages]);

  const handleChangeMessage = () => {
    socket.emit("sendMessage", {message, params})
    setMessage("");
  };

  return (
    <div className={styles.content}>
      <h2>Chat: {params.room}</h2>
      <div>
        <div className={styles.block}>
          <TextField
            className={styles.input}
            onChange={({ target: { value } }) => setMessage(value)}
            value={message}
            multiline
          />
          <Button
            onClick={handleChangeMessage}
            variant="contained"
            color="success"
          >
            Send
          </Button>
        </div>
        <div className={styles.block}>
          <div>
            {messages.map((m) => (
              <p>{m}</p>
            ))}
          </div>
          <div>
            <span className={styles.smiles}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              😀
            </span>
            <span>
              {isOpen && (
                <EmojiPicker
                  onEmojiClick={({ emoji }) => {
                    setMessage(` ${message} ${emoji}`);
                  }}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
