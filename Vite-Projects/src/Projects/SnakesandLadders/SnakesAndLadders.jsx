import React, { useState, useEffect } from 'react';
import Dice from './Dice';
import BoardBlock from './BoardBlock';


function SnakesAndLadders() {
    const [dice, setDice] = useState(1)
    const [isGameActive, setIsGameActive] = useState(false)

    const generateRandomNumber = () => {
        setDice(Math.floor(Math.random() * 6) + 1)
    }

    useEffect(() => {

        if (dice === 6) {
            setIsGameActive(true)
        }

    }, [dice])


    return (
        <div className='flex flex-col items-center gap-6 h-screen bg-purple-900'>
            <BoardBlock dice={dice} isGameActive={isGameActive}/>
            <Dice dice={dice} onClick={generateRandomNumber} />
        </div>
    )
}

export default SnakesAndLadders