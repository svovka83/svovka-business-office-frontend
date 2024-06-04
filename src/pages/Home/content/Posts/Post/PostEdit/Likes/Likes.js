import axios from "../../../../../../../axios";

import styles from "./Likes.module.css";

export const Likes = (props) => {
  const addLike = async () => {
    const fields = {
      likeCount: props.likeCount + 1,
      isLike: true,
      viewCount: props.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    await axios
      .get(`/posts/${props.id}`)
      .then((res) => props.setPost(res.data));
  };
  const removeLike = async () => {
    const fields = {
      likeCount: props.likeCount - 1,
      isLike: false,
      viewCount: props.viewCount - 1,
    };
    await axios.put(`/posts/${props.id}`, fields);
    await axios
      .get(`/posts/${props.id}`)
      .then((res) => props.setPost(res.data));
  };

  return (
    <>
      {props.isLike ? (
        <span onClick={removeLike} title="I don`t like it!" className={styles.likes}>
          likes: ❤️ {props.likeCount}
        </span>
      ) : (
        <span
          onClick={addLike}
          title="I like it!"
          className={styles.likes}
        >
          likes: 🤍 {props.likeCount}
        </span>
      )}
    </>
  );
};

export default Likes;
