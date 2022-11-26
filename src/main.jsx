import React from 'react'
import ReactDOM from 'react-dom/client'
// import { SimpleForm } from './02-useEffect/SimpleForm'
import { Form } from './components/Form'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SimpleForm/> */}
    <Form initialPrice={269}/>
  </React.StrictMode>
)
