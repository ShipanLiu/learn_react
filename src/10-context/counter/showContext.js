import { createContext } from "react"

let {Provider, Consumer} = createContext({name: "jiba"})

export {
  Provider,
  Consumer
}