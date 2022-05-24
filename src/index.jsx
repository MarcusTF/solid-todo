/* @refresh reload */
import { render } from "solid-js/web"

import App from "./App"
import ContextProvider from "./Context/MainContext"

import "./index.css"

render(
  () => (
    <ContextProvider>
      <App />
    </ContextProvider>
  ),
  document.getElementById("root")
)
