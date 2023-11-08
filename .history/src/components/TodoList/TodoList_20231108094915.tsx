import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [listTask, setListTask] = useState<Todo[]>([])
  const doneTasks = listTask.filter((task) => task.done)
  const notDoneTasks = listTask.filter((task) => !task.done)
  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: new Date().toISOString() }
    setListTask((prev) => [...prev, todo])
  }
  console.log(listTask)

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} listTask={listTask} />
        <TaskList doneTaskList={true} listTask={listTask} />
      </div>
    </div>
  )
}
