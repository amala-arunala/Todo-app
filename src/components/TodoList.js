import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const TodoList = ({ todoInput }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!value) return;
    todoInput(value);
    setValue("");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <input
          type="text"
          style={{ borderColor: value ? "green" : "" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter Todo text"
        />
      </Form.Group>
      <Button variant="primary mt-3 mb-3" type="submit">
        Add Todo
      </Button>
    </Form>
  );
};
export default TodoList;
