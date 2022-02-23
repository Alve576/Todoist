import { Typography, Button, Paper } from '@mui/material';
import { ITask } from './../Interfaces';

interface Props {
    task: ITask;
    completeTask(taskNameDlt:string):void;
}

const TodoTask = ({task,completeTask}:Props) => {
  return (
    <Paper sx={{display:"flex",justifyContent:"space-between",marginTop:"20px",padding:"10px"}}>
        <Typography variant='h4'>
            {task.taskName}
        </Typography>

        <Typography variant='h4'>
            {task.deadline}
        </Typography>

        <Button variant='outlined' onClick={()=>completeTask(task.taskName)}>X</Button>
    </Paper>
  )
}

export default TodoTask