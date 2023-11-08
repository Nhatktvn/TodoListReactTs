import React from 'react'
import styles from './tasklist.module.scss'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Todo } from '../../@types/todo.type'

export default function TaskList(props) {
  const { doneTaskList, todos } = props

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((val: Todo) => {
          return (
            <div className={styles.task} key={val.id}>
              <input type='checkbox' />
              <span className={styles.taskName}>{val.name}</span>
              <div className={styles.taskAction}>
                <button className={styles.btn}>
                  <AiFillEdit />
                </button>
                <button className={styles.btn}>
                  <MdDelete />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
