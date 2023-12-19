function Dice({dice, onClick}) {
  const images = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png']
  
  return (
      <div className='flex gap-6 justify-center items-center bg-purple-800 px-5 py-3 rounded-xl shadow-black shadow-md'>
        <img className='h-16' src={`./src/Projects/RandomDice/images/${images[dice - 1]}`}/>
        <button onClick={onClick} className='bg-purple-700 p-2 rounded-lg text-white font-semibold'>Roll The Dice</button>
      </div>
  )
}

export default Dice