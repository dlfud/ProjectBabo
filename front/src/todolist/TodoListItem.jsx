import React from "react";

const TodoListItems = ({ todo }) => {
  const { id, content } = todo;
  return (
    <tr>
      <th>{id}</th>
      <td>{content}</td>
    </tr>
  );
};

export default TodoListItems;
