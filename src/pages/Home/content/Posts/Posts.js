import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Posts.module.css";
import { Button } from "@mui/material";

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
        <div key={post._id} className={styles.posts}>
          <h4>{post.title}</h4>
          <span>
            <b>author: {post.userName}</b>
          </span>
          <span>
            <b>views: 👁️‍🗨️ {post.viewCount}</b>
          </span>
          <span>
            <b>likes: ❤️ {post.likes}</b>
          </span>
          <div>
            <Link to={`/home/posts/${post._id}`}>
              <Button variant="contained" color="info">
                read
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
