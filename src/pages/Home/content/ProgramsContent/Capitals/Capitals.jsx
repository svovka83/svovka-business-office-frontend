import React from "react";

import styles from "./Capitals.module.css";

import { Game } from "./Game";
import { Result } from "./Result";

import { questions } from "./Questions";

const Capitals = () => {
  const [step, setStep] = React.useState(0);
  const percent = Math.round((step * 100) / questions.length);
  const [result, setResult] = React.useState(0);

  const nextQuestion = (index) => {
    if (questions[step].correct === index) {
      setResult(result + 1);
    }
    setStep(step + 1);
  };

  return (
    <div className={styles.capitals}>
      {percent === 100 ? (
        <Result result={result} setStep={setStep} setResult={setResult} questions={questions.length} />
      ) : (
        <Game
          question={questions[step]}
          nextQuestion={nextQuestion}
          percent={percent}
        />
      )}
    </div>
  );
};

export default Capitals;
