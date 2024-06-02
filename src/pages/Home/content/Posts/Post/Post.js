import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import PostEdit from "./PostEdit/PostEdit";

import axios from "../../../../../axios";

import styles from "./Post.module.css";
import { Button } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const [post, setPost] = React.useState({});

  const addLikes = async () => {
    const fields = {
      likes: post.likes + 1,
      viewCount: post.viewCount - 1,
    };
    await axios.put(`/posts/${id}`, fields);
    await axios.get(`/posts/${id}`).then((res) => setPost(res.data));
  };

  const updateScreen = () => {
    axios.get(`/posts/${id}`).then((res) => setPost(res.data));
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
            Create
          </Button>
        </Link>
        <h2>Post</h2>
        <Link to="/home/posts">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      <PostEdit
        id={id}
        userId={post.userId}
        userName={post.userName}
        title={post.title}
        text={post.text}
        viewCount={post.viewCount}
        likes={post.likes}
        addLikes={addLikes}
        updateScreen={updateScreen}
        removePost={removePost}
      />
    </div>
  );
};

export default Post;
