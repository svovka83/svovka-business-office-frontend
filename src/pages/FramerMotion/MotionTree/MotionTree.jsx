import { motion } from "framer-motion";

import styles from "./MotionTree.module.css";

const firstAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: custom * 0.8,
    },
  }),
};
const secondAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.5,
    },
  },
};
const thirdAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: custom * 0.8,
    },
  }),
};

const MotionTree = () => {
  return (
    <div className={styles.motionTree}>
      <motion.section
        initial="hidden"
        whileInView="visible"
        className={styles.first}
      >
        <motion.img
          variants={firstAnimation}
          custom={1}
          className={styles.start_image}
          src="/DSC00213.JPG"
          alt="motionTree"
        />
        <br />
        <motion.img
          variants={firstAnimation}
          custom={2}
          className={styles.start_image}
          src="/IMG_20210510_162148.jpg"
          alt="motionTree"
        />
        <br />
        <motion.img
          variants={firstAnimation}
          custom={3}
          className={styles.start_image}
          src="/Изображение 1391.jpg"
          alt="motionTree"
        />
        <br />
        <motion.img
          variants={firstAnimation}
          custom={4}
          className={styles.start_image}
          src="/DSC00237.JPG"
          alt="motionTree"
        />
        <br />
      </motion.section>
      <section className={styles.second}>
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={secondAnimation}
          className={styles.start_image}
          src="/DSC00213.JPG"
          alt="motionTree"
        />
        <br />
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={secondAnimation}
          className={styles.start_image}
          src="/IMG_20210510_162148.jpg"
          alt="motionTree"
        />
        <br />
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={secondAnimation}
          className={styles.start_image}
          src="/Изображение 1391.jpg"
          alt="motionTree"
        />
        <br />
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={secondAnimation}
          className={styles.start_image}
          src="/DSC00237.JPG"
          alt="motionTree"
        />
        <br />
      </section>{" "}
      <motion.section
        initial="hidden"
        whileInView="visible"
        className={styles.first}
      >
        <motion.img
          variants={thirdAnimation}
          custom={1}
          className={styles.start_image}
          src="/DSC00213.JPG"
          alt="motionTree"
        />
        <br />
        <motion.img
          variants={thirdAnimation}
          custom={2}
          className={styles.start_image}
          src="/IMG_20210510_162148.jpg"
          alt="motionTree"
        />
        <br />
        <motion.img
          variants={thirdAnimation}
          custom={3}
          className={styles.start_image}
          src="/Изображение 1391.jpg"
          alt="motionTree"
        />
        <br />
        <motion.img
          variants={thirdAnimation}
          custom={4}
          className={styles.start_image}
          src="/DSC00237.JPG"
          alt="motionTree"
        />
        <br />
      </motion.section>
    </div>
  );
};

export default MotionTree;
