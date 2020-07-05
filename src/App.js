import React, {useState} from 'react';
import './App.css';
import TaskCreateForm from "./TaskCreateForm";
import TaskList from "./TaskList";
import {uuid} from "uuidv4";

const initialList = [
    {id: uuid(), name: 'Take -1', done: false},
    {id: uuid(), name: 'Take -2', done: true},
    {id: uuid(), name: 'Take -3', done: false},
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

    return (
        <div className="App">
            <TaskCreateForm addNewTask={addNewTask}/>
            <TaskList tasks={tasks}
                      onTaskStateChangeToggle={onTaskStateChangeToggle}
                      deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
