import { useState, useRef } from 'react';
import './App.css';
import List from './components/list';

function App() {
  const [tasks, setTasks] = useState([]);
  const inputBox = useRef(null);
  
  const addTask = (e) => {
    const text = inputBox.current.value;
    if (text !== '') {
      setTasks([...tasks, text]);
      inputBox.current.value = ''; 
    }
  };

  return (
    <>
      <div className='flex flex-col min-h-screen w-screen p-6 bg-[#22092C] gap-12'>
        <h1 className='font-semibold text-white text-8xl text-center'>To Do List</h1>
        <div className='flex gap-3 self-center'>
          <input
            ref={inputBox}
            className='w-[600px] h-16 rounded-lg px-5 text-2xl font-semibold'
            placeholder='Enter your task here'
          />
          <button onClick={addTask} className='text-white bg-green-700 text-2xl font-semibold px-5 rounded-lg'>
            Add Task
          </button>
        </div>
        <List tasks={tasks} />
      </div>
    </>
  );
}

export default App;
