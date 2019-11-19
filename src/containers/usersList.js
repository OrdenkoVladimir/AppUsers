import React from 'react'
import { connect } from 'react-redux'



const UsersList = (props) => {
    return (
           !props.users.length ? 
           <tr>
               <td>Empty</td>
               <td>Empty</td>
               <td>Empty</td>
           </tr> 
           :
           props.users.map((user, index) => {
          return (
            
            <tr key={index}> 
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
        users: state.item,
    }
}



export default connect(mapStateToProps)(UsersList)