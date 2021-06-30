import React from "react";

function InputArea(props){
    const [inputText, setText] = React.useState("");
    function handleChange(event){
        const inputValue = event.target.value;
        setText(inputValue);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText}/>
            <button onClick={()=>{
                props.adding(inputText);
                setText("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;