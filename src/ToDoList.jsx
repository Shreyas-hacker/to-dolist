import React from "react";

function List(props){
    return <li onClick={()=>{props.doneItem(props.id)}}>{props.listItems}</li>
}

export default List;