import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PostEdit from "./PostEdit/PostEdit";
import PostComments from "./PostComments/PostComments";

import axios from "../../../../../axios";

import styles from "./Post.module.css";
import { Button } from "@mui/material";

import {
  fetchGetOnePost,
  selectorStatusPost,
} from "../../../../../redux/slices/postsSlice";
import { fetchGetAllComments } from "../../../../../redux/slices/commentsSlice";

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectorStatusPost);

  React.useEffect(() => {
    dispatch(fetchGetOnePost(id));
  }, [dispatch, id]);

  const removePost = async () => {
    if (window.confirm("Do you really want to delete the post?")) {
      await axios.delete(`/posts/${id}`);
      navigate("/home/posts");
      dispatch(fetchGetAllComments());
    }
  };

  return (
    <div>
      <div className={styles.header_post}>
        <h2>Post</h2>
        <Link to="/home/posts">
          <Button variant="contained" color="inherit">
            Back
          </Button>
        </Link>
      </div>
      {status === "loading" ? (
        "... loading"
      ) : (
        <>
          <PostEdit id={id} removePost={removePost} />
          <PostComments id={id} />
        </>
      )}
    </div>
  );
};

export default Post;
