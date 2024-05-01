import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    // Function to calculate completed tasks
    let count = 0;
    todos.map(todo => {
      if(todo.checked) count++
    })
    return count
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
