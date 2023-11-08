import React from 'react'
import styles from './tasklist.module.scss'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
export default function TaskList(props) {
  const { doneTaskList } = props
  return (
    <div>
      <h2 className={styles.title}>Hoàn thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' />
          <span className={styles.taskName}>Học reactJs</span>
          <div className={styles.taskAction}>
            <button className={styles.btn}>
              <AiFillEdit />
            </button>
            <button className={styles.btn}>
              <MdDelete />
            </button>
          </div>
        </div>
        <div className={styles.task}>
          <input type='checkbox' />
          <span className={styles.taskName}>Học reactJs</span>
          <div className={styles.taskAction}>
            <button className={styles.btn}>
              <AiFillEdit />
            </button>
            <button className={styles.btn}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
