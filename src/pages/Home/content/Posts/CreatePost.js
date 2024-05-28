import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../../../axios";

import { Button } from "@mui/material";

const CreatePost = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };

  const createPost = async () => {
    try {
      const fields = {
        title,
        text,
      };
      const { data } = await axios.post("/posts", fields);
      console.log(data);
      setTitle("");
      setText("");
      navigate("/home/posts");
    } catch (err) {
      alert("failed to create post");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form>
        <h3>Title</h3>
        <input onChange={changeTitle} value={title} />
        <br />
        <h3>Text</h3>
        <textarea onChange={changeText} value={text} />
        <br />
        <br />
        <Button
          onClick={createPost}
          type="button"
          variant="contained"
          color="success"
        >
          Create post
        </Button>
      </form>
      <br />
      <Link to="/home/posts">
        <Button variant="contained" color="inherit">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default CreatePost;
