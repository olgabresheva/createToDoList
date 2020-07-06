import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskCreateForm(props) {

    const [newTaskInput, setNewTaskInput] = useState('')
    const [addTaskBtnDisabled, setAddTaskBtnDisabled] = useState(true)

    const newSetTaskName = (e) => {
        setNewTaskInput(e.target.value);
        (newTaskInput.length > 3) ? setAddTaskBtnDisabled(false) : setAddTaskBtnDisabled(true);
    }

    const addNewTask = () => {
        props.addNewTask(newTaskInput);
        setNewTaskInput('');
        setAddTaskBtnDisabled(true);
    }

    return (

        <div>
            <label htmlFor="exampleFormControlInput1"><strong>Your To Do List</strong></label><br/>
            <form className="form-inline">
                <input className="form-control" placeholder="enter your task" type="text" value={newTaskInput}
                       onChange={newSetTaskName}/>
                <button type="submit" className="btn btn-info" disabled={addTaskBtnDisabled} onClick={addNewTask}>
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default TaskCreateForm;
