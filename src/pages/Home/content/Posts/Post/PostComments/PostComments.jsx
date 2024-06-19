import React from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "../../../../../../axios";

import styles from "./PostComments.module.css";
import { Button, TextField } from "@mui/material";

import { selectorFullData } from "../../../../../../redux/slices/usersSlice";
import {
  fetchGetAllComments,
  selectorAllComments,
} from "../../../../../../redux/slices/commentsSlice";
import { selectorOnePost } from "../../../../../../redux/slices/postsSlice";

export const PostComments = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectorFullData);
  const post = useSelector(selectorOnePost);
  const comments = useSelector(selectorAllComments);

  const [text, setText] = React.useState("");

  React.useEffect(() => {
    dispatch(fetchGetAllComments());
  }, [dispatch]);

  const changeComment = (event) => {
    setText(event.target.value);
  };

  const createComment = async () => {
    const fields = {
      comment: text,
      postId: props.id,
    };
    await axios.post("/comments", fields);
    setText("");
    dispatch(fetchGetAllComments());
  };

  return (
    <div>
      <form className={styles.comment}>
        <TextField onChange={changeComment} value={text} multiline fullWidth />
        <br />
        <div className={styles.footer_comment}>
          <h3>Comment</h3>
          <Button onClick={createComment} variant="contained" color="success">
            Send
          </Button>
        </div>
      </form>
      <div>
        {comments
          .filter((f) => f.postId === props.id)
          .toReversed()
          .map((c) => (
            <div key={c._id} className={styles.comments}>
              <div className={styles.comments_header}>
                <h4>{c.userName}</h4>
                <Button
                  disabled={user._id !== post.userId && user._id !== c.userId}
                  onClick={async () => {
                    if (window.confirm("Do you want delete comment?")) {
                      await axios.delete(`/comments/${c._id}`);
                      dispatch(fetchGetAllComments());
                    }
                  }}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </div>
              <p>{c.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostComments;
