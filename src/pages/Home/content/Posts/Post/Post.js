import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import axios from "../../../../../axios";

import styles from "./Post.module.css";
import { Button } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditable, setIsEditable] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.warn(err);
        alert("can not found post");
      });
  }, [id]);

  const [data, setData] = React.useState({});
  const [title, setTitle] = React.useState();
  const [text, setText] = React.useState();

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };
  const forEdit = () => {
    setTitle(data.title);
    setText(data.text);
    setIsEditable(true);
  };

  const updatePost = async () => {
    const fields = {
      title,
      text,
    };
    await axios.put(`/posts/${id}`, fields);
    setIsEditable(false);
    axios.get(`/posts/${id}`).then((res) => setData(res.data));
  };

  const removePost = async () => {
    if (window.confirm("Do you really want to delete the post?")) {
      await axios.delete(`/posts/${id}`);
      navigate("/home/posts");
    }
  };

  return (
    <div>
      <div className={styles.header_post}>
        <Link to="/home/create_post">
          <Button variant="contained" color="info">
            Create post
          </Button>
        </Link>
        <h2>Post</h2>
        <Link to="/home/posts">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      <div className={styles.title}>
        <h3>
          {isEditable ? (
            <input onChange={changeTitle} value={title} />
          ) : (
            data.title
          )}
        </h3>
        <span>views: {data.viewCount}</span>
      </div>
      <p>
        {isEditable ? (
          <textarea
            onChange={changeText}
            value={text}
            className={styles.text}
          />
        ) : (
          <p className={styles.text}>{data.text}</p>
        )}
      </p>
      {isEditable ? (
        <Button onClick={updatePost} variant="contained" color="success">
          Send
        </Button>
      ) : (
        <Button onClick={forEdit} variant="contained" color="warning">
          Edit
        </Button>
      )}{" "}
      <Button onClick={removePost} variant="contained" color="error">
        Delete
      </Button>
    </div>
  );
};

export default Post;
