import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [listTask, setListTask] = useState<Todo[]>([])
  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: new Date().toISOString() }
    setListTask((prev) => [...prev, todo])
  }
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} />
        <TaskList doneTaskList={true} />
      </div>
    </div>
  )
}
