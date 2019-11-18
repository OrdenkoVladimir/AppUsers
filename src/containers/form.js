import React, {useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { newUserAdd } from '../actions/index'

const Form = (props) => {

    const [newUser, setNewUser] = useState({})

    const HandlerOnChangeName = (e) => {
        setNewUser({
            ...newUser,
            name: e.target.value
        })
        
    }
    const HandlerOnChangeAge = (e) => {
        setNewUser({
            ...newUser,
            age: e.target.value
        })
    }
    const HandlerOnChangeCity = (e) => {
        setNewUser({
            ...newUser,
            city: e.target.value
        })
    }

    const HandlerAdd = (e) => {
       e.preventDefault()
        props.newUserAdd(newUser)
        setNewUser({})

    }
    return (
        <form onSubmit={HandlerAdd} >
            <label>
                Name<br />
                <input
                type="text" 
                value={newUser.name || ''} 
                onChange={HandlerOnChangeName} 
                required
                />
            </label>
           <label>
               Age<br />
               <input 
               type="number" 
               value={newUser.age  || ''} 
               onChange={HandlerOnChangeAge} 
               required
               />
           </label>
           <label>
               City<br />
               <input 
               type="text" 
               value={newUser.city  || ''} 
               onChange={HandlerOnChangeCity}
               required
               />
           </label>
            
            <button type="submit" >Добавить</button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.item
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        newUserAdd: bindActionCreators(newUserAdd, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form)