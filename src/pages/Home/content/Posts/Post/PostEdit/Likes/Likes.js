import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Likes.module.css";

import { selectorFullData } from "../../../../../../../redux/slices/usersSlice";
import {
  fetchAddLike,
  selectorOnePost,
  selectorStatusPost,
} from "../../../../../../../redux/slices/postsSlice";

export const Likes = (props) => {
  const dispatch = useDispatch();
  const me = useSelector(selectorFullData);
  const post = useSelector(selectorOnePost);
  const status = useSelector(selectorStatusPost);

  const id = props.id;

  const addLike = async () => {
    const fields = {
      likeCount: post.likeCount + 1,
      userLikes: [...post.userLikes, me._id],
    };
    dispatch(fetchAddLike({ id, fields }));
  };
  const removeLike = async () => {
    const fields = {
      likeCount: post.likeCount - 1,
      userLikes: post.userLikes.filter((l) => l !== me._id),
    };
    dispatch(fetchAddLike({ id, fields }));
  };

  return (
    <>
      {status === "loading" ? (
        "... loading"
      ) : post.userLikes.includes(me._id) ? (
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
