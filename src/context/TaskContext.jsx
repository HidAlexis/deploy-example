import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks.js'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                title: task.title,
                description: task.description,
                id: tasks.length,
            },
        ])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId))
    }
    return (
        <>
            <TaskContext.Provider
                value={{
                    tasks,
                    deleteTask,
                    createTask,
                }}>
                {props.children}
            </TaskContext.Provider>
        </>
    )
}
