import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

import styles from "./Chat.module.css";
import { Button, TextField } from "@mui/material";

import io from "socket.io-client";
import { serverURL } from "../../../../../axios";

const socket = io.connect(serverURL);

const Chat = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
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
    socket.on("message", ({ params, message }) => {
      setMessages([...messages, `${params.name}: ` + message]);
    });
  }, [messages]);

  const handleChangeMessage = () => {
    socket.emit("sendMessage", { params, message });
    setMessage("");
  };

  const leaveRoom = () => {
    socket.emit("leaveRoom", params);
    navigate("/home");
  };

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Chat: {params.room}</h2>
        <Button onClick={leaveRoom} variant="contained" color="secondary">
          leave
        </Button>
      </div>
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
            {messages.map((messages, index) => (
              <p key={index}>{messages}</p>
            ))}
          </div>
          <div>
            <span
              className={styles.smiles}
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
