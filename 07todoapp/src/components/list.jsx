import React from 'react';

function List({ tasks }) {

  return (
    <>
      <div className='flex flex-col gap-10 text-white items-center font-semibold text-2xl'>
        {tasks.map(task => (
            <div className='flex items-center justify-between w-[800px] text-3xl'>
                <p>{task}</p>
                <button className='text-white bg-red-500 px-3 py-2 rounded-lg'>Delete</button>
            </div>
        ))}
      </div>
    </>
  );
}

export default List;
