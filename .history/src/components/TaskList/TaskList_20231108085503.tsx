import React from 'react'
import styles from './tasklist.module.scss'
import { AiFillEdit } from 'react-icons/ai'
export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>Hoàn thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' />
          <span>Học reactJs</span>
          <div className={styles.taskAction}>
            <button className={styles.btn}>
              <AiFillEdit />
            </button>
            <button className={styles.btn}>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}
