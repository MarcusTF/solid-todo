import { createSignal, useContext } from "solid-js"

import { MainContext } from "../../../Context/MainContext"

import "./Todo.css"

const Todo = props => {
  const { actions } = useContext(MainContext)

  const [isEditMode, setIsEditMode] = createSignal(false)
  const [title, setTitle] = createSignal(props.todo.title)
  const [message, setMessage] = createSignal(props.todo.message)

  return (
    <li class={`todo todo--${props.todo.id} ${isEditMode() ? "todo--edit-mode" : ""}`}>
      {isEditMode() ? (
        <div class='todo__input-wrapper'>
          <span class='todo__id'>Editing todo id #{props.todo.id}</span>
          <input
            placeholder={`Was: "${props.todo.title}"`}
            class='todo__input todo__input--title'
            onInput={e => setTitle(e.target.value)}
            value={title() || props.todo.title}
          />
          <textarea
            placeholder={`Was: "${props.todo.message}"`}
            class='todo__input todo__input--message'
            onInput={e => setMessage(e.target.value)}
            value={message() || props.todo.message}
          />
        </div>
      ) : (
        <>
          <span className='todo__index'>{props.index + 1}</span>
          <div class='todo__text-wrapper'>
            <h2 className='todo__title'>{props.todo.title}</h2>
            <p className='todo__message'>{props.todo.message}</p>
          </div>
        </>
      )}
      {isEditMode() ? (
        <div class='todo__buttons-wrapper'>
          <button
            class='button button--save-edit'
            onClick={() => {
              actions.updateTodo(props.todo.id, { title: title(), message: message() })
              setIsEditMode(false)
            }}
          >
            Save
          </button>
          <button
            class='button button--cancel-edit'
            onClick={() => {
              setTitle(props.todo.title)
              setMessage(props.todo.message)
              setIsEditMode(false)
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <button class='button button--edit' onClick={() => setIsEditMode(true)}>
            Edit
          </button>
          <button class='button button--delete' onClick={() => actions.deleteTodo(props.todo.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default Todo
