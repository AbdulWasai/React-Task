import { React, Fragment } from 'react'
import { FaTimes } from 'react-icons/fa'


export const Task = ({ task, ondelete, onToggle }) => {
    return (
        <Fragment>
            <div className={`task ${task.reminder ?
                'reminder' : ''}`}
                onDoubleClick={() => onToggle(task.id)}>

                <h3>{task.task} <FaTimes style={{
                    color: 'red',
                    cursor: 'pointer'
                }}
                    onClick={() => { ondelete(task.id) }} />
                </h3>
                <p>{task.day}</p>
            </div>
        </Fragment>
    )
}