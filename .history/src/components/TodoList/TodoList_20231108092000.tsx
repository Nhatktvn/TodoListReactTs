import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  const [listTask, setListTask] = useState([
    {
      name: 'Học reactJs',
      done: false
    }
  ])
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList doneTaskList={false} />
        <TaskList doneTaskList={true} />
      </div>
    </div>
  )
}
