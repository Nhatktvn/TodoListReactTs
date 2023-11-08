import React, { useState } from 'react'
import styles from './taskInput.module.scss'
import { FaPlus } from 'react-icons/fa'
import { Todo } from '../../@types/todo.type'
interface TaskInputProps {
  addTodo: (name: String) => void
  currentTodo: Todo
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo } = props
  const [inputTask, setTaskInput] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(inputTask)
    setTaskInput('')
  }
  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={`${currentTodo} ? ${currentTodo.name} : ${inputTask}`}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type='submit'>
          <FaPlus />
        </button>
      </form>
    </div>
  )
}
