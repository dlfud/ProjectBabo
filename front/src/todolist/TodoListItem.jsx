import React from "react";
import { MdOutlineEdit, MdRemoveCircleOutline } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLight, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


const TodoListItems = ({ todo, setTodos }) => {
  const { id, content, createDate } = todo;
  return (
    <tr>
      <td></td>
      <td>{content}</td>
      <td className="edit">
        <label
          htmlFor="my-modal-5"
          className="modal-button cursor-pointer"
          // onClick={() => {
          //   setSelectedTodo(todo);
          //   setContent(content);
          //   setActive(true);
          // }}
        >
          <MdOutlineEdit />
        </label>
      </td>
      <td className="remove">
        <div onClick={async () => {
          const data = await axios({
            url: `http://localhost:8085/todo/delete/${id}`,
            method: "DELETE"
          });
          setTodos(data.data);
        }}>
          <FontAwesomeIcon icon={faTrash} className="faLight ml-1" />
        </div>
      </td>

      <td>{createDate}</td>
    </tr>
  );
};

export default TodoListItems;
