import { createContext, useState } from 'react';
import './App.css';
import FilterForDate from './components/FilteForDate';
import FormsTask from './components/FormsTask';
import TasksList from './components/TasksLists';

export const TaskContext = createContext({});

function App() {
  
  const [task,setTask] = useState([]);

  return (
    <TaskContext.Provider value={{task,setTask}}>
      <FilterForDate />  
      <section className='main'>
      <TasksList />
      <FormsTask />
      </section>
    </TaskContext.Provider>

  );
}

export default App;
