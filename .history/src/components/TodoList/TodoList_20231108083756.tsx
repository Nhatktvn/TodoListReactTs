import React from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  return (
    <div className={styles.todoList}>
      <TaskInput />
      <TaskList />
    </div>
  )
}
