import { For, useContext } from "solid-js"

import { MainContext } from "../../../Context/MainContext"
import Todo from "../Todo/Todo"

import "./TodoList.css"

const TodoList = () => {
  const { state } = useContext(MainContext)
  return (
    <ul class='todo-list'>
      <For each={state}>{(todo, index) => <Todo todo={todo} index={index()} />}</For>
    </ul>
  )
}

export default TodoList
