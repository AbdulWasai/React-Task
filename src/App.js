import { React, Fragment } from 'react'
import { useState } from 'react'
import { Header2 } from './components/Header2'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'
 

export function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: '1',
      task: 'wakeup early',
      day: 'April 11th at 7:00 AM',
      reminder: false
    },
    {
      id: '2',
      task: 'get ready as fast as can',
      day: 'April 11th at 8:00 AM',
      reminder: false
    },
    {
      id: '3',
      task: 'go to work quickly as can',
      day: 'April 11th at 8:30 AM',
      reminder: false
    }
  ])

  //Show Add task form

  const showform = () =>{
    setShowAddTask(!showAddTask);
  }

  //Add tasks

  const addTask = (tasknew) =>{
    const id = Math.floor(Math.random()*10000) +1;
    const newTask = {id, ...tasknew};
    setTasks([...tasks, newTask]);
  }

  //Delete a Task function

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>
      task.id !== id
    ))
    //console.log('Task ' + id + ' is Deleted')
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id == id ?
      {...task, reminder: !task.reminder} :
      task
    ))
    //console.log('Task ' + id + ' is Double Clicked');
  }
  return (
    <Fragment>
      <div className="container">
        <Header2 showform = {showform} showAddTask = {showAddTask}/>
        {showAddTask &&<AddTask onAdd = {addTask}/>}
        {tasks.length > 0 ?

          <Tasks task={tasks} ondelete={deleteTask} onToggle={toggleReminder} /> :

          <h4 className='emptydata'>
            No Task Found
          </h4>}
      </div>
    </Fragment>
  );
}


//Ternary operator
//const var = true;
//<h2>{c ? 'Yes' : 'No'}</h2>