import { Component } from "react";
import styles from "./TodoForm.module.scss";

export class TodoForm extends Component {
    state = {
        text: ""
    }

    render() {
        const { text } = this.state;
        const {Additem, todo } = this.props;

 
       
        return <form className={styles.form} 
        
           onSubmit = {(e) => {
            e.preventDefault() 
            Additem(text)
            this.setState ({
                text: ""
            })
           

        } }>
            <input placeholder="write here" type="text" className={styles.input} value={text} onChange ={  (e) => this.setState({
                text: e.target.value
                
            })} />
            <button className={styles.button} >Add </button>
        </form>
    }
}