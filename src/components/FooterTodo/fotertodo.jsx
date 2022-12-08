import { Component } from "react";
import styles from "./FooterToDo.module.scss"

export class FooterTodo extends Component {
    render () {
        return <div className={styles.conteiner}>
            <p className={styles.opasity}>Your life is a blank page. you write on it.</p>
            <p className={styles.strong}>So start by adding your tasks here</p>
        </div>
    }
}