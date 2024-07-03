import React from "react";

import styles from "./Capitals.module.css";
import { Paper } from "@mui/material";
import { motion } from "framer-motion";

export function Game({ question, nextQuestion, percent }) {
  const gameAnimate = {
    hidden: {
      x: 100,
      opacity: 0.2,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={gameAnimate}
      className={styles.game}
    >
      <Paper elevation={5}>
        <div className={styles.content}>
          <h2>{question.title}</h2>
          <div style={{ width: `${percent}%` }} className={styles.progress}>
            {percent}%
          </div>
          <ul className={styles.question}>
            {question.variants.map((qv, index) => (
              <li key={qv} onClick={() => nextQuestion(index)}>
                {qv}
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </motion.div>
  );
}
