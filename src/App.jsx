import React from "react";

function App(){
    const [inputText, setText] = React.useState("");
    const [items, setItems] = React.useState([]);

    function handleChange(event){
        const inputValue = event.target.value;
        setText(inputValue);
    }
    function handleClick(){
        setItems((prevValue)=>{
            return [...prevValue,inputText];
        });
        setText("");
    }
    return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText}/>
            <button onClick={handleClick}>
                <span>Add</span>
            </button>
        </div>
        <ul>
            {items.map((item,index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    </div>)
}

export default App;