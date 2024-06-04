import React from "react";
import { useSelector } from "react-redux";

import { selectorFullData } from "../../../../../../redux/slices/usersSlice";

import axios from "../../../../../../axios";

import styles from "./PostEdit.module.css";
import { Button, TextField } from "@mui/material";

const PostEdit = (props) => {
  const data = useSelector(selectorFullData);

  const [isEditable, setIsEditable] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const [title, setTitle] = React.useState();
  const [text, setText] = React.useState();

  React.useEffect(() => {
    if (data._id === props.userId) {
      setDisabled(false);
    }
  }, [data._id, props.userId]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };

  const forEdit = () => {
    setTitle(props.title);
    setText(props.text);
    setIsEditable(true);
  };

  const updatePost = async () => {
    const fields = {
      title,
      text,
      viewCount: props.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    setIsEditable(false);
    axios.get(`/posts/${props.id}`).then((res) => props.setPost(res.data));
  };

  const addLikes = async () => {
    const fields = {
      likes: props.likes + 1,
      viewCount: props.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    await axios.get(`/posts/${props.id}`).then((res) => props.setPost(res.data));
  };

  return (
    <div>
      <div className={styles.title}>
        <span>author: {props.userName}</span>
        <h3>
          {isEditable ? (
            <TextField
              onChange={changeTitle}
              value={title}
              variant="standard"
            />
          ) : (
            props.title
          )}
        </h3>
        <span>views: 👁️‍🗨️ {props.viewCount}</span>
      </div>
      <p>
        {isEditable ? (
          <TextField
            onChange={changeText}
            value={text}
            className={styles.text_edit}
            multiline
            rows={4}
          />
        ) : (
          <p className={styles.text}>{props.text}</p>
        )}
      </p>
      <div className={styles.management}>
        <span onClick={addLikes} className={styles.likes}>
          likes: ❤️ {props.likes}
        </span>
        <div>
          {isEditable ? (
            <Button onClick={updatePost} variant="contained" color="success">
              Send
            </Button>
          ) : (
            <Button
              onClick={forEdit}
              variant="contained"
              color="warning"
              disabled={disabled}
            >
              Edit
            </Button>
          )}{" "}
          <Button
            onClick={props.removePost}
            variant="contained"
            color="error"
            disabled={disabled}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
