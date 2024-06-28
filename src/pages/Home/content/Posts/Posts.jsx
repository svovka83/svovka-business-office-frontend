import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Posts.module.css";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

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
        <h2>Posts</h2>
        <Link to="/home">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      {posts.map((post, index) => (
        <ScrollAnimation
          key={post._id}
          animateIn="animate__jello"
          offset={0}
          delay={index * 500}
        >
          <Link
            to={`/home/posts/${post._id}`}
            className={styles.link}
            key={post._id}
          >
            <Paper className={styles.paper} elevation={5}>
              <b>author: {post.userName}</b>
              <b>title: {post.title}</b>
              <b>likes: ❤️ {post.likeCount}</b>
              <b>views: 👁️‍🗨️ {post.viewCount}</b>
            </Paper>
          </Link>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default Posts;
