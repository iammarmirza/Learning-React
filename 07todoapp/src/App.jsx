import { useState, useRef, useEffect, createElement } from 'react'
import './App.css'
import List from './components/list'

function App() {
  const [task, setTask] = useState('')
  const inputBox = useRef(null)
  
  const addTask = () => {
    if(inputBox.current.value !== ''){
      setTask(inputBox.current.value)
    }
  }

  return (
    <>
      <div className='flex flex-col h-screen w-screen items-center p-6 bg-[#22092C] gap-12'>
        <h1 className='font-semibold text-white text-8xl'>To Do List</h1>
        <div className='flex gap-3'>
          <input ref={inputBox} className='w-[600px] h-16 rounded-lg px-5 text-2xl font-semibold' placeholder='Enter your task here'/>
          <button onClick={addTask} className='text-white bg-green-700 text-2xl font-semibold px-5 rounded-lg'>Add Task</button>
        </div>
        <List text={task}/>
      </div>
    </>
  )
}

export default App
