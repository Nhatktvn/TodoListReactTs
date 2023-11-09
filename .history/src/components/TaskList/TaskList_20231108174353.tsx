import React from 'react'
import styles from './tasklist.module.scss'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { Todo } from '../../@types/todo.type'
interface TaskLiskProps {
  doneTaskList: boolean
  todos: Todo[]
  handleEditDoneTodos: (id: number, done: boolean) => void
  handleDelete: (id: number) => void
  handleGetCurrentTodo: (id: number) => void
}
export default function TaskList(props: TaskLiskProps) {
  const { doneTaskList, todos, handleEditDoneTodos, handleDelete, handleGetCurrentTodo } = props
  console.log('hello')

  return (
    <div>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((val) => {
          return (
            <div className={styles.task} key={val.id}>
              <input type='checkbox' checked={val.done} onChange={() => handleEditDoneTodos(val.id, !val.done)} />
              <span className={`${styles.taskName} ${val.done ? styles.taskNameDone : ''}`}>{val.name}</span>
              <div className={styles.taskAction}>
                <button className={styles.btn} onClick={() => handleGetCurrentTodo(val.id)}>
                  <AiFillEdit />
                </button>
                <button className={styles.btn} onClick={() => handleDelete(val.id)}>
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
