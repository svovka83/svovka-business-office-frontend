import React from "react";

import styles from "./Timer.module.css";

const Timer = () => {
  let [seconds, setSeconds] = React.useState(0);
  let [minutes, setMinutes] = React.useState(0);
  let [hour, setHour] = React.useState(0);

  const addSeconds = () => {
    if (seconds === 59) {
      setSeconds(0);
    } else {
      setSeconds(seconds + 1);
    }
  };
  const minusSeconds = () => {
    if (seconds === 0) {
      setSeconds(59);
    } else {
      setSeconds(seconds - 1);
    }
  };

  const addMinutes = () => {
    if (minutes === 59) {
      setMinutes(0);
    } else {
      setMinutes(minutes + 1);
    }
  };
  const minusMinutes = () => {
    if (minutes === 0) {
      setMinutes(59);
    } else {
      setMinutes(minutes - 1);
    }
  };

  const addHour = () => {
    if (hour === 99) {
      setHour(0);
    } else {
      setHour(hour + 1);
    }
  };
  const minusHour = () => {
    if (hour === 0) {
      setHour(99);
    } else {
      setHour(hour - 1);
    }
  };

  const startTimer = () => {
    setInterval(() => {
      if (seconds !== 0) {
        seconds = seconds - 1;
        setSeconds(seconds);
      } else if (minutes === 0) {
        seconds = seconds + 59;
        minutes = minutes + 59;
        hour = hour - 1;
        setSeconds(seconds);
        setMinutes(minutes);
        setHour(hour);
      } else if (seconds === 0) {
        seconds = seconds + 59;
        minutes = minutes - 1;
        setSeconds(seconds);
        setMinutes(minutes);
      }
    }, 1000);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  };

  console.log(hour, minutes, seconds);

  return (
    <div>
      <h2>Timer</h2>
      <p className={styles.screen_timer}>
        <span className={styles.setting_timer}>
          <span onClick={addHour}>⬆︎</span>
          <span>{hour}</span>
          <span onClick={minusHour}>⬇︎</span>
        </span>
        :{" "}
        <span className={styles.setting_timer}>
          <span onClick={addMinutes}>⬆︎</span>
          <span>{minutes}</span>
          <span onClick={minusMinutes}>⬇︎</span>
        </span>
        :{" "}
        <span className={styles.setting_timer}>
          <span onClick={addSeconds}>⬆︎</span>
          <span>{seconds}</span>
          <span onClick={minusSeconds}>⬇︎</span>
        </span>
      </p>
      <div>
        <button onClick={startTimer}>Start</button>
        <button>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
