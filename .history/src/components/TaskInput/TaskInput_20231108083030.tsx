import React from 'react'
import styles from './taskInput.module.scss'
export default function TaskInput() {
  return (
    <div>
      <h1>To do list typescript</h1>
      <form>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
