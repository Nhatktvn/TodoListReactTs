import React from 'react'
import style from './todoList.module.scss'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
export default function TodoList() {
  return (
    <div>
      <TaskInput />
      <TaskList />
    </div>
  )
}
