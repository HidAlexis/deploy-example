import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
    return (
        <main mx-auto>
            <div className='container'>
                <TaskForm />
                <TaskList />
            </div>
        </main>
    )
}

export default App
