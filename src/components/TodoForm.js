import React from "react";
class TodoForm extends React.Component {
    //Constructor with state
    constructor() {
        super();
        this.state = {
            itemText: "",
        };
    }
    changeHandler=e=>{
        // console.log("hi");
        this.setState({itemText:e.target.value });
    };
    submitHandler=e=>{
        e.preventDefault();
        this.props.addTask(this.state.itemText);
        this.setState({itemText:"" });
    };
    render() {
        return (
                <form onSubmit={this.submitHandler}>
                    <input 
                    type="text"
                    name="itemText"
                    value={this.state.itemText}
                    onChange={this.changeHandler}
                    />
                     <button type="submit">Add</button>
                     
                </form>
            
        );
    }
}
export default TodoForm;