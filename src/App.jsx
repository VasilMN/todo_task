import { Component } from "react";
import { FooterTodo } from "./components/FooterTodo/fotertodo";
import { TodoForm } from "./components/TodoForm/todoform";
import { TodoList } from "./components/TodoList/todolist";
import "./index.scss"

export class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todo")) || []
  }
  Additem = (text) => {
  if (text !== "" && text.length <= 54) {
    this.setState ({
      todos: [...this.state.todos,
        {
          id: Math.random(),
          text: text,
          IsCompleted: false
         }
       
      ],
     
      
    })

  } 
  
  }

 componentDidUpdate () {
  if (this.state.todos.length) {
    localStorage.setItem ("todo", JSON.stringify(this.state.todos));
    

  }
  
  } 
 
  render() {
    const { todos } = this.state;

    return <div className="container">
      <div>
        <h1 className="text">Task</h1>
      <TodoForm Additem ={this.Additem} todo = {todos}  />
      <TodoList 
           todos = {todos} 
           onDelete = {(todo) => {
            const filererdtodo = todos.filter((t) => t.id !== todo.id)
            console.log(filererdtodo)
            this.setState({
              todos: filererdtodo,
            })

           }}
           onChange = { (newtodo) => {
           const newmap = todos.map(( todo ) => {
               if(todo.id === newtodo.id ) {
                return newtodo
               }
               return todo
            })
            this.setState ({
              todos: newmap
            })
           }        
          
          
           }
           />
      <FooterTodo   />
    </div> 
    </div>
  }
}