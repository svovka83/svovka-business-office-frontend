import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import styles from "./MotionNull.module.css";

const item = [
  "AnimatePresence",
  "layoutId",
  "whileInView",
  "Reorder",
];

const listVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: index * 1,
    },
  }),
};

const MotionNull = () => {
  return (
    <div className={styles.motionNull}>
      {item.map((el, index) => (
        <motion.li
          key={el}
          className={styles.li}
          initial={"hidden"}
          animate={"visible"}
          variants={listVariants}
          custom={index}
        >
          <Link to={`/framer_motion/${el}`} className={styles.link}>
            <p>{el}</p>
          </Link>
        </motion.li>
      ))}
    </div>
  );
};

export default MotionNull;
