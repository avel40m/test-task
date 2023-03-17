import { useContext, useState } from "react";
import { TaskContext } from "../App";
import '../styles/formstask.style.css'
import Swal from "sweetalert2";

const FormsTask = () => {
    const {task,setTask} = useContext(TaskContext);

    const [inputs,setInput] = useState({})

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(inputs.title === '' || inputs.title === undefined){
        Swal.fire('Title is required')
        return;
      }
      if(inputs.description === '' || inputs.description === undefined){
        Swal.fire('Description is required');
        return;
      }
      if (inputs.dateTask === undefined) {
        Swal.fire('Date Task is required');
        return;
      }
      if (new Date().getTime() > new Date(inputs.dateTask).getTime()) {
        Swal.fire(`La fecha que ingreso ${inputs.dateTask} debería ser mayor a la fecha actual`);
        return
      }
      inputs.id = task.length;
      inputs.completed = false;
      inputs.show = true;
      setTask([...task,inputs]);
    }

    return (
      <form onSubmit={handleSubmit} className="form-add-task">
        <input 
        type="text" 
        placeholder='Title'
        name="title"
        value={inputs.title}
        onChange={handleChange} />
        <textarea 
        placeholder='Description' 
        name="description"
        cols="30" 
        rows="10"
        value={inputs.description}
        onChange={handleChange}
        ></textarea>
        <input 
        type="date" 
        placeholder='Date expiration' 
        name="dateTask"
        value={inputs.dateTask}
        onChange={handleChange}
        />
        <input type="submit" value='Save Task' className="save-task" />
      </form>
    )
  }

  export default FormsTask;