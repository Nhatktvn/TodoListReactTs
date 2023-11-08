import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList.1'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [listTask, setListTask] = useState<Todo[]>([])
  const doneTasks = listTask.filter((task) => task.done)
  const notDoneTasks = listTask.filter((task) => !task.done)
  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: Date.now().toString() }
    setListTask((prev) => [...prev, todo])
  }
  console.log(listTask)

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList doneTaskList={false} todos={notDoneTasks} />
        <TaskList doneTaskList={true} todos={doneTasks} />
      </div>
    </div>
  )
}
