import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../../../../axios";

import styled from "./CreatePost.module.css";
import { Button, TextField } from "@mui/material";

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
      setTitle("");
      setText("");
      const id = data._id;
      navigate(`/home/posts/${id}`);
    } catch (err) {
      alert("failed to create post");
    }
  };

  return (
    <div>
      <form className={styled.create_post}>
        <h2>Create Post</h2>
        <h3>Title</h3>
        <TextField onChange={changeTitle} value={title} variant="standard" />
        <br />
        <h3>Text</h3>
        <TextField
          onChange={changeText}
          value={text}
          multiline
          rows={4}
          fullWidth
        />
        <br />
        <br />
        <Button
          onClick={createPost}
          type="button"
          variant="contained"
          color="success"
        >
          Create post
        </Button>{" "}
        <Link to="/home/posts">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default CreatePost;
