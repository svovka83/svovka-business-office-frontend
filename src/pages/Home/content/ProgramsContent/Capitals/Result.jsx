import React from "react";

import styles from "./Capitals.module.css";
import { Button, Paper } from "@mui/material";

export function Result({questions, result, setStep, setResult }) {
  const startAgain = () => {
    setStep(0);
    setResult(0);
  };

  return (
    <div className={styles.game}>
      <Paper elevation={5}>
        <div className={styles.content}>
          <img
            className={styles.image}
            src="/IMG_20210510_162148.jpg"
            alt="my daughter"
          />
          <h2>Your result is {result} from {questions}</h2>
          <Button onClick={startAgain} variant="contained" color="success">
            Try again
          </Button>
        </div>
      </Paper>
    </div>
  );
}
