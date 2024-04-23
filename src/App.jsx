
import { useContext } from 'react';
import Display from './Components/Display';
import Input from './Components/Input';
import Show from './Components/Show';
import Upper from './Components/Upper';
import Todocontext from './context/Todocontext';


const App = () => {
  // const [task,settask] = useContext(Todocontext)
  return (
    <div>
      app
      
      <Display info='hello am rahul'>
        <h1>hello </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi accusantium quo odit hic exercitationem consectetur?</p>
      </Display>
      <Show/>
      <Upper/>

      <Input/>
      
    </div>
  )
}

export default App
