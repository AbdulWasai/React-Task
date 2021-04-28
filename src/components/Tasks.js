import { React, Fragment } from 'react'
import {Task} from './Task'


export const Tasks = ({ task, ondelete, onToggle }) => {
    return (
        <Fragment>
            <div>
                {task.map((tasks) => (
                    <Task key={tasks.id} task= {tasks} ondelete = {ondelete} onToggle = {onToggle}/>
                ))}
            </div>
        </Fragment>
    )
}
