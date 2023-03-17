import { useContext, useState } from "react";
import { TaskContext } from "../App";
import TaskComplete from "./TaskComplete";
import '../styles/tasklist.style.css';

const TasksList = () => {
  const { task, setTask } = useContext(TaskContext);

  const [order,setOrder] = useState(true);
  
  const handleCompleted = (id) => {
    const updateTask = task.map((task) => {
      if (task.id === id) {
        return task.completed === false
          ? { ...task, completed: true }
          : { ...task, completed: false };
      } else {
        return task;
      }
    });
    setTask(updateTask);
  };

  const handleOrder = () => {
    let arreglo

    if (order) {
    arreglo = task.reverse((a,b) => new Date(a.dateTask).getTime() - new Date(b.dateTask).getTime());
    setOrder(false)
    } else {
    arreglo = task.reverse((a,b) => new Date(a.dateTask).getTime() + new Date(b.dateTask).getTime());      
    setOrder(true)
    } 
    setTask(arreglo);
  }

  if (task.length === 0) {
    return <h1>Task empty</h1>;
  }
  return (
    <>
      <table className="table">
        <tr>
          <th>Completed</th>
          <th>Title</th>
          <th>Description</th>
          <th onClick={handleOrder}>Date expired</th>
          <th>status</th>
        </tr>
        {task &&
          task.map((tasks, index) => (
          tasks.show ?  <tr key={index}>
           <td>
             <input
               type="checkbox"
               onClick={(e) => handleCompleted(tasks.id)}
             />
           </td>
           <td>{tasks.title}</td>
           <td>{tasks.description}</td>
           <td>{tasks.dateTask}</td>
           <TaskComplete completed={tasks.completed} />
         </tr>
         : ('')
          ))}
      </table>
    </>
  );
};

export default TasksList;
