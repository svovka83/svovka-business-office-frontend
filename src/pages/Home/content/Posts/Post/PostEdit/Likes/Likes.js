import React from "react";
import { useSelector } from "react-redux";

import axios from "../../../../../../../axios";

import { selectorFullData } from "../../../../../../../redux/slices/usersSlice";

import styles from "./Likes.module.css";

export const Likes = (props) => {
  const data = useSelector(selectorFullData);

  const [isLike, setIsLike] = React.useState(false);

  React.useEffect(() => {
    if (props.userLikes) {
      if (props.userLikes.includes(data._id)) {
        setIsLike(true);
      }
    }
  }, [data._id, props.userLikes]);

  console.log(props.userLikes, data._id, isLike);

  const addLike = async () => {
    const fields = {
      likeCount: props.likeCount + 1,
      userLikes: [...props.userLikes, data._id],
      viewCount: props.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    await axios
      .get(`/posts/${props.id}`)
      .then((res) => props.setPost(res.data));
    setIsLike(true);
  };
  const removeLike = async () => {
    const fields = {
      likeCount: props.likeCount - 1,
      userLikes: props.userLikes.filter((l) => l !== data._id),
      viewCount: props.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    await axios
      .get(`/posts/${props.id}`)
      .then((res) => props.setPost(res.data));
    setIsLike(false);
  };

  return (
    <>
      {isLike ? (
        <span
          onClick={removeLike}
          title="I don`t like it!"
          className={styles.likes}
        >
          likes: ❤️ {props.likeCount}
        </span>
      ) : (
        <span onClick={addLike} title="I like it!" className={styles.likes}>
          likes: 🤍 {props.likeCount}
        </span>
      )}
    </>
  );
};

export default Likes;
