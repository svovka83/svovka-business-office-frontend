import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Post.module.css";
import { Button } from "@mui/material";

import {
  fetchGetOnePosts,
  selectorOnePost,
} from "../../../../../redux/slices/postsSlice";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector(selectorOnePost);

  React.useEffect(() => {
    dispatch(fetchGetOnePosts(id));
  }, [dispatch, id]);

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
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </div>
  );
};

export default Post;
