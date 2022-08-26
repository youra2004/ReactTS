import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Header from "./components/header";
import Todo from "./components/todo";
import { ITodo } from "./interface";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  console.log(todos);
  return (
    <div>
      <Header />
      <Form onAdd={addHandler} />
      <Todo todos={todos} onDelete={deleteHandler} />
    </div>
  );
};

export default App;
