import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header/Header'
import Todo from './components/Todo/Todo'

const LOCAL_STORAGE_KEY = 'todo:savedTasks'

function App() {
  const [todos, setTodos] = useState([])

  const loadTodos = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }

  const savedTasks = (newTodos) => {
    setTodos(newTodos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos))
  }

  useEffect(() => {
    loadTodos()
  }, [])

  const addTodoHandler = (text) => {
    savedTasks([
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        isCompleted: false,
      },
    ])
  }

  const setTodoCompleteHandler = (todoId) => {
    savedTasks(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          }
        }
        return todo
      })
    )
  }

  const deleteTodoHandler = (todoId) => {
    savedTasks(todos.filter((todo) => todo.id !== todoId))
  }

  return (
    <div className={styles.App}>
      <Header addTodo={addTodoHandler} />
      <Todo
        todos={todos}
        setTodoComplete={setTodoCompleteHandler}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  )
}

export default App
