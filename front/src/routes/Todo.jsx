import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
// import TodoList from "../todolist/TodoList";
import Calendar from "../calendar/Calendar";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

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
      <div className="fixed">
        <div className="mx-10">
          <Calendar todos={todos} />
        </div>
        {/* 
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            active={active}
            setActive={setActive}
            selectedTodo={selectedTodo}
            setSelectedTodo={setSelectedTodo}
          />
        </div> */}
      </div>
    </Layout>
  );
};

export default Todo;
