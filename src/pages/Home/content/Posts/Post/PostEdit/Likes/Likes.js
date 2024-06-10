import React from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "../../../../../../../axios";

import styles from "./Likes.module.css";

import { selectorFullData } from "../../../../../../../redux/slices/usersSlice";
import {
  fetchGetOnePost,
  selectorOnePost,
} from "../../../../../../../redux/slices/postsSlice";

export const Likes = (props) => {
  const dispatch = useDispatch();
  const me = useSelector(selectorFullData);
  const post = useSelector(selectorOnePost);

  const addLike = async () => {
    const fields = {
      likeCount: post.likeCount + 1,
      userLikes: [...post.userLikes, me._id],
      viewCount: post.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    dispatch(fetchGetOnePost(props.id));
  };
  const removeLike = async () => {
    const fields = {
      likeCount: post.likeCount - 1,
      userLikes: post.userLikes.filter((l) => l !== me._id),
      viewCount: post.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    dispatch(fetchGetOnePost(props.id));
  };

  return (
    <>
      {(post.userLikes.includes(me._id)) ? (
        <span
          onClick={removeLike}
          title="I don`t like it!"
          className={styles.likes}
        >
          likes: ❤️ {post.likeCount}
        </span>
      ) : (
        <span onClick={addLike} title="I like it!" className={styles.likes}>
          likes: 🤍 {post.likeCount}
        </span>
      )}
    </>
  );
};

export default Likes;
