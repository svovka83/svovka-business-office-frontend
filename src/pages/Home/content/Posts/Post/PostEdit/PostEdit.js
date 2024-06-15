import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Likes from "./Likes/Likes";

import styles from "./PostEdit.module.css";
import { Button, TextField } from "@mui/material";

import { selectorFullData } from "../../../../../../redux/slices/usersSlice";
import {
  fetchUpdatePost,
  selectorOnePost,
} from "../../../../../../redux/slices/postsSlice";

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectorFullData);
  const post = useSelector(selectorOnePost);

  const [isEditable, setIsEditable] = React.useState(false);
  const [title, setTitle] = React.useState();
  const [text, setText] = React.useState();

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };

  const forEdit = () => {
    setTitle(post.title);
    setText(post.text);
    setIsEditable(true);
  };

  const updatePost = async () => {
    const id = props.id;
    const fields = {
      title,
      text,
    };
    dispatch(fetchUpdatePost({ id, fields }));
    setIsEditable(false);
  };

  return (
    <div className={styles.post}>
      <div className={styles.title}>
        <span>author: {post.userName}</span>
        <h3>
          {isEditable ? (
            <TextField
              onChange={changeTitle}
              value={title}
              variant="standard"
            />
          ) : (
            post.title
          )}
        </h3>
        <div>
          {" "}
          {isEditable ? (
            <Button onClick={updatePost} variant="contained" color="success">
              Send
            </Button>
          ) : (
            <Button
              onClick={forEdit}
              variant="contained"
              color="warning"
              disabled={user._id !== post.userId}
            >
              Edit
            </Button>
          )}{" "}
          <Button
            onClick={props.removePost}
            variant="contained"
            color="error"
            disabled={user._id !== post.userId}
          >
            Delete
          </Button>
        </div>
      </div>
      <p>
        <div className={styles.text}>
          {isEditable ? (
            <TextField
              onChange={changeText}
              value={text}
              multiline
              rows={4}
              fullWidth
            />
          ) : (
            <p>{post.text}</p>
          )}
        </div>
      </p>
      <div className={styles.management}>
        <Likes id={props.id} />
        <span>views: 👁️‍🗨️ {post.viewCount}</span>
      </div>
    </div>
  );
};

export default PostEdit;
