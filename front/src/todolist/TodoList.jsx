import React, { useRef, useState } from "react";
import Calendar from "../calendar/Calendar";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import "./TodoList.css";
import { MdOutlineAdd } from "react-icons/md";
import axios from "axios";

const TodoList = ({
  todos,
  setTodos,
  active,
  setActive,
  selectedTodo,
  setSeletedTodo,
}) => {
  const nextId = useRef(4);
  const [content, setContent] = useState("");

  return (
    <div className="fixed">
      <div className="mx-10">
        <Calendar todos={todos} />
      </div>

      <div className="mx-10 mt-10 overscroll-y-auto">
        <div className="todoListHieght overflow-auto">
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
                <TodoListItem
                  key={index}
                  todo={todo}
                  setTodos={setTodos}
                  active={active}
                  setActive={setActive}
                  selectedTodo={selectedTodo}
                  setSeletedTodo={setSeletedTodo}
                  setContent={setContent}
                />
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="checkbox"
              id="my-modal-5"
              className="modal-toggle"
              checked={active}
              onChange={() => {}}
            />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div
                  className="flex justify-center items-center w-7 p-1 ml-auto cursor-pointer"
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  ✕
                </div>
                <div>
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const data = await axios({
                        url: `http://localhost:8085/todo/edit/${selectedTodo.id}`,
                        method: "PATCH",
                        data: { content },
                      });
                      setTodos(data.data);
                      setContent("");
                      setActive(false);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="수정할 내용을 입력해주세요"
                      className="border rounded-md border-gray-500 w-full"
                      value={content}
                      onChange={(e) => {
                        setContent(e.target.value);
                      }}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
