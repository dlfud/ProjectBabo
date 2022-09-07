import React from "react";
import Calendar from "../calendar/Calendar";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="flex">
      <div className="w-3/5">
      <Calendar />
      </div>
      <div className="w-2/5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>할 일</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <TodoListItem key={index} todo={todo} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
