import React, { useState } from 'react'
import styles from './taskInput.module.scss'
import { FaPlus } from 'react-icons/fa'
interface TaskInputProps {
  addTodo: (name: String) => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [inputTask, setTaskInput] = useState<String>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo(inputTask)
  }
  console.log(inputTask)

  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='caption goes here' onChange={(e) => setTaskInput(e.target.value)} />
        <button type='submit'>
          <FaPlus />
        </button>
      </form>
    </div>
  )
}
