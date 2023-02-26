import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            description,
        })

        const cleanForm = document.getElementById('form').reset()
        setDescription('')
        setTitle('')
    }

    return (
        <div className='max-w-md mx-auto bg-gray-800 mt-5 rounded-xl'>
            <form onSubmit={handleSubmit} id='form' className='p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>
                    Crear tu Tarea
                </h1>
                <input
                    type='text'
                    placeholder='Escribe tu tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    className='bg-slate-300 p-3 w-full mb-2'
                />
                <textarea
                    placeholder='Escribe la descripcion de la tarea'
                    className='bg-slate-300 p-3 w-full mb-2'
                    onChange={(e) => setDescription(e.target.value)}></textarea>

                <button className='bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-300'>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm
