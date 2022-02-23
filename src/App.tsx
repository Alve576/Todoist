import React,{ChangeEvent, FC, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask} from './Interfaces'
import {Box,Button,Container,TextField, Typography} from '@mui/material'
import Appbar from './Components/Appbar'

const App:FC = () => {

  const [task,setTask] = useState<string>("");
  const [deadline,setDeadline] = useState<number>(0);
  const [todos,setTodo] = useState<ITask[]>([]);
  
  const handleChange =(event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name == 'task'){
      setTask(event.target.value)
    }
    setDeadline(Number(event.target.value))
  };


  const addTask = () :  void => {
    const newTask  = {taskName : task, deadline : deadline};
    setTodo([...todos,newTask]);
    setTask("");
    setDeadline(0)
  };

  const completeTask = (taskNameDlt : string):void => { 
    setTodo(todos.filter((task)=>{
      return task.taskName !== taskNameDlt;
    }))
  }
  return (
    <div>
      <Appbar/>
       <Container sx={{marginTop :'20px'}}>
         <Typography variant='h2' >Write Your Daily Tasks.</Typography>
      <TextField
        type='text' 
        value={task}
        name='task' 
        onChange={handleChange}
        label="wirte todo here"
        fullWidth
        required
        sx={{marginTop : '20px'}}
      /><br/>
      <TextField
        type='number' 
        value={deadline} 
        name='deadline' 
        onChange={handleChange}
        label="deadline"
        fullWidth
        sx={{marginTop : '20px'}}
        required
      /><br/>
      <Button sx={{marginTop : '10px'}}variant="outlined" onClick={addTask}>Add Task</Button>    
      
    </Container>
      <Container>
      {
          todos.map((task :ITask, key : number)=> {
            return <TodoTask key={key} task={task} completeTask={completeTask}/>
          })
        }  
      </Container>
    </div>
  );
};

export default App;
