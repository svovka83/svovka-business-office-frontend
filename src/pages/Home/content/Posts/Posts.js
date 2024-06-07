import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Posts.module.css";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";

import {
  fetchGetAllPosts,
  selectorAllPosts,
} from "../../../../redux/slices/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectorAllPosts);

  React.useEffect(() => {
    dispatch(fetchGetAllPosts());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.header_posts}>
        <Link to="/home/create_post">
          <Button variant="contained" color="info">
            Create
          </Button>
        </Link>
        <h2>Posts</h2>
        <Link to="/home">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      {posts.map((post) => (
        <div key={post._id}>
          <Link to={`/home/posts/${post._id}`} className={styles.link}>
            <Paper className={styles.paper} elevation={5}>
              <b>author: {post.userName}</b>
              <b>title: {post.title}</b>
              <b>likes: ❤️ {post.likeCount}</b>
              <b>views: 👁️‍🗨️ {post.viewCount}</b>
            </Paper>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
