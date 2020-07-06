import React, {useState} from 'react';
import './App.css';

function TaskItem(props) {

    const [editMode, setEditMode] = useState(false);
    const [taskEditNameInput, setTaskEditNameInput] = useState(props.item.name);

    const onTaskSave = () => {
        props.taskSave(props.item.id, taskEditNameInput);
        setEditMode(false);
    }


    return (
        <div className="App-TaskItem">

            {editMode
                ? <>
                    <input type="text" value={taskEditNameInput} onChange={e => setTaskEditNameInput(e.target.value)}/>
                    <button onClick={onTaskSave}>Save</button>
                </>
                : <span onClick={() => setEditMode(true)}>{props.item.name}</span>

            }

            <button onClick={() => props.onTaskStateChangeToggle(props.item.id)}>
                {props.item.done ? 'Done' : 'To Be Done'}
            </button>
            <button onClick={() => props.deleteTask(props.item.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
