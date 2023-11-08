import React, { useState } from 'react'
import styles from './tasklist.module.scss'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Todo } from '../../@types/todo.type'
interface TaskLiskProps {
  doneTaskList: boolean
}
export default function TaskList(props: TaskLiskProps) {
  const { doneTaskList } = props
  const [listTask, setListTask] = useState<Todo[]>([])

  const addTodo = (name: String) => {
    const todo: Todo = { done: false, name, id: new Date().toISOString() }
    setListTask((prev) => [...prev, todo])
  }
  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
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
