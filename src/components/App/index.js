import React from 'react'
import UsersList from '../../containers/usersList'
import DeleteButtons from '../../containers/deleteButton'
import './App.css'
import usersList from '../../containers/usersList'
import HeaderSort from '../../containers/headerSort'

const App = (props) => {
  
  return (
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
  )
}



export default App;
