import styles from "./Start.module.css";

const Start = () => {
  return (
    <div>
      <h1>Welcome to site!</h1>
      <img
        className={styles.start_image}
        src="DSC00237.JPG"
        alt="start content"
      />
    </div>
  );
};

export default Start;
