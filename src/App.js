import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";
import { toDoList } from "./data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList
    };
  }
  toggleList=toDoId=>{
    console.log(toDoId);
    this.setState({
      toDoList:this.state.toDoList.map(
        (toDo)=>{
          if(toDoId===toDo.id){
            return{
              ...toDo,
              completed:!toDo.completed
            };
          }
        return toDo;
        })
    });
  };
 
  addTask=item=>{
  const newItem={
    task: item,
    id: Date.now(),
    completed: false
  }
  this.setState({
    toDoList:[...this.state.toDoList,newItem]
  });
  };

   clearcompleted= () =>{
this.setState({
  toDoList: this.state.toDoList.filter(
    toDo=>!toDo.completed
  )
})
   }
  
render() {
  return (
    <div className="App">
      <div className="header">
      <h1>Welcome to your Todo App!</h1>
      <TodoForm 
        addTask={this.addTask}/>
      </div>
      <TodoList
        todolist={this.state.toDoList}
        toggleList={this.toggleList} 
        clearcompleted={this.clearcompleted}
    
        />
    </div>
  );
}
}
export default App;










