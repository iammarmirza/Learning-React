import React from "react";

function Button ({colorName, colorClass, onClick}) {
    return (
        <button  
        className={`outline-none px-4 py-1 text-white rounded-full ${colorClass}`}
        onClick={() => onClick(colorClass)}
        >{colorName}
        </button>
    )
}

export default Button