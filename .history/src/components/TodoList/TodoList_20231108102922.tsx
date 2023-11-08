import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import { Todo } from '../../@types/todo.type'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  const [listTask, setListTask] = useState<Todo[]>([])
  const doneTasks = listTask.filter((task) => task.done)
  const notDoneTasks = listTask.filter((task) => !task.done)
  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: listTask.length + 1 }
    setListTask((prev) => [...prev, todo])
  }
  const handleEditDoneTodos = (id: number, done: boolean) => {
    setListTask((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

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
