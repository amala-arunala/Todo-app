import React, { useState } from "react";

import "./App.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoValidate from "./components/TodoValidate";

function TodoApp() {
  const [input, setInput] = useState([]);

  const todoInput = (text) => {
    const newInput = {
      text,
      isDone: false,
    };
    const newTodos = [...input, newInput];
    setInput(newTodos);
  };

  const todoCheck = (index) => {
    const newTodos = [...input];
    newTodos[index].isDone = !newTodos[index].isDone;
    setInput(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...input];
    newTodos.splice(index, 1);
    setInput(newTodos);
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="text-center mb-4">Todos List</h1>
        <TodoList todoInput={todoInput} />
        <div>
          {input
            .map((todo, index) => (
              <Card>
                <Card.Body>
                  <TodoValidate
                    key={index}
                    index={index}
                    todo={todo}
                    todoCheck={todoCheck}
                    deleteTodo={deleteTodo}
                  />
                </Card.Body>
              </Card>
            ))
            .reverse()}
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
