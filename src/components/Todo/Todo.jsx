import styles from './Todo.module.scss'
import TodoItem from '../TodoItem/TodoItem'

function Todo({ todos, setTodoComplete, deleteTodo }) {
  const todosCount = todos.length
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.todo}>
      <div className={styles.todoTop}>
        <div className={styles.todoTopLeft}>
          Created todos <span>{todosCount}</span>
        </div>
        <div className={styles.todoTopRight}>
          Completed
          <span>
            {completedTodosCount} of {todosCount}
          </span>
        </div>
      </div>
      <ul className={styles.todoWrapper}>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            setTodoComplete={setTodoComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default Todo
