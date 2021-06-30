import React from "react";

function InputArea(props){
    return (
        <div className="form">
            <input onChange={props.typing} type="text" value={props.itemName}/>
            <button onClick={props.adding}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;