import React from 'react'
import styles from './taskInput.module.scss'
import {FaPlus} from 
export default function TaskInput() {
  return (
    <div>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='caption goes here' />
        <button type='submit'><FaPlus/></button>
      </form>
    </div>
  )
}
