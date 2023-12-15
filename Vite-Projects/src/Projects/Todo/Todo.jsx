import React, { useState, useRef } from 'react';
import Lists from './list';


function Todo () {
  const [tasks, setTasks] = useState([]);
  const inputBox = useRef(null);
  
  const addTask = () => {
    const text = inputBox.current.value;
    if (text !== '') {
      setTasks((prevTask) => [...prevTask, text]);
      inputBox.current.value = ''; 
    }
  };

  const deleteTask = (text) => {
    setTasks((prevTask) => prevTask.filter((task) => task !== text));
  }

  return (
    <>
      <div className='flex flex-col min-h-screen w-screen p-6 bg-[#22092C] gap-12'>
        <h1 className='font-semibold text-white text-8xl text-center'>To Do List</h1>
        <div className='flex gap-3 self-center text-3xl'>
          <input
            ref={inputBox}
            className='w-[600px] h-16 rounded-lg px-5 font-semibold'
            placeholder='Enter your task here'
            onKeyDown={(e) => {
              if (e.key === 'Enter') addTask()
            }}
          />
          <button onClick={addTask} className='text-white bg-green-700 font-semibold px-5 rounded-lg'>
            Add Task
          </button>
        </div>
        <Lists tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default Todo