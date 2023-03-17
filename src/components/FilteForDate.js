import { useContext, useState } from "react";
import { TaskContext } from "../App";
import '../styles/filtefordate.style.css';

const FilterForDate = () => {

    const {task,setTask} = useContext(TaskContext); 

    const [date,setDate] = useState('');
    const handleDate = (e) => {
      e.preventDefault();
      const newDate = task.map(task => {
        if (task.dateTask > date) {
          return {...task, show: false}
        }else{
          return {...task, show: true};
        }
      });
      setTask(newDate);
    }
    return (
      <form onSubmit={handleDate} className="search-date">
        <label htmlFor="date" className="search-label">Date Expired</label>
        <input type="date" className="search-input" value={date} onChange={e => setDate(e.target.value)} />
        <input type="submit" value={'Search'} className="search-button" />
      </form>
    )
  }

  export default FilterForDate;