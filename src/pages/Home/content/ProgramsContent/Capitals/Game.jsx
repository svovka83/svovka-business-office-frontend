import React from "react";

import styles from "./Capitals.module.css";
import { Paper } from "@mui/material";

export function Game({ question, nextQuestion, percent }) {
  return (
    <div className={styles.game}>
      <Paper elevation={5}>
        <div className={styles.content}>
          <h2>{question.title}</h2>
          <div style={{ width: `${percent}%` }} className={styles.progress}>
            {percent}%
          </div>
          <ul className={styles.question}>
            {question.variants.map((qv, index) => (
              <li key={index} onClick={() => nextQuestion(index)}>
                {qv}
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </div>
  );
}