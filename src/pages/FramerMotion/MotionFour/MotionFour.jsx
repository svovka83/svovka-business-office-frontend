import React from "react";

import styles from "./MotionFour.module.css";

const MotionFour = () => {
  const [title, setTitle] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleTodo = ({ target: { value } }) => setTitle(value);
  const addTodo = () => {
    setTodos([...todos, { id: 1, title, isDone: false }]);
    setTitle("");
  };

  console.log(title, todos);

  return (
    <div className={styles.motionFour}>
      <input onChange={handleTodo} value={title} />{" "}
      <button onClick={addTodo}>add Todo</button>
        <Todo todos={todos} />
    </div>
  );
};

export default MotionFour;

function Todo({ todos }) {
  return (
    <div className={styles.todos}>
      {todos.map((t) => (
        <p key={t.id}>
          {t.id}
          {t.title}
          <input type="checkbox" checked={t.isDone} />
        </p>
      ))}
    </div>
  );
}
