import React, {useState} from 'react';
import './App.css';

function TaskItem(props) {

    const [editMode, setEditMode] = useState(false);
    // const [taskEdit, setTaskEdit] = useState({});
    const [taskNameEditValue, setTaskNameEditValue] = useState(props.item.name);

    const onTaskEdit = () => {
        setEditMode(true);
    }

    const onTaskNameEdit = (e) => {
        setTaskNameEditValue(e.target.value);
    }

    const onTaskSave = () => {
        props.taskSave(props.item.id, taskNameEditValue);
        setEditMode(false);
    }

    return (
        <div className="App-TaskItem">
            {editMode
                ? <>
                    <input type="text" value={taskNameEditValue} onChange={onTaskNameEdit}/>
                    <button onClick={onTaskSave}>Save</button>
                </>
                : <span onClick={onTaskEdit}>{props.item.name}</span>
            }


            <button onClick={() => props.onTaskStateChangeToggle(props.item.id)}>
                {props.item.done ? 'Done' : 'To Be Done'}
            </button>
            <button onClick={() => props.deleteTask(props.item.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
