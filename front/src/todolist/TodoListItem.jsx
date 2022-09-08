import React from "react";
import { MdOutlineEdit, MdRemoveCircleOutline } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLight, faTrash } from "@fortawesome/free-solid-svg-icons";


const TodoListItems = ({ todo }) => {
  const { content, createDate } = todo;
  return (
    <tr>
      <td></td>
      <td>{content}</td>
      <td><MdOutlineEdit/></td>
      <td><FontAwesomeIcon icon={faTrash} className="faLight ml-1" /></td>
      <td>{createDate}</td>
    </tr>
  );
};

export default TodoListItems;
