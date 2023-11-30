import React from "react";

function Button ({color, hex, onClick}) {
    return (
        <button  
        className="outline-none px-4 py-1 text-white rounded-full" 
        style={{backgroundColor : hex}}
        onClick={() => onClick(hex)}
        >{color}
        </button>
    )
}

export default Button