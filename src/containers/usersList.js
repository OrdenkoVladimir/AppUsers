import React from 'react'
import { connect } from 'react-redux'



const UsersList = (props) => {
    return (
                 
           props.users.map((user, index) => {
          return (
            
            <tr> 
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
            </tr>
          )
        }) 
        
        
      
    
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.item
    }
}



export default connect(mapStateToProps)(UsersList)