import { Component } from "react";
import { TodoItem } from "../Todoitem/todoitem";




export class TodoList extends Component {
    
 render () {
     const { todos, onChange,onDelete } = this.props;
    return <div>
        {todos.map((todo) => {
          return (
           <TodoItem 
               key={todo.id} 
               todo = {todo} 
               onChange = {onChange}
               onDelete = {onDelete}

               />
          )  
        })}
    </div>
 }     


}
