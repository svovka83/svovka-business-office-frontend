import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./CircularProgress.module.css";

export default function Circular() {
  return (
    <div className={styles.preloader}>
      <CircularProgress size="100px" />
    </div>
  );
}
