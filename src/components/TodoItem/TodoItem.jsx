import { FaRegCircle } from 'react-icons/fa'
import { CgTrash } from 'react-icons/cg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import styles from './TodoItem.module.scss'

function TodoItem({ todo, setTodoComplete, deleteTodo }) {
  return (
    <>
      <li className={styles.todoWrapperItem}>
        <button
          className={styles.todoWrapperItemChecked}
          onClick={() => setTodoComplete(todo.id)}
        >
          {todo.isCompleted ? <BsFillCheckCircleFill /> : <FaRegCircle />}
        </button>
        <p className={todo.isCompleted ? styles.completed : ''}>{todo.text}</p>
        <button onClick={() => deleteTodo(todo.id)}>
          <CgTrash className={styles.todoWrapperItemDelete} />
        </button>
      </li>
    </>
  )
}

export default TodoItem
