import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";
import { Checkboxx } from "../checkbox/checkbox";
import { Typography } from "@mui/material";

export const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    //Function to delete todos
    setTodos(prev => prev.filter(prevTodo => prevTodo.id !== id))
  };

  const toggleCheck = (id) => {
    //Function to toggle todos
   setTodos(prev => prev.map(prevTodo => prevTodo.id === id ? {...prevTodo, checked: !prevTodo.checked}: prevTodo))
  };
  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkboxx
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <Typography className="no-todos">Looks like you&apos;re absolutely free today!</Typography>
      )}
    </div>
  );
};
