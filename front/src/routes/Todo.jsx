import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Calendar from "../calendar/Calendar";

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
        <div className="mx-10">
          <Calendar todos={todos} />
        </div>
      </div>
    </Layout>
  );
};

export default Todo;
