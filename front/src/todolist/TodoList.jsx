import React from "react";

const TodoList = (todo) => {
  console.log("todo", todo);
  const { id, content } = todo;
  return (
    <div>
      id : {id}, content : {content}
    </div>
  );
};

export default TodoList;
