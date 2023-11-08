import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [listTask, setListTask] = useState<Todo[]>([])
  const [inputTask, setTaskInput] = useState('')
  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: new Date().toISOString() }
    setListTask((prev) => [...prev, todo])
  }
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList doneTaskList={false} addTodo={addTodo} />
        <TaskList doneTaskList={true} addTodo={addTodo} />
      </div>
    </div>
  )
}
