import React from "react";
import "../App.css";
import { ITodo } from "../interface";

type TodoProps = {
  todos: ITodo[];
  onDelete: Function;
};

const Todo: React.FC<TodoProps> = ({ todos, onDelete }) => {
  return (
    <ul className="collection">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="collection-item todo"
          onClick={() => onDelete(todo.id)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default Todo;
