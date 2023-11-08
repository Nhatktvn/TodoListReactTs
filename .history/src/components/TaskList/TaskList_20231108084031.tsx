import React from 'react'
import styles from './tasklist.module.scss'
export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>Hoàn thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' />
          <span>Học reactJs</span>
          <div className={styles.taskAction}>
            <button className={styles.btn}>🖊</button>
            <button className={styles.btn}>🗑</button>
          </div>
        </div>
      </div>
    </div>
  )
}
