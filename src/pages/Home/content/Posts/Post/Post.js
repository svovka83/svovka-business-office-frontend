import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import PostEdit from "./PostEdit/PostEdit";
import PostComments from "./PostComments/PostComments";

import axios from "../../../../../axios";

import styles from "./Post.module.css";
import { Button } from "@mui/material";

import {
  fetchGetOnePost,
  reducerClearPost,
} from "../../../../../redux/slices/postsSlice";
import { fetchGetAllComments } from "../../../../../redux/slices/commentsSlice";

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(fetchGetOnePost(id));
  }, [dispatch, id]);

  const removePost = async () => {
    if (window.confirm("Do you really want to delete the post?")) {
      await axios.delete(`/posts/${id}`);
      navigate("/home/posts");
      dispatch(fetchGetAllComments());
      dispatch(reducerClearPost());
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
      <PostEdit id={id} removePost={removePost} />
      <PostComments id={id} />
    </div>
  );
};

export default Post;
