import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todocontext from './context/Todocontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Todocontext>
      <App />
    </Todocontext>
)
