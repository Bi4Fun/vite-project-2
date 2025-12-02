import { useState } from "react";

import styles from "./TodoCard.module.scss";
import clsx from "clsx";

function TodoCard({ todo }) {
  const [completed, setCompleted] = useState(todo.completed);

  const handleCheckboxChange = (event) => {
    setCompleted(event.target.checked);
  };

  if (!todo) return null;
  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.checkboxContainer, {
          [styles.isCompleted]: completed,
        })}
      >
        <header className={styles.header}>{todo.title}</header>
        <label htmlFor={todo.id} className={styles.checkboxLabel}>
          {completed ? "done" : "not yet"}
        </label>
        <input
          id={todo.id}
          type="checkbox"
          className={styles.checkbox}
          onChange={handleCheckboxChange}
          checked={completed}
        />
      </div>
    </div>
  );
}

export default TodoCard;
