import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import TodoList from "../todolist/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = async () => {
      const todos = await axios({
        url: "http://localhost:8085/todo/list",
        method: "GET",
      });
      console.log("todos", todos);
      setTodos(todos.data);
    };
    data();
  }, []);

  return (
    <Layout>
      <div>
        <TodoList todos={todos} />
      </div>
    </Layout>
  );
};

export default Todo;
