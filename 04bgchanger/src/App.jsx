import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState('#808000')

  function changeBg (newColor) {
    setColor(newColor)
  }

  return (
    <div className='h-screen w-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center bg-white shadow-lg px-3 py-2 rounded-3xl'>
          <Button color='Red' hex='#FF0000' onClick={changeBg}/>
          <Button color='Pink' hex='#FF69B4' onClick={changeBg}/>
          <Button color='Blue' hex='#89CFF0' onClick={changeBg}/>
          <Button color='Orange' hex='#FF5733' onClick={changeBg}/>
          <Button color='Black' hex='#000000' onClick={changeBg}/>
          <Button color='Yellow' hex='#FFFF00' onClick={changeBg}/>
          <Button color='Green' hex='#097969' onClick={changeBg}/>
          <Button color='Purple' hex='#BF40BF' onClick={changeBg}/>
          <Button color='Gray' hex='#808080' onClick={changeBg}/>
        </div>
      </div>
    </div>
  )
}

export default App
