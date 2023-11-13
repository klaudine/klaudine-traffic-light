import React, { useState, useEffect } from "react";


 let Light = () => {
    const [ color, setColor ] = useState(false)

    const handleClick= () => {
        setColor();
    }


    return (
        <div>
            <div className={"light red"} onClick={handleClick}> </div>

            <div className={"light yellow"} onClick={handleClick}></div>
            
            <div className={"light green"} onClick={handleClick}></div>
        </div>
    );
}



export default Light; 