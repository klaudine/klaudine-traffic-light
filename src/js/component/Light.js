import React from "react";


const Light = ({ color }) => {
    return (
        <div>
            <div className="light" style={{ background: color}}></div>
            <div className="light" style={{ background: color}}></div>
            <div className="light" style={{ background: color}}></div>
        </div>
    );
}



export default Light;