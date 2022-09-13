import React from "react";
import Calendar from "../calendar/Calendar";
import TodoListItem from "./TodoListItem";
import {
  MdMenu,
  MdModeEdit,
  MdPlusOne,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";

const TodoList = ({ todos }) => {
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
        <div className="dropdown dropdown-left dropdown-end float-right">
          <label tabIndex={0} className="btn m-1">
            <MdMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-horizontal dropdown-content menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <a>
                <MdOutlineDriveFileRenameOutline />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
