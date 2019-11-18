import React from 'react'
import UsersList from '../../containers/usersList'
import DeleteButtons from '../../containers/deleteButton'
import './App.css'
import HeaderSort from '../../containers/headerSort'
import Form from '../../containers/form'

const App = (props) => {
  
  return (
    <div className="container">
        <div className="table-block">
          <table>
            <thead>
                <HeaderSort />
            </thead>
            <tbody>
                <UsersList />
            </tbody>
          </table>
          <DeleteButtons />
         </div>
          <div className="form-block">
            <Form />
          </div>
    </div>
    
  )
}



export default App;
