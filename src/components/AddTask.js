import { React, Fragment } from 'react'
import { useState } from 'react'

export const AddTask = ({onAdd}) => {

    const [task, setTask] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const onSubmit = (e) =>{
        e.preventDefault();

        if(!task|| !day){
            alert('Please enter task and day');
        }else{
            onAdd({task, day, reminder});
            setTask('');
            setDay('');
            setReminder(false);
        }
    }

    return (
        <Fragment>
            <form className='add-from' onSubmit = {onSubmit}>
                <div className='form-control'>
                    <label>Task</label>
                    <input type='text' placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Day & Time </label>
                    <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                </div>
                <input type='submit' value='Save Task' className='btn btn-block' />
            </form>
        </Fragment>

    )

}