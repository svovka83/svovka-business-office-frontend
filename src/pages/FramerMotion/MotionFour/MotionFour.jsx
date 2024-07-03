import React from "react";

import styles from "./MotionFour.module.css";
import { Reorder, AnimatePresence } from "framer-motion";

const startTodos = [
  { id: 100, title: "First", isDone: false },
  { id: 200, title: "Second", isDone: true },
  { id: 300, title: "Third", isDone: false },
  { id: 400, title: "Fourth", isDone: true },
];

const MotionFour = () => {
  const [title, setTitle] = React.useState("");
  const [todos, setTodos] = React.useState(startTodos);

  const handleTodo = ({ target: { value } }) => setTitle(value);
  const addTodo = () => {
    setTodos([
      ...todos,
      { id: Math.round(Math.random() * 1000), title, isDone: false },
    ]);
    setTitle("");
  };

  return (
    <div className={styles.motionFour}>
      <input onChange={handleTodo} value={title} />{" "}
      <button onClick={addTodo}>add Todo</button>
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default MotionFour;

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    height: 0,
  },
};

function Todo({ todos, setTodos }) {
  return (
    <Reorder.Group as="ol" axis="y" values={todos} onReorder={setTodos}>
      <AnimatePresence>
        {todos.map((t) => (
          <Reorder.Item
            value={t}
            whileDrag={{ scale: 1.1 }}
            {...variants}
            className={styles.todos}
            key={t.id}
          >
            <span>{t.id}</span>
            <span>{t.title}</span>
            <input type="checkbox" checked={t.isDone} />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
}
