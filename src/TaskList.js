import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskItem from "./TaskItem";

function TaskList(props) {
    return (
        <div className="App-TaskList">
            <ul>
                {props.tasks.map(el => <li key={el.id}>
                    <TaskItem item={el}
                              onTaskStateChangeToggle={props.onTaskStateChangeToggle}
                              deleteTask={props.deleteTask}
                              taskSave={props.taskSave}
                    />
                </li>)}
            </ul>

        </div>
    );
}

export default TaskList;
