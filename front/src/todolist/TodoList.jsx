import React, {useRef} from "react";
import Calendar from "../calendar/Calendar";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import {
  MdOutlineAdd
} from "react-icons/md";

const TodoList = ({ todos, setTodos }) => {
  const nextId = useRef(4);

  return (
    <div className="fixed">
      <div className="mx-10">
        <Calendar todos={todos} />
      </div>
      <div className="mx-10 mt-10 overscroll-y-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>일정</th>
              <th>수정</th>
              <th>삭제</th>
              <th>createDate</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <TodoListItem key={index} todo={todo} />
            ))}
          </tbody>
        </table>
        <div className="float-right">
          <label htmlFor="my-modal-5" className="btn modal-button">
            <MdOutlineAdd />
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <TodoInput todos={todos} setTodos={setTodos} nextId={nextId}/>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
