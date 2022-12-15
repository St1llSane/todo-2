import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import styles from './Header.module.scss'

function Header({ addTodo }) {
  const [inputText, setInputText] = useState('')

  const onAddTodoHandler = (e) => {
    e.preventDefault()
    addTodo(inputText)
    setInputText('')
  }

  const onChangeInputHandler = (e) => {
    setInputText(e.target.value)
  }

  return (
    <div className={styles.header}>
      <img src="images/logo.svg" alt="" />
      <form className={styles.headerForm} onSubmit={onAddTodoHandler}>
        <input
          placeholder="Add a new todo"
          type="text"
          value={inputText}
          onChange={onChangeInputHandler}
        ></input>
        <button>
          Create <AiOutlinePlusCircle size={18} />
        </button>
      </form>
    </div>
  )
}

export default Header
