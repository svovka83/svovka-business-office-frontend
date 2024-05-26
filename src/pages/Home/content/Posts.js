import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";

import {
  fetchGetAllPosts,
  selectorAllPosts,
} from "../../../redux/slices/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectorAllPosts);

  React.useEffect(() => {
    dispatch(fetchGetAllPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((posts) => (
        <div key={posts._id}>
          <h3>{posts.title}</h3>
          <p>{posts.text}</p>
        </div>
      ))}
      <Link to="/home/create_post">
        <Button variant="contained" color="info">
          Create post
        </Button>
      </Link>{" "}
      <Link to="/home">
        <Button variant="contained" color="inherit">
          Back
        </Button>
      </Link>
    </div>
  );
};

export default Posts;
