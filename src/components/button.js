import React from 'react'
import Stop from '../index'
function Button() {
 function Reset(){
     clearInterval(Stop);
 }
    return (
        <>
            <button className="button" onClick={Reset}>
                Stop
    </button>
        </>
    )

}

export default Button;