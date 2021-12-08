import React from "react";

import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

function TodoValidate({ todo, index, todoCheck, deleteTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button
          variant={todo.isDone ? "outline-danger" : "outline-success"}
          onClick={() => todoCheck(index)}
        >
          {todo.isDone ? "✕" : "✓"}
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => deleteTodo(index)}>
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
}

export default TodoValidate;
