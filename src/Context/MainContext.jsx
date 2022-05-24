import { createContext } from "solid-js"
import { createStore, produce } from "solid-js/store"

const initialState = [{ id: Date.now(), title: "Example Todo", message: "Create a new todo above", complete: false }]
const [state, setState] = createStore(initialState)

const actions = {
  newTodo: todoData => setState(produce(todos => todos.push({ id: Date.now(), ...todoData }))),
  deleteTodo: todoId => setState(todos => todos.filter(todo => todo.id !== todoId)),
  updateTodo: (todoId, newData) => {
    setState(
      produce(draft => {
        const index = draft.findIndex(todo => todo.id === todoId)
        if (index < 0) return
        draft[index].title = newData.title
        draft[index].message = newData.message
      })
    )
  },
}

export const MainContext = createContext({ state, actions })

const ContextProvider = props => (
  <MainContext.Provider value={{ state, actions }}> {props.children}</MainContext.Provider>
)

export default ContextProvider
