import { Component } from "react";
import styles from './Todo.module.scss';

export class TodoItem extends Component {
    render() {
        const {todo, onChange, onDelete} = this.props;

      
        return <div className={styles.content} >
            <label  className={styles.container} >
        <input type="checkbox" className={styles.checkbox} checked= {todo.IsCompleted} onChange= {(e) => {
                   onChange({
                    ...todo,
                    IsCompleted:  e.target.checked
                        })
                    }
            } />
          
                 {todo.text}
                <button className={styles.button} onClick={() => {
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    }
}