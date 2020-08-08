import React from "react";


const Todo =props=>{
    return(
        
            <div className={`toDo ${props.toDo.completed ? "completed":" "}`}
            onClick={()=>{props.toggleList(props.toDo.id)}}>
            {props.toDo.task}
        </div>
    )
}
export default Todo;