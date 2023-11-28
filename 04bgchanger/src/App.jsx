import { useState } from 'react'

function App() {
  const [color, setColor] = useState('Olive')
  return (
    <div className='h-screen w-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
        <button onClick={() => setColor('Red')} className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor : 'red'}}>Red</button>
        <button onClick={() => setColor('Green')} className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor : 'green'}}>Green</button>
        <button onClick={() => setColor('Purple')} className="outline-none px-4 py-1 text-white rounded-full" style={{backgroundColor : 'purple'}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
