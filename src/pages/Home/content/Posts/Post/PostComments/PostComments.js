import React from "react";

import axios from "../../../../../../axios";

import styles from "./PostComments.module.css";
import { Button, TextField } from "@mui/material";

export const PostComments = () => {
  const [text, setText] = React.useState("");
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    axios.get("/comments").then((res) => setComments(res.data));
  }, []);

  const changeComment = (event) => {
    setText(event.target.value);
  };

  const createComment = async () => {
    await axios.post("/comments", { comment: text });
    setText("");
    await axios.get("/comments").then((res) => setComments(res.data));
  };

  return (
    <div>
      <form>
        <h3>Comment</h3>
        <TextField onChange={changeComment} value={text} multiline />
        <br />
        <br />
        <Button onClick={createComment} variant="contained" color="success">
          Send
        </Button>
      </form>
      <div>
        {comments.map((c) => (
          <p>
            <b>{c.userName}</b> {c.comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
