import { useState } from 'react'


function App() {
  const [count, setCount] = useState(1)
  const images = ['./src/images/one.png', './src/images/two.png', './src/images/three.png', './src/images/four.png', './src/images/five.png', './src/images/six.png']
  
  function generateRandomNumber () {
    setCount(Math.floor(Math.random() * 6) + 1)
  }

  return (
      <div className='flex mt-28 gap-12 justify-center items-center'>
        <img className='h-40' src={images[count - 1]}/>
        <button onClick={generateRandomNumber} className='bg-purple-700 p-4 rounded-xl text-white font-semibold'>Roll The Dice</button>
      </div>
  )
}

export default App
