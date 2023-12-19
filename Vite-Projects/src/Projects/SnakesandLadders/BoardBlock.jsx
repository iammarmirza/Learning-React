import React, {useState, useEffect} from "react"

function BoardBlock({dice, isGameActive}) {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        if (dice === 6 && !isGameActive) {
            alert("Let's start the Game!")
            setPosition(1)
        }

        if (isGameActive) {
            setPosition(position + dice)
        }

    }, [dice, isGameActive])

    const NUMBERS = [
        [36, 35, 34, 33, 32, 31],
        [25, 26, 27, 28, 29, 30],
        [24, 23, 22, 21, 20, 19],
        [13, 14, 15, 16, 17, 18],
        [12, 11, 10, 9, 8, 7],
        [1, 2, 3, 4, 5, 6]
    ];

    const SNAKES = {
        8: 4,
        15: 10,
        23: 17,
        32: 25
    }

    const LADDERS = {
        2: 7,
        6: 12,
        19: 25,
        27: 31,
    }

    return (
        <div className="mt-5 bg-white shadow-black shadow-lg">
            {NUMBERS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((number) => (
                        <div key={number} className={`${position === number ? 'border-8 border-yellow-300' : ''} 
                            ${SNAKES[number] ? "bg-[url('./src/Projects/SnakesandLadders/images/snake.png')] bg-cover" : ''} 
                            ${LADDERS[number] ? "bg-[url('./src/Projects/SnakesandLadders/images/ladder.png')] bg-center bg-cover" : ''} 
                            w-20 h-20 border border-purple-900 flex items-center justify-center`}>
                            <span className="text-xl shadow-gray-700 shadow-md bg-white w-8 h-8 font-bold text-center rounded-full">{number}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );

}

export default BoardBlock