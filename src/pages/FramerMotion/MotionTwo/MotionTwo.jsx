import { motion } from "framer-motion";

import { useState } from "react";

import styles from "./MotionTwo.module.css";

const menuData = ["React", "Express", "MongoDB", "axios"];

const MotionTwo = () => {
  const [activeIndex, setActive] = useState(0);

  return (
    <div className={styles.motionTwo}>
      <div className={styles.MenuItem}>
        {menuData.map((item, index) => (
          <MenuItem
            key={item}
            item={item}
            isSelected={activeIndex === index}
            handleClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MotionTwo;

function MenuItem(props) {
  const { item, isSelected, handleClick } = props;

  return (
    <motion.div
      onClick={handleClick}
      className={styles.item}
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "rgb(255, 0, 0)" : "#000" }}
    >
      {item}
      {isSelected && <ActiveLine />}
    </motion.div>
  );
}

function ActiveLine() {
  return <motion.div layoutId="activeItem" className={styles.line} />;
}
