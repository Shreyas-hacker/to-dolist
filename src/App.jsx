import React from "react";
import List from "./ToDoList";
import InputArea from "./InputArea";

function App(){
    const [items, setItems] = React.useState([]);

    function addItems(inputText){
        setItems((prevValue)=>{
            return [...prevValue,inputText];
        });
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
        <InputArea adding={addItems}/>
        <ul>
            {items.map((item,index)=>{
                return <List key={index} id= {index} listItems={item} doneItem={deleteItem}/>
            })}
        </ul>
    </div>)
}

export default App;