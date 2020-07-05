import React, {useState} from 'react';
import './App.css';

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

        <div className="App-TaskCreateForm">
            <input type="text" value={newTaskInput} onChange={newSetTaskName}/>
            <button disabled={addTaskBtnDisabled} onClick={addNewTask}>
                Add Task
            </button>
        </div>
    );
}

export default TaskCreateForm;
