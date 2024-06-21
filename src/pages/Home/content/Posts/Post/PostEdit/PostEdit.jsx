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

const FIELDS = {
  TITLE: "title",
  TEXT: "text",
};

const PostEdit = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectorFullData);
  const post = useSelector(selectorOnePost);

  const { TITLE, TEXT } = FIELDS;

  const [fields, setFields] = React.useState();
  const [isEditable, setIsEditable] = React.useState(false);

  const forEdit = () => {
    setFields({
      [TITLE]: post.title,
      [TEXT]: post.text,
    });
    setIsEditable(true);
  };

  const changeFields = ({ target: { name, value } }) => {
    setFields({ ...fields, [name]: value });
  };

  const updatePost = async () => {
    const id = props.id;
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
              onChange={changeFields}
              name="title"
              value={fields[TITLE]}
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
              onChange={changeFields}
              name="text"
              value={fields[TEXT]}
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
