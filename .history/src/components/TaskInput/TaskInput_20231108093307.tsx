import React from 'react'
import styles from './taskInput.module.scss'
import { FaPlus } from 'react-icons/fa'
interface TaskInputProps {
  addTodo: (name: String) => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [inputTask, setTaskInput] = useState('')
  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='caption goes here' onChange={(e) => setTaskInput(e.target.value)} />
        <button type='submit' onSubmit={() => addTodo(inputTask)}>
          <FaPlus />
        </button>
      </form>
    </div>
  )
}
