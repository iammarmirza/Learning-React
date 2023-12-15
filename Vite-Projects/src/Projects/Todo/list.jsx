import React, {useState} from 'react';


function Lists({ tasks, deleteTask }) {
    
  return (
    <>
        {tasks.map((task, index) => (
            <SingleTask key={index} task={task} deleteTask={deleteTask}/>
        ))}
    </>
  );
}

function SingleTask ({task, deleteTask}) {
    const [isStriked, setIsStriked] = useState(false)

    const toggleStrike = () => {
        setIsStriked((prev) => !prev)
    }

    return (
        <div className='flex items-center justify-between w-[800px] text-3xl text-white self-center'>
                <p onClick={toggleStrike} className={isStriked ? 'line-through' : ''}>{task}</p>
                <button onClick={() => deleteTask(task)} className='text-white bg-red-500 px-3 py-2 rounded-lg'>Delete</button>
        </div>
    )
}

export default Lists;
