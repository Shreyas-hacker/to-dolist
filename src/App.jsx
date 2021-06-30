import React from "react";
import List from "./ToDoList";
import InputArea from "./InputArea";

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

    function deleteItem(id){
        setItems((prevValue)=>{
            return prevValue.filter((item,index)=>{
                return index !== id;
            })
        })
    }
    return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <InputArea typing={handleChange} adding={handleClick} itemName={inputText}/>
        <ul>
            {items.map((item,index)=>{
                return <List key={index} id= {index} listItems={item} doneItem={deleteItem}/>
            })}
        </ul>
    </div>)
}

export default App;