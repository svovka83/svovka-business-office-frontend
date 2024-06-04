import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import PostEdit from "./PostEdit/PostEdit";
import PostComments from "./PostComments/PostComments";

import axios from "../../../../../axios";

import styles from "./Post.module.css";
import { Button } from "@mui/material";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then((res) => setPost(res.data));
  }, [id]);

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
        setPost={setPost}
        removePost={removePost}
      />
      <PostComments />
    </div>
  );
};

export default Post;
