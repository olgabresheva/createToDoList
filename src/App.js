import React, {useState} from 'react';
import './App.css';
import TaskCreateForm from "./TaskCreateForm";
import TaskList from "./TaskList";
import {uuid} from "uuidv4";

const initialList = [
    {id: uuid(), name: 'Clean dishes', done: false},
    {id: uuid(), name: 'Start Kanban board', done: true},
    {id: uuid(), name: 'Sleep', done: false},
]

function App() {

    const [tasks, setTasks] = useState(initialList);

    const addNewTask = (newTaskName) => {
        const updatedTasksList = [...tasks];
        updatedTasksList.push({id: uuid(), name: newTaskName, done: false});
        setTasks(updatedTasksList);
    };

    const onTaskStateChangeToggle = (id) => {
        const updatedTaskList = tasks.map(el => {
            if (el.id === id) return ({...el, done: !el.done})
            else return el
        });
        setTasks(updatedTaskList);
    }

    const deleteTask = (id) => {
        const updatedTaskList = tasks.filter(el => el.id !== id)
        setTasks(updatedTaskList);
    }

    const taskSave = (id, newTaskName) => {
        const updatedTaskList = tasks.map(el => {
            if (el.id === id) return ({...el, name: newTaskName})
            else return el
        })
        setTasks(updatedTaskList);
    }


    return (
        <div className="container">
            <TaskCreateForm addNewTask={addNewTask}/>
            <hr/>
            <TaskList tasks={tasks}
                      onTaskStateChangeToggle={onTaskStateChangeToggle}
                      deleteTask={deleteTask}
                      taskSave={taskSave}

            />
        </div>
    );
}

export default App;
