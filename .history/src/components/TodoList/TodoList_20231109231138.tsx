import React, { useState, useEffect, useRef } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import { Todo } from '../../@types/todo.type'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const [listTask, setListTask] = useState<Todo[]>([])
  const doneTasks = listTask.filter((task) => task.done)
  const notDoneTasks = listTask.filter((task) => !task.done)
  const textInput = useRef()
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
      const rs = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
      handleSaveStorage(rs)
      return rs
    })
  }

  const handleGetCurrentTodo = (id: number) => {
    const findTodo = listTask.find((todo) => todo.id === id)
    if (findTodo) {
      setCurrentTodo(findTodo)
    }
  }

  const handleEditNameTodos = (id: number, name: String) => {
    setListTask((prev) => {
      const rs = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name }
        }
        return todo
      })
      handleSaveStorage(rs)
      return rs
    })
    setCurrentTodo(null)
  }

  const handleDelete = (id: number) => {
    setListTask((prev) => {
      const findIndexTodo = prev.findIndex((todo) => todo.id === id)
      if (findIndexTodo > -1) {
        const rs = [...prev]
        rs.splice(findIndexTodo, 1)
        handleSaveStorage(rs)
        return rs
      }
      return prev
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          handleEditNameTodos={handleEditNameTodos}
          textInput={textInput}
        />
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
