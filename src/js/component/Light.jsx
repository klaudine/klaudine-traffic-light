import React, { useState } from "react";


const Light = () => {
    const [ color, setColor ] = useState("")


    return (
        <div>
            <div className="red"  onClick={()=>setColor("glow")}> </div>
            <div className="yellow" ></div>
            <div className="green" ></div>
        </div>
    );
}



export default Light; 