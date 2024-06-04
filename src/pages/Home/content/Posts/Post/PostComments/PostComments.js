import React from "react";

import axios from "../../../../../../axios";

import styles from "./PostComments.module.css";
import { Button, TextField } from "@mui/material";

export const PostComments = (props) => {
  const [text, setText] = React.useState("");
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    axios.get("/comments").then((res) => setComments(res.data));
  }, []);

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
    await axios.get("/comments").then((res) => setComments(res.data));
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
              <h4>{c.userName}</h4>
              <p>{c.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostComments;
