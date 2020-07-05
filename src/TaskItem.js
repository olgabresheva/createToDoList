import React, {useState} from 'react';
import './App.css';

function TaskItem(props) {

    const [editMode, setEditMode] = useState(false);
    const [taskEdit, setTaskEdit] = useState({});

    const taskNameEdit = (e) => {
        setEditMode(true);
        setTaskEdit({...taskEdit, name: e.target.value})
    }

    const taskSave = () => {
        props.taskNameEdit(taskEdit);

    }

    return (
        <div className="App-TaskItem">
            {editMode
                ? <>
                    <input type="text" value={props.item.name} onChange={taskNameEdit}/>
                    <button onClick={taskSave}>Save</button>
                </>
                : <span onClick={taskNameEdit}>{props.item.name}</span>
            }


            <button onClick={() => props.onTaskStateChangeToggle(props.item.id)}>
                {props.item.done ? 'Done' : 'To Be Done'}
            </button>
            <button onClick={() => props.deleteTask(props.item.id)}>Delete</button>
        </div>
    );
}

export default TaskItem;
