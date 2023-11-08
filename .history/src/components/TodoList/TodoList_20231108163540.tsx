import React, { useState, useEffect } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import { Todo } from '../../@types/todo.type'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const [listTask, setListTask] = useState<Todo[]>([])
  const doneTasks = listTask.filter((task) => task.done)
  const notDoneTasks = listTask.filter((task) => !task.done)
  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const listTaskParse = JSON.parse(todosString || '[]')
    setListTask(listTaskParse)
  }, [])

  const handleSaveStorage = (todos: Todo[]) => {
    const todosString = JSON.stringify(todos)
    localStorage.setItem('todos', todosString)
  }

  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: listTask.length + 1 }
    setListTask((prev) => [...prev, todo])
    const todosObject = [...listTask, todo]
    handleSaveStorage(todosObject)
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
    const todosObject = listTask.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      }
      return todo
    })
    handleSaveStorage(todosObject)
  }

  const handleGetCurrentTodo = (id: number) => {
    const findTodo = listTask.find((todo) => todo.id === id)
    if (findTodo) {
      setCurrentTodo(findTodo)
    }
  }

  const handleEditNameTodos = (id: number, name: String) => {
    setListTask((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name }
        }
        return todo
      })
    })
    setCurrentTodo(null)
  }

  const handleDelete = (id: number) => {
    setListTask((prev) => {
      return prev.filter((todo) => {
        if (todo.id !== id) {
          return todo
        }
      })
    })
    const todosObject = listTask.filter((todo) => {
      if (todo.id !== id) {
        return todo
      }
    })
    handleSaveStorage(todosObject)
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} handleEditNameTodos={handleEditNameTodos} />
        <TaskList
          doneTaskList={false}
          todos={notDoneTasks}
          handleEditDoneTodos={handleEditDoneTodos}
          handleDelete={handleDelete}
          handleGetCurrentTodo={handleGetCurrentTodo}
        />
        <TaskList
          doneTaskList={true}
          todos={doneTasks}
          handleEditDoneTodos={handleEditDoneTodos}
          handleDelete={handleDelete}
          handleGetCurrentTodo={handleGetCurrentTodo}
        />
      </div>
    </div>
  )
}
