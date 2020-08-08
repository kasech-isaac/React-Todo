// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";




const TodoList=props=>{
    return(
<div className="shopping-list">
        {props.todolist.map((toDo)=>{
    return <Todo toDo={toDo} key={toDo.id} toggleList={props.toggleList}/>
        })}
          <button className="clear-button" onClick={props.clearcompleted}>Completed</button>
         </div>     
    );
}
export default TodoList;
