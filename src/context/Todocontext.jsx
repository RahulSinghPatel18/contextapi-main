import { createContext, useState } from "react"

export const todocontext = createContext(null)
 
const Todocontext = (props) => {
    const [task,settask] = useState([
        {task: 'task',complete: false}
    ])
    
  return (
    <todocontext.Provider value={[task,settask]}>
      {props.children}
    </todocontext.Provider>
  )
}

export default Todocontext
