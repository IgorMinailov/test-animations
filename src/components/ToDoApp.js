import React, {Component} from 'react';
import TodoForm from './TodoForm';
import ToDoList from './ToDoList';


class ToDoApp extends Component{
    constructor(props){
      super(props);
      this.state = {
        data: [],
        count: 0
      }
    }

    addTodo(value){
      let count = this.state.count;
      const todo = {text: value, isCompleted: false, id: count++};

      const prevData = [...this.state.data];
      prevData.push(todo);

      this.setState({data: [...prevData]});
      this.setState((state) => {
        return {data: prevData, count: count}
      });
    }

    handleRemove(id){
      const prevData = [...this.state.data];
      const newData = prevData.map(item => {
        if(item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });

      this.setState({data: newData});
    }
  
    render(){
      const {data} = this.state;

      return (
        <div>
          <TodoForm addTodo={this.addTodo.bind(this)}/>
          {!!data.length &&
            <ToDoList 
              todos={data}
              remove={this.handleRemove.bind(this)}
            />}
        </div>
      );
    }
  }

  export default ToDoApp;