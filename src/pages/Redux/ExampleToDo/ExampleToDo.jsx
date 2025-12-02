import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../../../components/TodoCard";

import { getTodos } from "../../../store/todo/selectors";
import { getTodosIsLoading } from "../../../store/todo/selectors";

import todoActions from "../../../store/todo/actions";

import styles from "./ExampleToDo.module.scss";

function ExampleToDo() {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux store:
  const todos = useSelector(getTodos);
  const isLoading = useSelector(getTodosIsLoading);

  useEffect(() => {
    dispatch(todoActions.getList());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading todos...</div>
      ) : (
        <div className={styles.wrapper}>
          {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExampleToDo;
