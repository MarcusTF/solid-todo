import { useContext, createSignal, onCleanup } from "solid-js"
import { MainContext } from "../../Context/MainContext"
import logo from "../../logo.svg"

import "./Input.css"

const Input = () => {
  const [time, setTime] = createSignal(0)
  const [title, setTitle] = createSignal("")
  const [message, setMessage] = createSignal("")
  const { actions } = useContext(MainContext)

  const interval = setInterval(() => setTime(t => t + 1), 1000)
  onCleanup(() => clearInterval(interval))

  const handleSubmit = () => {
    actions.newTodo({ title: title(), message: message(), complete: false })
    setTitle("")
    setMessage("")
    setTime(0)
  }

  return (
    <div class='input-wrapper'>
      <h1 class='app-title'>
        This To-do app is pretty... <img src={logo} alt='solid js logo' />
        olid 😎
      </h1>
      <input
        placeholder='Todo Title'
        class='input input--title'
        type='text'
        onInput={e => setTitle(e.target.value)}
        value={title()}
      />
      <textarea
        placeholder='Todo message.'
        rows={5}
        res
        class='input input--message'
        onInput={e => setMessage(e.target.value)}
        value={message()}
      />
      <div className='counter-button-wrapper'>
        <p class='counter'>It has been {time()} seconds since the last todo was added.</p>
        <button class='button button--add-todo' onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  )
}

export default Input
