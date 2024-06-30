import { motion } from "framer-motion";

import { useState } from "react";

import styles from "./MotionTwo.module.css";

const menuData = [
  "AnimatePresence",
  "framer_motion_2",
  "framer_motion_3",
  "framer_motion_4",
  "framer_motion_5",
];

const MotionTwo = () => {
  const [activeIndex, setActive] = useState(0);

  return (
    <div className={styles.motionTwo}>
      {menuData.map((item, index) => (
        <MenuItem
          key={item}
          item={item}
          isSelected={activeIndex === index}
          handleClick={() => setActive(index)}
        />
      ))}
    </div>
  );
};

export default MotionTwo;

function MenuItem(props) {
  const { item, isSelected, handleClick } = props;
}
