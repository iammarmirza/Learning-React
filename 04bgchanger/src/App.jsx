import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('bg-blue-400')

  function changeBg (newColor) {
    setColor(newColor)
  }

  return (
    <div className={`h-screen w-screen ${color}`}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <Button colorName='Red' colorClass='bg-red-500' onClick={changeBg}/>
          <Button colorName='Pink' colorClass='bg-pink-500' onClick={changeBg}/>
          <Button colorName='Blue' colorClass='bg-blue-500' onClick={changeBg}/>
          <Button colorName='Orange' colorClass='bg-orange-500' onClick={changeBg}/>
          <Button colorName='Black' colorClass='bg-black' onClick={changeBg}/>
          <Button colorName='Green' colorClass='bg-green-500' onClick={changeBg}/>
          <Button colorName='Purple' colorClass='bg-purple-500' onClick={changeBg}/>
          <Button colorName='Gray' colorClass='bg-slate-500' onClick={changeBg}/>
        </div>
      </div>
    </div>
  )
}

export default App
