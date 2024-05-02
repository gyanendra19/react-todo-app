import * as React from "react";
import "./todo-form.scss";
import { Button, TextField } from "@mui/material";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    //Function to add todos
    setTodos(prev => [{id:'', label: task, checked: false}, ...prev])  
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <TextField sx={{padding: '0'}} id="outlined-basic" label="Enter new task" variant="outlined" value={task} onChange={(e) => setTask(e.target.value)} onKeyUp={handleKeyUp}/>

      <Button sx={{bgcolor:'blue', color:'white', '&:hover': {backgroundColor: 'darkblue'}, padding: '10px', marginLeft: '12px', height:'40px'}} type="button" onClick={handleAddTodo}>
        Add task
      </Button>
    </div>
  );
};
