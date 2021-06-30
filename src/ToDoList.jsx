import React from "react";

function List(props){
    return <li onClick={()=>{props.doneItems(props.id)}}>{props.listItems}</li>
}

export default List;